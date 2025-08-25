"use client";

import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import PageSection from "../components/PageSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

export default function Blog() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activePost, setActivePost] = useState<number | null>(null);

  const toggleFAQ = (i: number) => {
    setOpenFAQ(openFAQ === i ? null : i);
  };

  const posts = [
    {
      title: "5 Tips for Smarter Online Shopping",
      desc: "Learn how to compare products effectively, avoid scams, and get the best deals every time you shop.",
      date: "August 10, 2025",
      content: `Shopping online is convenient, but it can be tricky. Here are 5 tips:
      1. Compare products across multiple sites before deciding.
      2. Always check reviews and ratings from verified buyers.
      3. Watch for fake discounts and inflated original prices.
      4. Use trusted payment methods and avoid shady websites.
      5. Consider total cost, including shipping and return policies.`,
    },
    {
      title: "AI in Product Comparisons",
      desc: "How artificial intelligence is revolutionizing the way we evaluate products and make purchase decisions.",
      date: "July 28, 2025",
      content: `AI is changing how we compare and buy products:
      - Algorithms analyze specs, reviews, and prices instantly.
      - Personalized recommendations based on your preferences.
      - Fraud detection helps you avoid scams.
      - AI reduces decision fatigue by filtering irrelevant options.`,
    },
    {
      title: "The Psychology of Decision-Making",
      desc: "Why too many choices can overwhelm us, and how tools like Evalyze help cut through the noise.",
      date: "July 15, 2025",
      content: `Too many options create stress — known as "decision fatigue."
      Evalyze helps by narrowing choices to the best ones:
      - Highlights what matters most for YOU.
      - Removes distracting features or irrelevant specs.
      - Makes comparisons easier and faster.
      This means smarter and more confident purchase decisions.`,
    },
  ];

  const faqs = [
    {
      q: "What kind of topics does the Evalyze blog cover?",
      a: "We cover topics on product comparisons, decision-making strategies, tech insights, and shopping tips.",
    },
    {
      q: "How often are new blog posts published?",
      a: "We publish fresh insights every 1-2 weeks to keep you updated with the latest trends.",
    },
    {
      q: "Can I suggest a topic for the blog?",
      a: "Absolutely! We value community input. You can suggest topics via our contact page.",
    },
  ];

  // Animation Variants
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
    <div className="flex">
      {/* Sidebar */}
      <Navbar />

      {/* Main Content (shifted right) */}
      <div className="ml-64 flex-1">
        <PageWrapper>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PageSection
              title="Blog"
              description="Read insights, tips, and articles to help you make smarter product decisions."
            />
          </motion.div>

          {/* Blog Posts (now comes first) */}
          <motion.section
            className="py-10 px-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-xl font-semibold mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Latest Posts
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {posts.map((post, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-neutral-900 rounded-xl p-5 shadow-md cursor-pointer hover:shadow-xl transition relative overflow-hidden group"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActivePost(i)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>
                  <h3 className="text-lg font-bold mb-2 relative z-10">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm relative z-10">
                    {post.desc}
                  </p>
                  <p className="text-xs text-gray-500 relative z-10">
                    {post.date}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* FAQ Section (moved below posts) */}
          <motion.section
            className="py-12 px-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-xl font-semibold mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div className="space-y-3" variants={containerVariants}>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-black rounded-lg p-4 shadow cursor-pointer hover:shadow-lg transition"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => toggleFAQ(i)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{faq.q}</h3>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openFAQ === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openFAQ === i && (
                    <motion.p
                      className="text-gray-400 mt-2 text-sm"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Expanded Post Modal */}
          <AnimatePresence>
            {activePost !== null && (
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-black rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 50 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                >
                  <button
                    onClick={() => setActivePost(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <h2 className="text-2xl font-bold mb-2">
                    {posts[activePost].title}
                  </h2>
                  <p className="text-xs text-gray-500 mb-4">
                    {posts[activePost].date}
                  </p>
                  <p className="text-gray-300 whitespace-pre-line">
                    {posts[activePost].content}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </PageWrapper>
      </div>
    </div>
  );
}
