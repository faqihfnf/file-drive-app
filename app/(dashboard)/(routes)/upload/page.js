"use client";
import React from "react";
import UploadForm from "./__components/UploadForm";
import { app } from "@/firebaseConfig";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Upload() {
  const storage = getStorage(app);
  const uploadFile = (file) => {
    const metadata = {
      contentType: "file.type",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "file-upload/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");

      // Upload completed successfully, now we can get the download URL
      progress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
    });
  };
  return (
    <div>
      <h2 className="m-5 text-3xl text-center sm:text-5xl">
        Start <strong className="text-blue-700">Uploading </strong>Files here and <strong className="text-cyan-700">Share </strong>it with <strong className="text-red-700">Password</strong>
      </h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} />
    </div>
  );
}

export default Upload;
