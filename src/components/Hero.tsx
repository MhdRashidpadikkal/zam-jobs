"use client";

import { Box, Typography, Button, useTheme} from "@mui/material";
import { motion } from "framer-motion";
import Header from "./Header";
import Image from "next/image";

const ButtonWithRotate = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
    >
      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          borderRadius: 2,
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
          minWidth: 160,
          height: 50,
          "&:hover": {
            borderColor: theme.palette.primary.dark,
            color: theme.palette.primary.dark,
          },
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default function Hero() {
  const theme = useTheme();

  return (
    <Box sx={{}}>
      <Box
        sx={(theme) => ({
          border: `1px solid ${theme.palette.secondary.contrastText}`,
          margin: { xs: 1, md: 2 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 5,
          backgroundImage: `
      radial-gradient(circle at top,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.8) 30%,
        rgba(255, 255, 255, 0.8) 40%,
        rgba(0, 45, 98, 1) 100%
      ),
      radial-gradient(lightgray 1px, transparent 0)
    `,
          backgroundSize: "cover, 10px 10px",
          backgroundPosition: "center, 0 0",
          boxShadow: "0 0 40px rgba(199, 198, 198, 0.5)",
        })}
      >
        <Box>
          <Header />
        </Box>

        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h6"
                component="h1"
                sx={{
                  mb: 1,
                  color: theme.palette.text.secondary,
                  fontWeight: "500",
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  backgroundClip: "text",
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.secondary.contrastText}`,
                  px: 2,
                }}
              >
                Find Your Dream Job
              </Typography>
            </motion.div>
          </Box>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: 35, md: 64 },
              fontWeight: 500,
              color: "primary.main",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            How our platform makes your job search{" "}
            <Box
              component="span"
              sx={{
                fontSize: { xs: 35, md: 64 },
                fontWeight: 500,
                textAlign: "center",
                backgroundImage: `linear-gradient(180deg, rgba(0, 45, 98, 1), rgba(59, 130, 246, 1))`,
                color: "white",
                px: 3,
                borderRadius: 2,
              }}
            >
              Easier
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
              gap: 4,
              minHeight: "60vh",
              px: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "13px", md: "20px" },
                  mb: 3,
                  mt: 2,
                  color: theme.palette.primary.contrastText,
                  maxWidth: "600px",
                }}
              >
                Discover exciting opportunities in your field. Connect with top
                employers and start your journey to success.
              </Typography>
            </motion.div>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
                mb: 5,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    borderRadius: 2,
                    minWidth: 160,
                    height: 50,
                    fontSize: "1rem",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  View Jobs
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    backgroundColor: "white",
                    textTransform: "none",
                    borderRadius: 2,
                    minWidth: 160,
                    height: 50,
                    fontSize: "1rem",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Apply Now
                </Button>
              </motion.div>
            </Box>

            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  margin: -0.8,
                  padding: 0,
                  overflow: "hidden",
                  width: { xs: "160px", sm: "250px", md: "350px", lg: "300px" },
                }}
              >
                <Image
                  src="/images/banner.png"
                  alt="add-iphone-image.png"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "-60%",
                  boxShadow: 5,
                  width: "70%",
                  height: "45%",
                  borderRadius: 10,
                }}
              >
                <Image
                  src="/images/banner2.jpg"
                  alt="banner4.jpg"
                  width={280}
                  height={230}
                  style={{ borderRadius: 10, width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  right: "-60%",
                  boxShadow: 5,
                  width: "70%",
                  height: "45%",
                  borderRadius: 10,
                }}
              >
                <Image
                  src="/images/banner3.jpg"
                  alt="banner3.jpg"
                  width={280}
                  height={230}
                  style={{ borderRadius: 10, width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
