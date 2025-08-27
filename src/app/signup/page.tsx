'use client';

import React from 'react';

export default function SignupPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0120] via-[#120344] to-[#1c014d] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[800px] h-[800px] bg-white/20 rounded-full blur-[200px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-12 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="text-2xl font-semibold">Evalyze</div>
        <div className="flex items-center gap-4">
        <a
          href="/login"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:opacity-90 transition"
        >
          Login
        </a>
      </div>
      </header>

      {/* Heading */}
      <div className="relative z-10 text-center mt-16">
        <p className="text-5xl font-semibold text-gray-100">We’re Here to Help</p>
        <p className="text-lg text-gray-400 mt-4">
          Questions, ideas or feedback—let’s make progress together.
        </p>
      </div>

      {/* Left Section */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-16 space-y-10 text-gray-300 w-[360px] mt-50">
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

      {/* Center Blurred Glow Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center mt-40">
        <div className="w-[520px] h-[400px] bg-gradient-to-tr from-purple-600/40 to-pink-500/40 rounded-full blur-2xl" />
      </div>

      {/* Actual 3D Image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 mt-40">
        <img
          src="/3d-art.jpg"
          alt="3D Art"
          className="w-[500px] h-[500px] object-contain"
        />
      </div>

      {/* Right Section (Signup Form) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-16 w-[600px] mt-35">
        <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl shadow-2xl p-10">
          <h3 className="text-3xl font-semibold mb-8">Create an Account</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-base mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-5 py-3 text-base rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-base mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 text-base rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-base mb-2">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-5 py-3 text-base rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-base mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-5 py-3 text-base rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-lg rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
