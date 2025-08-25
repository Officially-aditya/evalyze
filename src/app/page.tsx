"use client";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  const categories = [
    { name: "AI Tools", icon: "/aitool.svg" },
    { name: "Smartphones", icon: "/Smartphone.svg" },
    { name: "Laptops", icon: "/Laptop.svg" },
    { name: "Headphones", icon: "/Headphone.svg" },
    { name: "Smartwatches", icon: "/Smartwatches.svg" },
    { name: "Productivity Tools", icon: "/ProTools.svg" },
  ];

  const featured = [
    {
      title: "Comparison Table",
      description: "Interactive tables to compare products side by side.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      link: "https://21st.dev/components/comparison-table",
    },
    {
      title: "Price Tracker",
      description: "Stay updated with the latest price drops and offers.",
      image: "https://images.pexels.com/photos/1111319/pexels-photo-1111319.jpeg",
      link: "https://21st.dev/components/price-tracker",
    },
    {
      title: "AI Recommendations",
      description: "Get personalized product suggestions powered by AI.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      link: "https://21st.dev/components/ai-recommendations",
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Dynamic Spotlight Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Left-to-right blob */}
        <motion.svg
          className="absolute blur-3xl"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: 900,
            height: 900,
            top: "-20%",
            left: "-30%",
            opacity: 0.35,
          }}
          animate={{
            x: ["-40%", "0%", "-20%"],
            scale: [1, 1.2, 1],
            rotate: [0, 15, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <path
            fill="#6366F1"
            d="M45.4,-52.6C59.1,-43.2,72.3,-29.8,75.9,-13.6C79.4,2.5,73.4,21.4,61.1,34.7C48.7,48,29.9,55.7,10.6,62.3C-8.7,68.9,-27.5,74.3,-40.9,66.6C-54.4,58.9,-62.5,38.2,-67.5,16.4C-72.5,-5.4,-74.5,-28.2,-63.5,-43.8C-52.5,-59.4,-28.5,-67.8,-6.6,-63.7C15.3,-59.5,30.6,-43.9,45.4,-52.6Z"
            transform="translate(100 100)"
          />
        </motion.svg>

        {/* Right-to-left blob */}
        <motion.svg
          className="absolute blur-3xl"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: 900,
            height: 900,
            top: "-20%",
            right: "-30%",
            opacity: 0.35,
          }}
          animate={{
            x: ["40%", "0%", "20%"],
            scale: [1, 1.15, 1],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <path
            fill="#22D3EE"
            d="M45.4,-52.6C59.1,-43.2,72.3,-29.8,75.9,-13.6C79.4,2.5,73.4,21.4,61.1,34.7C48.7,48,29.9,55.7,10.6,62.3C-8.7,68.9,-27.5,74.3,-40.9,66.6C-54.4,58.9,-62.5,38.2,-67.5,16.4C-72.5,-5.4,-74.5,-28.2,-63.5,-43.8C-52.5,-59.4,-28.5,-67.8,-6.6,-63.7C15.3,-59.5,30.6,-43.9,45.4,-52.6Z"
            transform="translate(100 100)"
          />
        </motion.svg>
      </div>

      {/* Sidebar */}
      <Navbar />

      {/* Main content */}
      <div className="ml-64 relative z-10 text-white">
        {/* Hero Section */}
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center px-4 py-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Product
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            Compare products instantly and make informed decisions
            <br />
            with our intelligent comparison platform
          </p>

          <div className="w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for products, compare instantly..."
              className="w-full px-4 py-3 rounded-md border border-gray-700 focus:outline-none mb-4 bg-black text-white placeholder-gray-400"
            />
            <button className="w-full bg-white text-black py-3 rounded-md font-medium">
              Find My Best Option
            </button>
          </div>
        </motion.main>

        {/* Popular Categories */}
        <section className="py-16 mx-6">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-2"
            >
              Popular Categories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 mb-12"
            >
              Explore our most searched product categories and find exactly what
              you're looking for
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-xl shadow-sm p-8 border hover:shadow-md transition bg-black/50"
                >
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-12 h-12 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-4">{cat.name}</h3>
                  <button className="w-full border rounded-md py-2 text-gray-300 hover:bg-gray-800 transition">
                    View
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Components */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-2"
            >
              Featured Components
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 mb-12"
            >
              Use our ready-made components to explore, compare, and analyze
              products effectively
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featured.map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="rounded-xl border shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition cursor-pointer block bg-black/50"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-left">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
