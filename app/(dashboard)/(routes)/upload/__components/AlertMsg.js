import { AlertCircle } from "lucide-react";
import React from "react";

function AlertMsg({ message }) {
  return (
    <div className="p-4 bg-red-500 m-10 flex justify-center text-2xl gap-5 text-white rounded-md text-center items-center">
      <AlertCircle />
      {message}
    </div>
  );
}

export default AlertMsg;
