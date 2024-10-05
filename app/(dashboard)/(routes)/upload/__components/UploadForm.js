import React, { useState } from "react";
import AlertMsg from "./AlertMsg";
import { CloudUpload, FileText, Shield } from "lucide-react";
import FilePreview from "./FilePreview";

function UploadForm() {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const onFileSelect = (file) => {
    console.log(file);
    if (file && file.size > 2000000) {
      console.log("Size should be less than 2MB");
      setErrorMsg("Size should be less than 2MB");
      return;
    }
    setErrorMsg(null);
    setFile(file);
  };
  return (
    <div className="text-center ">
      <div class="flex items-center justify-center m-10">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-96 border-2 border-indigo-300 border-dashed rounded-lg cursor-pointer bg-indigo-100 dark:bg-indigo-100 hover:bg-gray-100 dark:border-indigo-600 dark:hover:border-indigo-500 dark:hover:bg-indigo-200"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-12 h-12 mb-4 text-gray-500 dark:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-lg md:text-3xl text-slate-700 dark:text-slate-700">
              <span class="font-semibold">Click to upload</span> or <span className="text-blue-700">drag</span> and <span className="text-cyan-700">drop</span>
            </p>
            <p class="text-xs md:text-lg text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (Max Size : 2 MB)</p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" onChange={(event) => onFileSelect(event.target.files[0])} />
        </label>
      </div>
      {errorMsg ? <AlertMsg message={errorMsg} /> : null}
      {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}
      <div className="flex  items-center justify-center">
        <button
          disabled={!file || errorMsg}
          className=" flex items-center justify-center gap-4 md:w-[20%] w-[25%] rounded-md bg-indigo-600 px-12 py-3 text-2xl font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-600 disabled:bg-slate-400 disabled:cursor-not-allowed"
        >
          <CloudUpload size={40} />
          Upload
        </button>
      </div>
    </div>
  );
}

export default UploadForm;
