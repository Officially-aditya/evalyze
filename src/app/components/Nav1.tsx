"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface User {
  name: string;
  email: string;
  image?: string;
}

export default function Nav1() {
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowDropdown(false);
    window.location.href = "/";
  };

  const isAuthenticated = !!user;

  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <span className="font-bold text-3xl text-gray-800 ml-10 cursor-pointer">
            Evalyze
          </span>
        </Link>
      </div>

      {/* Middle: Menu */}
      <nav
        className="hidden md:flex items-center justify-center rounded-xl bg-white shadow-md ml-30"
        style={{
          width: "500px",
          height: "62px",
          padding: "18px 18px",
        }}
      >
        <ul className="flex items-center gap-6 text-lg w-full justify-between">
          <li>
            <Link
              href="/categories"
              className="font-bold text-gray-600 hover:text-[#6438d6]"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="font-bold text-gray-600 hover:text-[#6438d6]"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-bold text-gray-600 hover:text-[#6438d6]"
            >
              AI
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="font-bold text-gray-600 hover:text-[#6438d6]"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right: Profile or Auth Buttons */}
      <div className="flex items-center gap-3 relative">
        {isAuthenticated ? (
          <div
            ref={profileRef}
            className="flex items-center gap-4 bg-[#defff8] px-4 py-2 rounded-xl shadow-md mr-30 cursor-pointer select-none"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <img
              src={user.image || "/default-avatar.avif"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold text-gray-800">{user.name}</span>

            {/* Dropdown */}
            {showDropdown && (
              <div
                className="absolute top-full right-0 mt-2 w-28 mr-25 bg-white rounded-md shadow-lg border border-gray-200"
                style={{ zIndex: 20 }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSignOut();
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-[#29b797] hover:bg-[#defff8] rounded-md"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/login">
              <button
                className="rounded-xl bg-[#defff8] text-black font-bold text-lg hover:shadow-md"
                style={{ height: "62px", padding: "0 36px" }}
              >
                Log in
              </button>
            </Link>
            <Link href="/signup">
              <button
                className="rounded-xl bg-[#29b797] text-white font-bold text-lg mr-10 hover:shadow-md"
                style={{ height: "62px", padding: "0 36px" }}
              >
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
