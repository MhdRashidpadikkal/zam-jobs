"use client";

import { Box, Typography, Button, useTheme, Container, alpha, styled } from "@mui/material";
import {
  Search as SearchIcon,
  LocationOn as LocationOnIcon,
  Work as WorkIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';import { motion } from "framer-motion";
import Header from "./Header";
import Image from "next/image";
import RotatingBorderButton from "./RotatingBorderButton";

const MotionBox = motion(Box);

const GradientBackdrop = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  borderRadius: 16,
  filter: 'blur(24px)',
  transition: 'all 0.5s ease',
  '&.emerald': {
    background: `linear-gradient(135deg, ${alpha('#10b981', 0.2)}, ${alpha('#059669', 0.1)}, ${alpha('#0d9488', 0.2)})`,
  },
  '&.purple': {
    background: `linear-gradient(135deg, ${alpha('#8b5cf6', 0.2)}, ${alpha('#6366f1', 0.1)}, ${alpha('#3b82f6', 0.2)})`,
  },
}));

const FloatingCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: alpha('#ffffff', 0.9),
  backdropFilter: 'blur(8px)',
  borderRadius: 16,
  border: `1px solid ${alpha('#ffffff', 0.5)}`,
  padding: theme.spacing(3),
  boxShadow: `
    0 25px 50px -12px ${alpha('#000000', 0.25)},
    0 0 0 1px ${alpha('#ffffff', 0.05)}
  `,
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
    background: alpha('#ffffff', 0.95),
    boxShadow: `
      0 32px 64px -12px ${alpha('#000000', 0.35)},
      0 0 0 1px ${alpha('#ffffff', 0.1)}
    `,
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 8px 16px ${alpha('#000000', 0.15)}`,
  transition: 'all 0.3s ease',
  '&.emerald': {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    '&:hover': {
      boxShadow: `0 8px 25px ${alpha('#10b981', 0.25)}`,
    },
  },
  '&.purple': {
    background: `linear-gradient(135deg,rgb(27, 100, 184), ${theme.palette.primary.dark})`,
    '&:hover': {
      boxShadow: `0 8px 25px ${alpha('rgb(27, 100, 184)', 0.25)}`,
    },
  },
}));

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
    <Box sx={(theme) => ({
      border: `1px solid ${theme.palette.secondary.contrastText}`,
      margin: { xs: 1, md: 2 },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: 5,
      backgroundImage: `
      radial-gradient(circle at top,
       
        rgba(255, 255, 255, 0.8) 40%,
        rgba(0, 45, 98, 1) 100%)
    `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: "0 0 40px rgba(199, 198, 198, 0.5)",
      position: "relative",
      overflow: "hidden",

    })}>
      <Box sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `radial-gradient(circle at center, lightgray 1px, transparent 0)`,
        backgroundSize: "20px 20px",
        backgroundRepeat: "repeat",
      }}>
        <Box
          sx={(theme) => ({

            backgroundImage: `
      radial-gradient(circle at top,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.8) 30%,
        
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 0 40px rgba(199, 198, 198, 0.5)",
            position: "relative",
            overflow: "hidden",
            zIndex: 10
          })}
        >

          {/* Content */}
          <Box sx={{ position: "relative", zIndex: 20 }}>
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
                    zIndex: 20
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
                px: 10
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
                      background: `linear-gradient(135deg,rgba(59, 130, 246, 1), ${theme.palette.primary.dark})`,
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
                  <RotatingBorderButton />
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
                
                {/* Left Floating Box - Find Jobs Nearby */}
                <MotionBox
              sx={{
                position: 'absolute',
                left: -258,
                top: '50%',
                transform: 'translateY(-20%)',
                width: 288,
                height: 144,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <GradientBackdrop className="emerald" />
              <FloatingCard>
                {/* Gradient overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${alpha('#ecfdf5', 0.5)}, ${alpha('#d1fae5', 0.3)})`,
                    borderRadius: 4,
                  }}
                />
                
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <IconContainer className="emerald">
                    <LocationOnIcon sx={{ color: 'white', fontSize: 24 }} />
                  </IconContainer>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                      Find Jobs Nearby
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Verified local opportunities tailored for you.
                    </Typography> */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#059669',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        '&:hover .arrow': {
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <span>Explore now</span>
                      <ArrowForwardIcon
                        className="arrow"
                        sx={{
                          fontSize: 16,
                          ml: 0.5,
                          transition: 'transform 0.2s',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                
                {/* Decorative elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -8,
                    right: -8,
                    width: 32,
                    height: 32,
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    borderRadius: '50%',
                    opacity: 0.2,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: 8,
                    height: 8,
                    bgcolor: '#34d399',
                    borderRadius: '50%',
                    opacity: 0.4,
                  }}
                />
              </FloatingCard>
            </MotionBox>

            {/* Right Floating Box - Hire Faster */}
            <MotionBox
              sx={{
                position: 'absolute',
                right: -228,
                top: 32,
                width: 288,
                height: 144,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <GradientBackdrop className="purple" />
              <FloatingCard>
                {/* Gradient overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${alpha('#faf5ff', 0.5)}, ${alpha('rgba(59, 130, 246, 1)', 0.3)})`,
                    borderRadius: 4,
                  }}
                />
                
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                  <IconContainer className="purple">
                    <SearchIcon sx={{ color: 'white', fontSize: 24 }} />
                  </IconContainer>
                  <Box sx={{  }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ }}>
                      Hire Faster
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Connect with top local talent instantly.
                    </Typography> */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#002D62',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        '&:hover .arrow': {
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <span>Start hiring</span>
                      <ArrowForwardIcon
                        className="arrow"
                        sx={{
                          fontSize: 16,
                          ml: 0.5,
                          transition: 'transform 0.2s',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                
                {/* Decorative elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -8,
                    right: -8,
                    width: 32,
                    height: 32,
                    background: 'linear-gradient(135deg,rgba(0, 45, 98, 1), rgba(59, 130, 246, 1))',
                    borderRadius: '50%',
                    opacity: 0.2,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: 8,
                    height: 8,
                    bgcolor: 'rgba(0, 45, 98, 1)',
                    borderRadius: '50%',
                    opacity: 0.4,
                  }}
                />
              </FloatingCard>
            </MotionBox>

                
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
