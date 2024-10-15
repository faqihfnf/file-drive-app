"use client";
import React, { useState, useEffect } from "react";
import UploadForm from "./__components/UploadForm";
// import { app } from "@/../../firebaseConfig";
import { app } from "@/firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Toast from "./__components/Toast";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { generateRandomString } from "@/app/_utils/GenerateRandomString";
import { useRouter } from "next/navigation";

function Upload() {
  const { user } = useUser();
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const [fileDocId, setFileDocId] = useState();
  const [showToast, setShowToast] = useState(false);
  const storage = getStorage(app);
  const db = getFirestore(app);

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };

    const storageRef = ref(storage, "file-upload/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);

      if (progress === 100) {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveInfo(file, downloadURL);
          setShowToast(true);
        });
      }
    });
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: "",
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "/file/" + docId,
    });
    setFileDocId(docId);
  };

  useEffect(() => {
    if (showToast && fileDocId) {
      const timer = setTimeout(() => {
        setShowToast(false);
        setProgress(0);
        router.push("/file-preview/" + fileDocId);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showToast, fileDocId]);
  return (
    <div>
      <h2 className="m-5 text-3xl text-center sm:text-5xl">
        Start <strong className="text-blue-700">Uploading </strong>Files here and <strong className="text-cyan-700">Share </strong>it with <strong className="text-red-700">Password</strong>
      </h2>
      <UploadForm uploadBtnClick={uploadFile} progress={progress} />
      {showToast && <Toast />}
    </div>
  );
}

export default Upload;
