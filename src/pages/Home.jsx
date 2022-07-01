import React from "react";
import Printers from '../components/printers'
import "../assets/css/style.css";

export default function Home() {
  return (
    <div className="home">
      Printer X
      <br />
      <Printers/>
    </div>
  );
}
