"use client";
import { theme } from "@/theme";
import {
  Avatar,
  Box,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid'

interface ReviewType {
  name: string;
  review: string;
  rating: number;
  date: string;
}

const reviews: ReviewType[] = [
  {
    name: "Aneesh",
    review:
      "The platform was incredibly user-friendly. I was able to set up my profile, upload my resume, and start applying to jobs within minutes. The job recommendations were spot on and I received interview calls within a few days. Highly impressed with the overall flow!",
    rating: 5,
    date: "2025-Aug-18",
  },
  {
    name: "Priya",
    review:
      "I really appreciated how clean and intuitive the design of the platform is. The filters made it easy to narrow down job results by role and location. I would have liked a bit more feedback on my applications, but overall, it was a positive experience.",
    rating: 4,
    date: "2025-Sep-15",
  },
  {
    name: "Rahul",
    review:
      "The platform has potential, but I did encounter some performance issues while browsing job listings on my mobile device. Some job descriptions were outdated or unclear. Still, I managed to find a couple of opportunities worth applying to.",
    rating: 3,
    date: "2025-Mar-10",
  },
  {
    name: "Sneha",
    review:
      "The job portal looks great visually and is quite simple to use. However, I noticed there aren't enough listings in niche fields like design or research. If the platform expands its job pool, it could become my go-to site.",
    rating: 3,
    date: "2025-Jan-05",
  },
  {
    name: "Vikram",
    review:
      "Excellent platform! The job suggestions matched my skills perfectly, and the application tracking system kept everything organized. I received updates instantly and got hired within a week of signing up. Highly recommend it to job seekers!",
    rating: 5,
    date: "2025-Apr-01",
  },
];

const ReviewCard = () => {
  return (
    <Box>
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: {xs:'max-content',md:'90vh'},
            padding: 3,
           
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography
              sx={{
                border: `1px solid ${theme.palette.secondary.contrastText}`,
                width: "max-content",
                px: 2,
                borderRadius: 5,
                boxShadow: 1,
                color: "black",
              }}
            >
              Review
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize:{xs:'2em',md:"3.5em"} ,
                fontWeight: "500",
                color: "black",
                lineHeight: 1,
              }}
            >
              What our clients are{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(0, 45, 98, 1), rgba(59, 130, 246, 1))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                saying
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.contrastText,
                fontSize: "0.9em",
                fontWeight: "500",
              }}
            >
              A clean, user-friendly job portal with smooth performance and
              great responsiveness. Makes job searching easy, efficient, and
              accessible for everyone.
            </Typography>
          </Box>
          <Box>
            <Typography
              component="h1"
              sx={{ fontSize: "3.1em", color: "black" }}
            >
              2k+
            </Typography>
            <Typography
              component="h6"
              sx={{
                fontSize: "0.9em",
                color: theme.palette.primary.contrastText,
              }}
            >
              Trusted by users
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
           sx={{
    position: "relative",
    padding: 3,
       height: {xs:'50vh',md:'90vh'},
    borderRadius:5,
    overflow: "hidden",
    background: `
      linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%),
      linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)
    `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 50%, 100% 50%",
    backgroundPosition: "top, bottom",
    "&::before": {
      content: '""',
      position: "absolute",
      top: -50,
      left: 0,
      width: "100%",
      height: "150px",
      background: "white",
      filter: "blur(30px)",
      zIndex: 1,
    },
     "&::after": {
      content: '""',
      position: "absolute",
      bottom: -50,
      left: 0,
      width: "100%",
      height: "150px",
      background: "white",
      filter: "blur(30px)",
      zIndex: 1,
      pointerEvents: "none",
    },
  }}
        >
          <Box
            component={motion.div}
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            sx={{ display: "flex", flexDirection: "column", gap: 5 }}
          >
            {reviews.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    border: `1px solid ${theme.palette.secondary.contrastText}`,
                    padding: 2,
                    borderRadius: 5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Box>
                      <Avatar
                        sx={{ bgcolor: "blue" }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                      >
                        {item.name.charAt(0)}
                      </Avatar>
                    </Box>
                    <Box>
                      <Typography component="h1" sx={{ fontWeight: "bolder" }}>
                        {item.name}
                      </Typography>
                      <Rating sx={{fontSize:'16px'}} name="read-only" value={5} readOnly />
                    </Box>
                  </Box>
                  <Box sx={{display:'flex',flexDirection:'column',gap:3}}>
                    <Typography
                      component="h6"
                      sx={{
                        fontSize: "0.9em",
                        color: theme.palette.primary.contrastText,
                      }}
                    >
                      {item.review}
                    </Typography>
                    <Typography sx={{fontWeight:'700'}}>{item.date}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
};

export default ReviewCard;
