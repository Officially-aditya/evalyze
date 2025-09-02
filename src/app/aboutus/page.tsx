"use client";

import Nav1 from "../components/Nav1";
import PageSection from "../components/PageSection";
import { motion } from "framer-motion";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <div className="bg-white text-black">
      {/* ===== HERO (video only here) ===== */}
      <div className="relative min-h-screen overflow-hidden flex flex-col">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/education-bg.mp4" type="video/mp4" />
        </video>

        {/* Foreground content */}
        <div className="relative z-10">
          <Nav1 />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="px-4 md:px-6 pt-10"
          >
            <PageSection
              title="About Us"
              description="At Evalyze, we’re redefining the way people choose products. Our mission is simple: empower every user to make informed, confident, and intelligent product decisions."
            />
          </motion.div>

        {/* Our Story */}
        <motion.section
          className="py-16 px-6 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-semibold mb-4 text-[#6438d6]">Our Story</h1>
          <p className="text-gray-700 leading-relaxed">
            Evalyze was founded with one belief — choosing the right product
            should be effortless, not overwhelming. With endless options
            available, people often struggle to compare features, prices, and
            reviews. That’s where we step in. <br /> <br />
            We bring clarity through side-by-side comparisons, curated
            insights, and unbiased recommendations, so you can focus on what
            truly matters: finding your perfect fit.
          </p>
        </motion.section>
        </div>
      </div>

      {/* ===== REST OF PAGE (no video background) ===== */}
      <div className="relative z-10">


        {/* Mission + Vision */}
        <motion.section
          className="py-16 bg-white rounded-2xl max-w-5xl mx-auto px-8 text-center shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#6438d6]">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <motion.div
              className="p-6 border border-gray-200 rounded-xl hover:border-gray-400 transition bg-white"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-bold text-lg mb-2 text-black">Mission</h3>
              <p>
                To simplify decision-making for users worldwide by delivering
                intelligent, accurate, and transparent product comparisons.
              </p>
            </motion.div>
            <motion.div
              className="p-6 border border-gray-200 rounded-xl hover:border-gray-400 transition bg-white"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-bold text-lg mb-2 text-black">Vision</h3>
              <p>
                To become the go-to platform where anyone can discover, evaluate,
                and confidently choose the best products in seconds.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          className="py-16 px-6 max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-10 text-[#6438d6]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                desc: "We believe in unbiased, honest, and data-driven comparisons.",
              },
              {
                title: "User First",
                desc: "Every feature we build is designed to make life easier for our users.",
              },
              {
                title: "Innovation",
                desc: "We’re constantly improving our platform to stay ahead in the digital era.",
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-bold mb-3 text-black">{val.title}</h3>
                <p className="text-gray-700">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#6438d6]">
            Join Us on This Journey
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Whether you’re here to find your next smartphone, laptop, or any
            product in between — Evalyze is here to guide you every step of the way.
          </p>
          <motion.button
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Exploring
          </motion.button>
        </motion.section>

        {/* Decorative Call-to-Action with side images */}
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
              Discover the best <span className="text-[#6438d6]">tech</span>, today,{" "}
              <span>all in one place</span>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}
