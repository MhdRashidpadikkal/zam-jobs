"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

// Logos List
const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
  },
  {
    src: "/images/common/flipkart-icon.svg",
    alt: "Flipkart",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    alt: "Netflix",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    alt: "Microsoft",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
    alt: "Slack",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    alt: "IBM",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    alt: "Nike",
  },
  {
    src: "https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg",
    alt: "Razorpay",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    alt: "Shopify",
  },
];

const BrandMarquee = () => {
  const motionProps = {
    initial: { x: "0%" },
    animate: { x: "-100%" },
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear" as const,
    },
    style: { display: "flex", flexShrink: 0 },
  };

  return (
    <Box
      sx={{
        overflow: "hidden",
        py: 3,
        mt: 7,
        position: "relative",
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: 600,
          color: "black",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Trusted by 1k+ Companies
      </Typography>

      {/* Logo Marquee */}
      <Container maxWidth="lg" sx={{ position: "relative", overflow: "hidden" }}>
        {/* Left Gradient */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "70px",
            height: "100%",
            zIndex: 2,
            background: `linear-gradient(to right, #f8fafc 0%, transparent 100%)`,
          }}
        />

        {/* Right Gradient */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "180px",
            height: "100%",
            zIndex: 2,
            background: `linear-gradient(to left, #f8fafc 0%, transparent 100%)`,
          }}
        />

        {/* Scrolling Logos */}
        <Box sx={{ display: "flex", overflow: "hidden" }}>
          {[0, 1].map((_, i) => (
            <motion.div key={i} {...motionProps}>
              {logos.map((logo, index) => (
                <Box
                  key={`${i}-${index}`}
                  sx={{
                    pr: { xs: 5, sm: 10 },
                    minWidth: 120,
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    style={{
                      filter: "brightness(0)",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BrandMarquee;
