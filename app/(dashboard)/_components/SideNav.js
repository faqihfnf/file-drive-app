"use client";
import { CloudUpload, FileText, Shield } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

function SideNav() {
  const navList = [
    {
      id: 1,
      name: "Upload",
      icon: CloudUpload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: FileText,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  const [activeIndex, setActiveIndex] = useState();
  return (
    <div className="shawdow-sm h-full border-r">
      <div className="p-5 border-b">
        <Image src="/logo.svg" width={100} height={100} alt="Logo" />
      </div>
      <div className="flex flex-col float-left w-full">
        {navList.map((item, index) => (
          <button className={`flex items-center gap-2 p-4 w-full hover:bg-indigo-500 hover:text-white rounded-sm ${activeIndex === index ? "bg-slate-200 text-indigo-500" : null}`} onClick={() => setActiveIndex(index)}>
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
