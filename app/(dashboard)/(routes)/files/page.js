import { UserButton } from "@clerk/nextjs";
import React from "react";

function files() {
  return (
    <div>
      Files
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default files;
