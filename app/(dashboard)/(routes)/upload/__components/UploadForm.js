import React, { useState } from "react";
import AlertMsg from "./AlertMsg";
import { CloudUpload } from "lucide-react";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

function UploadForm({ uploadBtnClick, progress }) {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const onFileSelect = (file) => {
    if (file && file.size > 2000000) {
      setErrorMsg("Ukuran file harus kurang dari 2MB");
      return;
    }
    setErrorMsg(null);
    setFile(file);
  };

  const handleUpload = () => {
    uploadBtnClick(file);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center m-10">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-96 border-2 border-indigo-300 border-dashed rounded-lg cursor-pointer bg-indigo-100 dark:bg-indigo-100 hover:bg-gray-100 dark:border-indigo-600 dark:hover:border-indigo-500 dark:hover:bg-indigo-200"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-12 h-12 mb-4 text-gray-500 dark:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5A5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-lg md:text-3xl text-slate-700 dark:text-slate-700">
              <span className="font-semibold">Click to upload</span> or <span className="text-blue-700">Drag</span> and <span className="text-cyan-700">Drop</span>
            </p>
            <p className="text-xs md:text-lg text-gray-500 dark:text-gray-400">JPG, SVG, PNG, JPG or GIF (Max Size : 2MB)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={(event) => onFileSelect(event.target.files[0])} />
        </label>
      </div>

      {errorMsg ? <AlertMsg message={errorMsg} /> : null}
      {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}
      <div className="flex items-center justify-center">
        <button
          disabled={!file || errorMsg}
          className="flex items-center justify-center gap-4 md:w-[20%] w-[25%] rounded-md bg-indigo-600 px-12 py-3 text-2xl font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-600 disabled:bg-slate-400 disabled:cursor-not-allowed"
          onClick={handleUpload}
        >
          <CloudUpload size={40} />
          Upload
        </button>
      </div>
      {progress > 0 && <ProgressBar progress={progress} />}
    </div>
  );
}

export default UploadForm;
