import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="bg-slate-400 items-center text-center m-10 rounded-full">
      <div className=" bg-indigo-600 text-white rounded-full" style={{ width: `${progress}%` }}>
        {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  );
}

export default ProgressBar;
