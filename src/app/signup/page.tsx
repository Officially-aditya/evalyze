'use client';

import React, { useState } from 'react';

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setLoading(false);

    if (res.ok) {
      setMessage("✅ Account created successfully!");
    } else {
      setMessage(`❌ ${result.error}`);
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0120] via-[#120344] to-[#1c014d] text-white overflow-hidden flex flex-col">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-white/10 rounded-full blur-[180px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="text-xl md:text-2xl font-semibold">Evalyze</div>
        <div>
          <a
            href="/login"
            className="px-4 md:px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:opacity-90 transition"
          >
            Login
          </a>
        </div>
      </header>

      {/* Main Layout */}
      <div className="relative flex flex-col lg:flex-row flex-1 items-center justify-center gap-12 lg:gap-20 px-6 md:px-12 py-12">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/4 space-y-6 text-gray-300 text-center lg:text-left">
          <div>
            <p className="text-lg font-semibold">Email</p>
            <p className="text-base">info@constellation.ai</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Location</p>
            <p className="text-base leading-relaxed">
              45 Constellation Tower, Innovation Street, London, UK
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">Social Media</p>
            <p className="text-base">@constellation.ai</p>
            <p className="text-base">constellation</p>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative w-full lg:w-1/3 flex justify-center">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[320px] md:w-[420px] h-[320px] md:h-[420px] bg-gradient-to-tr from-purple-600/40 to-pink-500/40 rounded-full blur-2xl" />
          </div>
          {/* Image */}
          <img
            src="/3d-art.jpg"
            alt="3D Art"
            className="relative z-10 w-[260px] md:w-[400px] lg:w-[500px] h-auto object-contain"
          />
        </div>

        {/* Right Section (Signup Form) */}
        <div className="w-full lg:w-1/3">
          <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl shadow-2xl p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center lg:text-left">
              Create an Account
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-base mb-2">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-base mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-base mb-2">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-base mb-2">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-lg rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:opacity-90 transition"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>

            {message && (
              <p className="mt-4 text-center text-sm md:text-base">{message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
