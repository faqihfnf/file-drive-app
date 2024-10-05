"use client";
import React from "react";
import UploadForm from "./__components/UploadForm";

function Upload() {
  return (
    <div>
      <h2 className="m-5 text-3xl text-center sm:text-5xl">
        Start <strong className="text-blue-700">Uploading </strong>Files here and <strong className="text-cyan-700">Share </strong>it with <strong className="text-red-700">Password</strong>
      </h2>
      <UploadForm />
    </div>
  );
}

export default Upload;
Upload;
