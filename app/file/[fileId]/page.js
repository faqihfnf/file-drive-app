"use client";
import React, { useEffect, useState } from "react";
import { app } from "@/firebaseConfig";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import FileItem from "./_components/FileItem";
import Link from "next/link";
import Image from "next/image";

function FileVew({ params }) {
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
  return (
    <div className="w-full h-screen flex flex-col gap-4 bg-slate-100 justify-center items-center">
      <Link href="">
        <Image src="/logo.svg" alt="logo" width={200} height={200} className="w-[100px] h-[100px]" />
      </Link>
      <FileItem file={file} />
    </div>
  );
}

export default FileVew;
