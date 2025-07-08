"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      className={cn("relative group cursor-pointer", containerClassName)}
      href={href || "/"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer Ring Animation */}
      {hovered && (
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="h-[11rem] w-[11rem] rounded-full bg-sky-500/10"
          />
        </div>
      )}

      {/* Card Content */}
      <motion.div
        initial={false}
        animate={{
          rotateX: hovered ? 15 : 0,
          scale: hovered ? 0.97 : 1,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className={cn(
          "relative z-10 w-full h-full bg-black border border-white/10 rounded-2xl shadow-xl p-4 transition-transform duration-300",
          className
        )}
      >
        {children}
      </motion.div>

      {/* Title on Hover */}
      {hovered && (
        <div className="absolute top-2 inset-x-0 flex justify-center z-20 pointer-events-none">
          <div className="px-4 py-1 text-xs font-semibold bg-zinc-800 text-white rounded-full border border-white/10">
            {title}
          </div>
        </div>
      )}
    </a>
  );
};
