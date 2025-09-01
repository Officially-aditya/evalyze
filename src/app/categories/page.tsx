"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type ComponentItem = {
  name: string;
  site: string;
  description: string;
  tags: string[];
  image: string;
};

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

const componentsList: ComponentItem[] = [
  {
    name: "Pricing Table",
    site: "21st.dev",
    description: "Responsive pricing tables with tiers and call-to-action.",
    tags: ["Marketing", "UI"],
    image:
      "https://images.unsplash.com/photo-1667539916754-968bd0977c12?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // placeholder
  },
  {
    name: "Split Text",
    site: "reactbits.dev",
    description: "Split's text in animated pattern.",
    tags: ["Animation", "UI"],
    image:
      "https://images.unsplash.com/photo-1594844862885-f0a64d371deb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hero Section",
    site: "21st.dev",
    description: "Beautiful hero layouts with gradients and imagery.",
    tags: ["Landing Page", "Marketing"],
    image:
      "https://images.unsplash.com/photo-1556707752-481d500a2c58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Accordion",
    site: "21st.dev",
    description: "Accessible accordion component with smooth animations.",
    tags: ["UI", "Accordions"],
    image:
      "https://images.unsplash.com/photo-1530950774950-6376cbdcf385?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alert Banner",
    site: "reactbits.dev",
    description: "Dismissible alert banner for notifications and warnings.",
    tags: ["UI", "Alerts"],
    image:
      "https://images.unsplash.com/photo-1692871152386-ce4343fc6260?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Button Variants",
    site: "reactbits.dev",
    description: "Different styled buttons with hover/active states.",
    tags: ["UI", "Buttons"],
    image:
      "https://images.unsplash.com/flagged/photo-1578728890856-8bbf3883aa6d?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "CTA Block",
    site: "21st.dev",
    description: "Call-to-action layouts for conversions.",
    tags: ["Marketing", "CTA"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://cdn.vectorstock.com/i/1000x1000/23/63/dropdown-menu-website-element-vector-19402363.jpg",
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
    image:
      "https://images.pexels.com/photos/31466991/pexels-photo-31466991.jpeg",
  },
  {
    name: "Data Table",
    site: "21st.dev",
    description: "Responsive tables with sorting and filtering.",
    tags: ["UI", "Tables"],
    image:
      "https://cdn.vectorstock.com/i/1000v/95/35/data-table-template-blue-yellow-vector-26829535.avif",
  },
  {
    name: "Carousel",
    site: "reactbits.dev",
    description: "Touch-enabled carousel slider component.",
    tags: ["UI", "Carousels"],
    image:
      "https://cdn.vectorstock.com/i/1000v/79/14/smartphone-carousel-post-vector-24497914.avif",
  },
  {
    name: "Avatar",
    site: "reactbits.dev",
    description: "Circular avatar component with fallback initials.",
    tags: ["UI", "Avatars"],
    image:
      "https://cdn.vectorstock.com/i/1000v/18/44/diverse-people-avatar-collection-vector-42791844.avif",
  },
  {
    name: "Badge",
    site: "reactbits.dev",
    description: "Compact badges for labeling and highlighting items.",
    tags: ["UI", "Badges"],
    image:
      "https://images.unsplash.com/photo-1565828842574-d1f6923d9ec5?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function CategoriesPage() {
  const searchParams = useSearchParams();
  const selectedFromURL = searchParams.get("selected");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    selectedFromURL ? [selectedFromURL] : []
  );
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Filter
  const filteredComponents =
    selectedCategories.length === 0
      ? componentsList
      : componentsList.filter((item) =>
          item.tags.some((tag) => selectedCategories.includes(tag))
        );

  // Chunk into groups of 3
  const chunkedComponents: ComponentItem[][] = [];
  for (let i = 0; i < filteredComponents.length; i += 3) {
    chunkedComponents.push(filteredComponents.slice(i, i + 3));
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <div>
      <header className="w-full px-10 py-6 bg-white shadow-sm border-b border-gray-200 cursor-pointer">
        <Link href="/">
          <div className="text-2xl font-bold text-gray-900">Evalyze</div>
        </Link>
      </header>

      <div className="min-h-screen bg-white flex">
        {/* Sidebar */}
        <aside className="w-74 top-40 h-fit self-start p-4">
          <div className="bg-white shadow border border-gray-200 rounded-3xl p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Filter Components
            </h2>
            <SidebarCheckboxes
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
            />
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold text-gray-800 text-center pt-20 pb-10">
            Categories
          </h1>

          <main className="flex flex-col gap-8 px-10 pb-20 max-w-6xl mx-auto relative">
            <AnimatePresence mode="wait">
              {expandedCard ? (
                <motion.div
                  key="expanded"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1"
                >
                  <ExpandedCard
                    item={filteredComponents.find(
                      (c) => c.name === expandedCard
                    )!}
                    onClose={() => setExpandedCard(null)}
                  />
                </motion.div>
              ) : chunkedComponents.length > 0 ? (
                chunkedComponents.map((chunk, rowIndex) => (
                  <Row
                    key={rowIndex}
                    chunk={chunk}
                    setExpandedCard={setExpandedCard}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No components match your filters.
                </p>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

// Sidebar
function SidebarCheckboxes({
  selectedCategories,
  toggleCategory,
}: {
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
}) {
  return (
    <div className="space-y-5 max-h-[70vh] mt-5 overflow-y-auto pr-1 mr-1">
      {uiComponents.map((component) => (
        <label
          key={component}
          className="flex items-center space-x-2 text-gray-700 text-sm cursor-pointer hover:text-black"
        >
          <input
            type="checkbox"
            className="accent-black w-4 h-4"
            checked={selectedCategories.includes(component)}
            onChange={() => toggleCategory(component)}
          />
          <span>{component}</span>
        </label>
      ))}
    </div>
  );
}

// Row
function Row({
  chunk,
  setExpandedCard,
}: {
  chunk: ComponentItem[];
  setExpandedCard: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {chunk.map((item) => (
        <motion.div layout key={item.name}>
          <Card item={item} onClick={() => setExpandedCard(item.name)} />
        </motion.div>
      ))}
    </div>
  );
}

// Normal Card
function Card({
  item,
  onClick,
}: {
  item: ComponentItem;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="relative group rounded-3xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={500}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6">
        <h2 className="text-lg font-semibold mb-1 text-center">{item.name}</h2>
        <p className="text-sm italic text-gray-200 mb-1">{item.site}</p>
        <p className="text-sm text-center text-gray-300 mb-4">
          {item.description}
        </p>
        <button className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 text-sm">
          Explore →
        </button>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({
  item,
  onClose,
}: {
  item: ComponentItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      layout
      className="rounded-3xl overflow-hidden border border-gray-300 shadow-lg relative"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={1200}
        height={500}
        className="w-full h-96 object-cover"
      />
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="px-3 py-1 bg-black/70 text-white rounded-lg hover:bg-black"
        >
          ✕
        </button>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-600 italic mb-4">{item.site}</p>
        <p className="text-gray-700 mb-6">{item.description}</p>
        <button className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
          Visit Site →
        </button>
      </div>
    </motion.div>
  );
}
