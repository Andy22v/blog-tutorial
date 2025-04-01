"use client";

import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">
        <a href="#hero">
          <img src="/Loogo.png" alt="Logo" />
        </a>
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#feedback">Feedback</a>
        </li>
      </ul>
      <div className="menu" onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? "close.svg" : "menu.svg"} alt="Menu Icon" />
      </div>
    </nav>
  );
}
