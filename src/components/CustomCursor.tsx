"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference" as any,
      opacity: isVisible ? 1 : 0,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: 60,
      height: 60,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: "normal" as any,
      border: "1px solid rgba(255,255,255,0.5)",
      opacity: isVisible ? 1 : 0,
    },
  };

  return (
    <motion.div
      className="custom-cursor" 
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 10000,
      }}
    />
  );
}
