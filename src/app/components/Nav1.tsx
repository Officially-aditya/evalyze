"use client";
import React from "react";
import Link from "next/link";

export default function Nav1() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-3xl text-gray-800 ml-10">
          Evalyze
        </span>
      </div>

      {/* Middle: Menu */}
      <nav
        className="hidden md:flex items-center justify-center rounded-xl bg-white shadow-md ml-26"
        style={{
          width: "500px",
          height: "62px",
          padding: "18px 18px",
        }}
      >
        <ul className="flex items-center gap-6 text-lg w-full justify-between">
          <li>
            <a href="#" className="font-bold text-gray-700 hover:text-[#6438d6]">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="font-bold text-gray-600 hover:text-[#6438d6]">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="font-bold text-gray-600 hover:text-[#6438d6]">
              AI
            </a>
          </li>
          <li>
            <a href="#" className="font-bold text-gray-600 hover:text-[#6438d6]">
              About Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Right: Auth buttons */}
      <div className="flex items-center gap-3">
        <Link href="/login">
          <button
            className="rounded-xl bg-[#defff8] text-black font-bold text-lg"
            style={{ height: "62px", padding: "0 36px" }}
          >
            Log in
          </button>
        </Link>
        <Link href="/signup">
          <button
            className="rounded-xl bg-[#29b797] text-white font-bold text-lg mr-10"
            style={{ height: "62px", padding: "0 36px" }}
          >
            Sign up
          </button>
        </Link>
      </div>
    </header>
  );
}
