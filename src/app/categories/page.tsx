// components/Page.tsx
"use client";
import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const marketingBlocks = [
  { label: "Call to action", count: 2 },
  { label: "Borders", count: 3 },
  { label: "Hooks", count: 4 },
  { label: "Maps", count: 5 },
  { label: "Heroes", count: 1 },
];

const uiComponents = [
  "Accordions",
  "AI Chats",
  "Alerts",
  "Avatars",
  "Badges",
  "Buttons",
  "Cards",
  "Tabs",
  "Modals",
  "Dropdowns",
  "Inputs",
  "Forms",
  "Tables",
  "Carousels",
];

const componentsList = [
  {
    name: "Pricing Table",
    site: "21st.dev",
    description: "Responsive pricing tables with tiers and call-to-action.",
    tags: ["Marketing", "UI"],
    image: "https://images.unsplash.com/photo-1667539916754-968bd0977c12?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // placeholder
  },
  {
    name: "Split Text",
    site: "reactbits.dev" ,
    description: "Split's text in animated pattern.",
    tags: ["Animation", "UI"],
    image: "https://images.unsplash.com/photo-1594844862885-f0a64d371deb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hero Section",
    site: "21st.dev",
    description: "Beautiful hero layouts with gradients and imagery.",
    tags: ["Landing Page", "Marketing"],
    image: "https://images.unsplash.com/photo-1556707752-481d500a2c58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Accordion",
    site: "21st.dev",
    description: "Accessible accordion component with smooth animations.",
    tags: ["UI", "Accordions"],
    image: "https://images.unsplash.com/photo-1530950774950-6376cbdcf385?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alert Banner",
    site: "reactbits.dev",
    description: "Dismissible alert banner for notifications and warnings.",
    tags: ["UI", "Alerts"],
    image: "https://images.unsplash.com/photo-1692871152386-ce4343fc6260?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Button Variants",
    site: "reactbits.dev",
    description: "Different styled buttons with hover/active states.",
    tags: ["UI", "Buttons"],
    image: "https://images.unsplash.com/flagged/photo-1578728890856-8bbf3883aa6d?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "CTA Block",
    site: "21st.dev",
    description: "Call-to-action layouts for conversions.",
    tags: ["Marketing", "CTA"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tabs",
    site: "reactbits.dev",
    description: "Keyboard-accessible tab components with smooth transitions.",
    tags: ["UI", "Tabs"],
    image: "https://images.pexels.com/photos/6193327/pexels-photo-6193327.jpeg",
  },
  {
    name: "Modal",
    site: "reactbits.dev",
    description: "Accessible modal dialog with backdrop and focus trap.",
    tags: ["UI", "Modals"],
    image: "https://images.pexels.com/photos/29766159/pexels-photo-29766159.jpeg",
  },
  {
    name: "Dropdown",
    site: "reactbits.dev",
    description: "Customizable dropdown menu with animations.",
    tags: ["UI", "Dropdowns"],
    image: "https://cdn.vectorstock.com/i/1000x1000/23/63/dropdown-menu-website-element-vector-19402363.jpg",
  },
  {
    name: "Form Layouts",
    site: "21st.dev",
    description: "Ready-to-use form layouts for signups and logins.",
    tags: ["UI", "Forms"],
    image: "https://images.pexels.com/photos/955392/pexels-photo-955392.jpeg",
  },
  {
    name: "Input Fields",
    site: "reactbits.dev",
    description: "Styled and validated input fields with states.",
    tags: ["UI", "Inputs"],
    image: "https://images.pexels.com/photos/31466991/pexels-photo-31466991.jpeg",
  },
  {
    name: "Data Table",
    site: "21st.dev",
    description: "Responsive tables with sorting and filtering.",
    tags: ["UI", "Tables"],
    image: "https://cdn.vectorstock.com/i/1000v/95/35/data-table-template-blue-yellow-vector-26829535.avif",
  },
  {
    name: "Carousel",
    site: "reactbits.dev",
    description: "Touch-enabled carousel slider component.",
    tags: ["UI", "Carousels"],
    image: "https://cdn.vectorstock.com/i/1000v/79/14/smartphone-carousel-post-vector-24497914.avif",
  },
  {
    name: "Avatar",
    site: "reactbits.dev",
    description: "Circular avatar component with fallback initials.",
    tags: ["UI", "Avatars"],
    image: "https://cdn.vectorstock.com/i/1000v/18/44/diverse-people-avatar-collection-vector-42791844.avif",
  },
  {
    name: "Badge",
    site: "reactbits.dev",
    description: "Compact badges for labeling and highlighting items.",
    tags: ["UI", "Badges"],
    image: "https://images.unsplash.com/photo-1565828842574-d1f6923d9ec5?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Card UI
function ProductCard({ name, site, description, tags, image }: any) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-950 p-5 hover:border-neutral-700 transition"
    >
      {/* Image / Logo area */}
      <div className="w-full h-32 mb-4 relative overflow-hidden rounded-lg">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover" />
        ) : (
          <div
            className={`w-full h-full rounded bg-gradient-to-br ${
              site === "21st.dev"
                ? "from-blue-500/40 to-indigo-500/40"
                : "from-pink-500/40 to-purple-500/40"
            }`}
          />
        )}
      </div>

      {/* Title + site */}
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-medium text-white">{name}</h3>
        <span className="text-xs rounded-full bg-neutral-900 px-2 py-0.5 text-neutral-400">
          {site}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-400 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Page() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const filteredComponents = componentsList.filter((comp) => {
    if (selectedFilters.length === 0) return true;
    return comp.tags.some((tag) => selectedFilters.includes(tag));
  });

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-neutral-800 bg-black p-6 overflow-y-auto">
        <h2 className="mb-4 text-lg font-semibold">Filter</h2>

        {/* Marketing Blocks */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ staggerChildren: 0.1 }}
          className="mb-6"
        >
          <h3 className="mb-2 font-medium text-neutral-300">Marketing Blocks</h3>
          <div className="space-y-2">
            {marketingBlocks.map(({ label }) => (
              <motion.label
                key={label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-sm text-neutral-400 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(label)}
                  onChange={() => toggleFilter(label)}
                  className="rounded bg-neutral-900"
                />
                {label}
              </motion.label>
            ))}
          </div>
        </motion.div>

        <hr className="my-4 border-neutral-800" />

        {/* UI Components */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <h3 className="mb-2 font-medium text-neutral-300">UI Components</h3>
          <div className="space-y-2">
            {uiComponents.map((item) => (
              <motion.label
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-sm text-neutral-400 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(item)}
                  onChange={() => toggleFilter(item)}
                  className="rounded bg-neutral-900"
                />
                {item}
              </motion.label>
            ))}
          </div>
        </motion.div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-neutral-500">
          Home <span className="mx-2">{">"}</span>
          <span className="font-medium text-neutral-300">Components</span>
        </div>

        {/* Title */}
        <h1 className="mb-1 text-2xl font-semibold">Component Explorer</h1>
        <p className="mb-6 text-sm text-neutral-500">
          Browse components from <b>21st.dev</b> and <b>reactbits.dev</b>
        </p>

        {/* Search / Filter Row */}
        <div className="mb-6 flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <TrendingUp className="h-4 w-4" />
            Showing {filteredComponents.length} results
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <TrendingUp className="h-4 w-4" />
            Best Match
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredComponents.map((comp, i) => (
              <ProductCard key={i} {...comp} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}
