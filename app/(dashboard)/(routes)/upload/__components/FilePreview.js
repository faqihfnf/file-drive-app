import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

function FilePreview({ file, removeFile }) {
  return (
    <div className="flex items-center gap-2 m-10 justify-center">
      <div className="md:w-[20%] w-[25%] flex justify-between items-center gap-2 p-2 bg-slate-100 border rounded-md">
        <Image src="/file.svg" width={50} height={50} alt="file" />
        <div className="text-left mb-2">
          <h2 className="text-3xl">{file.name}</h2>
          <h2 className="text-sm text-slate-400">
            {file.type} - {(file.size / 1024 / 1024).toFixed(2)} MB
          </h2>
        </div>
        <X size={30} className="cursor-pointer text-red-500 hover:text-red-700" onClick={() => removeFile()} />
      </div>
    </div>
  );
}

export default FilePreview;
