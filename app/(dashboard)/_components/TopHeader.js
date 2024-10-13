import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

function TopHeader() {
  return (
    <div className="flex p-5  justify-between items-center md:justify-end">
      <AlignJustify className="md:hidden" />
      <Image src="/logo.svg" width={100} height={100} alt="Logo" className="md:hidden" />
      <UserButton />
    </div>
  );
}

export default TopHeader;
