"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { componentsList, ComponentItem, ComponentFile } from "../components/ComponentsList";

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

export default function CategoriesPage() {
  const searchParams = useSearchParams();
  const selectedFromURL = searchParams.get("selected");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    selectedFromURL ? [selectedFromURL] : []
  );
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Filter components
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

// Expanded Card with code tabs
function ExpandedCard({
  item,
  onClose,
}: {
  item: ComponentItem;
  onClose: () => void;
}) {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
      const [copied, setCopied] = useState(false);
    const command = "npx shadcn@latest";

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset after 2 sec
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };

  return (
    <div className="rounded-3xl overflow-hidden border border-gray-300 shadow-lg relative bg-white">
      {/* Image */}
      <Image
        src={item.image}
        alt={item.name}
        width={1200}
        height={500}
        className="w-full h-96 object-cover"
      />
      {/* Close button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="px-3 py-1 bg-black/70 text-white rounded-lg hover:bg-black"
        >
          ✕
        </button>
      </div>

      {/* Info */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-700 mb-6">{item.description}</p>
        <button
          onClick={handleCopy}
          className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 mb-6 relative"
        >
          {copied ? "Copied!" : "npx shadcn@latest"}
        </button>

        {/* Code files */}
        {item.files && item.files.length > 0 && (
          <div className="mt-6">
            {/* File tabs */}
            <div className="flex space-x-2 mb-4 overflow-x-auto">
              {item.files.map((file: ComponentFile, idx: number) => (
                <button
                  key={file.fileName}
                  onClick={() => setActiveFileIndex(idx)}
                  className={`px-4 py-2 rounded-t-lg border-b-2 ${
                    idx === activeFileIndex
                      ? "border-blue-500 text-blue-600 font-semibold"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {file.fileName}
                </button>
              ))}
            </div>

            {/* Code panel */}
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{item.files[activeFileIndex].code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
