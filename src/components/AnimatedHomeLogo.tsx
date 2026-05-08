"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedHomeLogo() {
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    // 2.0 seconds intro duration
    const timer = setTimeout(() => {
      setIsIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="intro-overlay"
            style={{ zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <motion.div 
              layoutId="main-logo"
              className="animate-flicker"
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              <Image
                src="/logo.png"
                alt="Reactive Runway Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
        {!isIntro && (
          <motion.div
            layoutId="main-logo"
            className="home-logo-container"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src="/logo.png"
              alt="Reactive Runway Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        )}
        {isIntro && <div className="home-logo-placeholder" />}
      </div>
    </>
  );
}
