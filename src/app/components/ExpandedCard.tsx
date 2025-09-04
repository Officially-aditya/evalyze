"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComponentItem, ComponentFile } from "./ComponentsList";

export default function ExpandedCard({
  item,
  onClose,
}: {
  item: ComponentItem;
  onClose: () => void;
}) {
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  return (
    <div className="rounded-3xl overflow-hidden border border-gray-300 shadow-lg relative bg-white">
      <Image
        src={item.image}
        alt={item.site}
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
        <p className="text-gray-700 mb-6">{item.description}</p>
        <button className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 mb-6">
          npx shadcn@latest
        </button>

        {item.files && item.files.length > 0 && (
          <div className="mt-6">
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

            <AnimatePresence mode="wait">
              <motion.pre
                key={activeFileIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm"
              >
                <code>{item.files[activeFileIndex].code}</code>
              </motion.pre>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
