"use client";
import React from "react";
import Nav1 from "@/app/components/Nav1";
import Fot1 from "./components/Fot1";

const categories = [
  { title: "AI", subtitle: "Tools", link: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Animations", subtitle: " ", link: "https://images.unsplash.com/photo-1603184017968-953f59cd2e37?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Features", subtitle: " ", link: "https://images.unsplash.com/photo-1661169399024-1c239e542463?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Buttons", subtitle: " ", link: "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Productivity", subtitle: "Tools", link: "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function EducationPage() {
  return (
    <div className="bg-white">
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/education-bg.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <Nav1 />

      {/* Hero section */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6">

        <h1 className="text-4xl md:text-6xl font-bold leading-snug text-[#0d091f] pt-48">
          Unifying Tech <br />
          <span className="text-[#6438d6]">Simplifying choices</span>
        </h1>

        <p className="mt-4 max-w-3xl text-gray-600 font-bold">
          Unlock your potential with our all-in-one tech hub. Tailer to guide you every step of the way.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        <button
          className="rounded-xl bg-[#29b797] text-white font-bold"
          style={{ height: "62px", padding: "0 24px" }}
        >
            Explore now
          </button>
        </div>
      </main>
    </div>
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center bg-[#0d091f]">
          {/* New Explore Tech Mastery Section */}
        <section className="relative z-10 bg-gray-50 py-16 w-full flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-black">
            Explore <span className="text-[#6438d6]">Tech Mastery</span>
          </h2>
          <p className="mt-4 max-w-3xl text-center text-gray-700">
            Dive into our extensive library of tech insights. Use the search bar below to find specific tools or browse curated categories to discover the best solutions for your needs.
          </p>

          {/* Search bar */}
          <div className="mt-6 w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Category cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full justify-center items-center">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow flex flex-col justify-between border-2 border-transparent hover:border-[#6438d6] transition"
              >
                <div className="mb-2">
                  {/* Image from the link */}
                  <div className="h-36 w-full bg-gradient-to-b from-purple-100 to-purple-50 rounded-md mb-2 flex items-center justify-center">
                    <img
                      src={cat.link} // Use the link provided in the categories array
                      alt={cat.title}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                  <h3 className="text-lg text-black font-semibold">{cat.title}</h3>
                  <p className="text-[#6438d6] font-bold">{cat.subtitle}</p>
                </div>
                <div className="flex justify-end">
                  <button className="text-gray-500 hover:text-[#6438d6] font-bold">
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div>
        {/* Third Section: Knowledge Hub */}
        <section className="relative z-10 bg-gray-50 py-15 w-full flex flex-col items-center">

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-center leading-snug text-black">
            The Power to Choose, <br />
            <span className="text-[#6438d6]">All in one Place</span>
          </h2>

          {/* Articles grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow border-2 border-transparent hover:border-[#6438d6] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="Comparison Table"
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  AI in Product Comparisons
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-gray-500">November 9, 2024</p>
                  <button className="px-4 py-2 rounded-xl border border-[#6438d6] text-black font-semibold hover:bg-[#f1f0fd] hover:text-black transition">
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow border-2 border-transparent hover:border-[#6438d6] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1470&auto=format&fit=crop"
                alt="Fibonacci Extensions"
                className="w-full h-32 object-cover rounded-xl"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  Why is comparing necessary
                </h3>
                <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">October 31, 2024</p>
                <button className="px-4 py-2 rounded-xl border border-[#6438d6] text-black font-semibold hover:bg-[#f1f0fd] hover:text-black transition">
                  Read more
                </button>
              </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow border-2 border-transparent hover:border-[#6438d6] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
              alt="Bull Pennant Patterns"
              className="w-full h-32 object-cover rounded-xl"
            />
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                The Psychology of Decision-Making
              </h3>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">August 14, 2024</p>
                <button className="px-4 py-2 rounded-xl border border-[#6438d6] text-black font-semibold hover:bg-[#f1f0fd] hover:text-black transition">
                  Read more
                </button>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>
      <div>
        {/* Call-to-Action Section with Side Images */}
        <section className="relative w-full h-[400px] bg-gray-50 flex items-center justify-center text-center overflow-hidden px-6">
          {/* Left Image */}
          <div className="absolute left-5 md:left-50 bottom-0 h-full flex items-end">
            <img
              src="https://alchemymarkets.com/wp-content/themes/bathe-main/assets/images/right_footer_image.png"
              alt="Left Side Graphic"
              className="h-72 md:h-80 object-contain"
            />
          </div>

          {/* Right Image */}
          <div className="absolute right-5 md:right-50 bottom-0 h-full flex items-end">
            <img
              src="https://alchemymarkets.com/wp-content/themes/bathe-main/assets/images/left_footer_image.png"
              alt="Right Side Graphic"
              className="h-72 md:h-80 object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-snug text-[#0d091f]">
              Discover the best <span className="text-[#6438d6]">tech</span>, today, <span>all in one place</span>
            </h1>
          </div>
        </section>
      </div>
      <Fot1 />
    </div>
  );
}
