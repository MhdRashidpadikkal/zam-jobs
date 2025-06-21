"use client";

import React from "react";
import { Box, Typography, Container, useTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/brands/google.png", alt: "Google" },
  { src: "/brands/meta.png", alt: "Meta" },
  { src: "/brands/netflix.png", alt: "Netflix" },
  { src: "/brands/amazon.png", alt: "Amazon" },
  { src: "/brands/microsoft.png", alt: "Microsoft" },
  { src: "/brands/slack.png", alt: "Slack" },
  { src: "/brands/meta.png", alt: "Rashid" },
  { src: "/brands/netflix.png", alt: "Mrithul" },
  { src: "/brands/amazon.png", alt: "Unais" },
  { src: "/brands/microsoft.png", alt: "Biju" },
  { src: "/brands/slack.png", alt: "Sadik" },
];

const BrandMarquee = () => {
  const theme = useTheme();

  const motionProps = {
    initial: { x: "0%" },
    animate: { x: "-100%" },
    transition: { duration: 30, repeat: Infinity, ease: "linear" },
    style: { display: "flex", flexShrink: 0 },
  };

  return (
    <Box
      sx={{
        overflow: "hidden",
        py: 6,
        mt: 10,
        background: alpha(theme.palette.primary.light, 0.05),
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
          color: theme.palette.text.primary,
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Trusted by{" "}
        <Box component="span" sx={{ color: theme.palette.primary.main }}>
          1000+ Companies
        </Box>
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
    backdropFilter: "blur(1px)", // The blur effect
    // backgroundColor: alpha(theme.palette.background.paper, 0.4), // Slight tint
  }}
/>


        {/* Right Gradient */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "80px",
            height: "100%",
            zIndex: 2,
            background: `linear-gradient(to left, red 0%, transparent 100%)`,
          }}
        />

        {/* Scrolling Logos */}
        <Box sx={{ display: "flex", overflow: "hidden" }}>
          {[0, 1].map((_, i) => (
            <motion.div key={i} {...motionProps}>
              {logos.map((logo, index) => (
                <Box
                  key={`${i}-${index}`}
                  sx={{ pr: { xs: 5, sm: 10 }, minWidth: 120, }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    style={{
                      width: "auto",
                      height: "60px",
                      objectFit: "contain",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
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
