"use client";
import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/firebaseConfig";
import Link from "next/link";
import { ArrowLeftSquare } from "lucide-react";
import FileInfo from "./_components/FileInfo";
import FileShareForm from "./_components/FileShareForm";

function FilePreview({ params }) {
  const db = getFirestore(app);
  const [file, setFile] = useState();
  useEffect(() => {
    // console.log(params?.fileId);
    params?.fileId && getFileInfo();
  }, []);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const onPasswordSubmit = (password) => {
    // if (password === file?.password) {
    //   console.log("correct password");
    // } else {
    //   console.log("wrong password");
    // }
  };

  return (
    <div className="py-10 px-20">
      <Link href="/upload" className="flex gap-3">
        <ArrowLeftSquare size={30} />
        Go Back{" "}
      </Link>
      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2">
        <FileInfo file={file} />
        <FileShareForm file={file} onPasswordSave={(password) => onPasswordSave(password)} />
      </div>
    </div>
  );
}

export default FilePreview;
