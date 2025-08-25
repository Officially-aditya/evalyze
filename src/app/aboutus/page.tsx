"use client";

import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import PageSection from "../components/PageSection";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Navbar />

      {/* Main Content (shifted right) */}
      <div className="ml-64 flex-1 bg-black">
        <PageWrapper>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-400 leading-relaxed">
              Evalyze was founded with one belief — choosing the right product
              should be effortless, not overwhelming. With endless options
              available, people often struggle to compare features, prices, and
              reviews. That’s where we step in. <br /> <br />
              We bring clarity through side-by-side comparisons, curated
              insights, and unbiased recommendations, so you can focus on what
              truly matters: finding your perfect fit.
            </p>
          </motion.section>

          {/* Mission + Vision */}
          <motion.section
            className="py-16 bg-neutral-900 rounded-2xl max-w-5xl mx-auto px-8 text-center shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <motion.div
                className="p-6 border rounded-xl hover:border-gray-600 transition"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="font-bold text-lg mb-2">Mission</h3>
                <p>
                  To simplify decision-making for users worldwide by delivering
                  intelligent, accurate, and transparent product comparisons.
                </p>
              </motion.div>
              <motion.div
                className="p-6 border rounded-xl hover:border-gray-600 transition"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="font-bold text-lg mb-2">Vision</h3>
                <p>
                  To become the go-to platform where anyone can discover,
                  evaluate, and confidently choose the best products in seconds.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            className="py-16 px-6 max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-10">Our Core Values</h2>
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
                  className="bg-neutral-900 rounded-xl p-8 shadow hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-lg font-bold mb-3">{val.title}</h3>
                  <p className="text-gray-400">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call To Action */}
          <motion.section
            className="py-20 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Whether you’re here to find your next smartphone, laptop, or any
              product in between — Evalyze is here to guide you every step of
              the way.
            </p>
            <motion.button
              className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-neutral-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Exploring
            </motion.button>
          </motion.section>
        </PageWrapper>
      </div>
    </div>
  );
}
