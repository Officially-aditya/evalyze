'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await res.json();
      if (res.ok) {
        setMessage("✅ Logged in successfully!");
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        window.location.href = "/";
      } else {
        setMessage(`❌ ${result.error}`);
      }
    } catch {
      setMessage("❌ Something went wrong. Try again.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0120] via-[#120344] to-[#1c014d] text-white flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 md:px-12 py-6 backdrop-blur-md bg-white/5 border-b border-white/10 z-10">
        <div className="text-2xl font-semibold">Evalyze</div>
        <a
          href="/signup"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:opacity-90 transition"
        >
          Sign Up
        </a>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 items-center justify-center px-4 md:px-16 py-12 relative z-10 gap-12">
        {/* Left Info Section */}
        <div className="hidden md:flex flex-col space-y-6 text-gray-300 w-72">
          <div>
            <p className="font-semibold">Email</p>
            <p>info@constellation.ai</p>
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p className="leading-relaxed">45 Constellation Tower, Innovation Street, London, UK</p>
          </div>
          <div>
            <p className="font-semibold">Social Media</p>
            <p>@constellation.ai</p>
            <p>constellation</p>
          </div>
        </div>

        {/* Center Image / Glow */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute w-80 h-80 md:w-[520px] md:h-[400px] bg-gradient-to-tr from-purple-600/40 to-pink-500/40 rounded-full blur-2xl" />
          <img
            src="/3d-art.jpg"
            alt="3D Art"
            className="w-64 h-64 md:w-[500px] md:h-[500px] object-contain z-10"
          />
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md">
          <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl shadow-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Login to Your Account</h3>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 md:mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 md:px-5 md:py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 md:mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 md:px-5 md:py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-lg rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:opacity-90 transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            {message && <p className="mt-4 text-center text-sm md:text-base">{message}</p>}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[800px] h-[800px] bg-white/20 rounded-full blur-[200px]" />
      </div>
    </div>
  );
}
