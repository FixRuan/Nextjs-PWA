import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";

export default function Home() {
  return (
    <div>
      <h2>Hello PWA</h2>
      <Image src={logo} alt="logo" width={100} />
    </div>
  );
}