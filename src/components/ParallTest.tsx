"use client";

import { Parallax } from "react-scroll-parallax";

export default function Test() {
  return (
    <Parallax speed={-20}>
      <div className="flex justify-center w-screen h-screen text-center items-center bg-red-500">
        Test
      </div>
    </Parallax>
  );
}
