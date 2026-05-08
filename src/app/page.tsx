"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedHomeLogo from "../components/AnimatedHomeLogo";
import { motion } from "framer-motion";

export default function Home() {
  const galleryImages = [
    "/galleryImages/IMG_5420.jpg",
    "/galleryImages/IMG_5421.jpg",
    "/galleryImages/IMG_5422.jpg",
    "/galleryImages/IMG_5424.jpg",
    "/galleryImages/IMG_5425.jpg",
    "/galleryImages/IMG_5426.jpg",
  ];

  return (
    <div className="home-page">
      <section className="hero text-center mb-8 mt-8">
        <AnimatedHomeLogo />

        <motion.h1
          className="font-serif mb-2 hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
        >
          REACTIVE RUNWAY
        </motion.h1>

        <motion.p
          className="mb-4 hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
        >
          A tech fashion experiment and business
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
        >
          <Link href="/commission" className="btn btn-primary interactive">
            Start Your Commission Now!
          </Link>
        </motion.div>
      </section>

      <motion.section
        className="featured-work mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* PHOTO COLLAGE WALL */}
        <motion.div
          className="interactive"
          whileHover="hover"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            width: "100%",
          }}
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              variants={{
                hover: {
                  scale: 1.03,
                },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--surface-light)",
              }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                style={{
                  objectFit: "cover",
                }}
              />

              {/* Reactive glow overlay */}
              <motion.div
                variants={{
                  hover: {
                    opacity: 1,
                  },
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(255,255,255,0.08), transparent)",
                  boxShadow:
                    "inset 0px 0px 60px rgba(255,255,255,0.12)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-4">
          <h2
            className="font-serif mb-2"
            style={{ fontSize: "2rem" }}
          >
            Latest Work
          </h2>

          <p
            className="mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Making one of a kind pieces for one of a kind people.
          </p>

          <Link href="/portfolio" className="btn interactive">
            View Portfolio
          </Link>
        </div>
      </motion.section>
    </div>
  );
}