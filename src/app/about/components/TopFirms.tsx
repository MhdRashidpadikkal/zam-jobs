import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessIcon from "@mui/icons-material/Business";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const TopFirms = () => {
  const aboutBoxes = [
    {
      title: "Who We Are",
      description:
        "We are a career-driven platform connecting job seekers with employers using smart tools.",
      image: "/images/we.jpg",
    },
    {
      title: "What We Do",
      description:
        "We simplify hiring by offering resume building, curated jobs, and insights into top companies.",
      image: "/images/wedo.jpg",
    },
  ];
  const highlights = [
    {
      title: "Quality Job",
      icon: <WorkIcon />,
    },
    {
      title: "Resume Builder",
      icon: <DescriptionIcon />,
    },
    {
      title: "Top Companies",
      icon: <BusinessIcon />,
    },
    {
      title: "Top Talents",
      icon: <EmojiPeopleIcon />,
    },
  ];
  return (
    <Box>
      <Box sx={{ py: 10, flexGrow: 1 }}>
        <Grid container spacing={2}>
          {aboutBoxes.map((item, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    height: 200,
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Highlight Section */}
      <Grid container spacing={3} sx={{ mt: 5 }}>
        {highlights.map((feature, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
            <Card
              sx={{
                textAlign: "center",
                py: 4,
                px: 2,
                borderRadius: 3,
                boxShadow: 2,
                height: "100%",
                minWidth: "200px",
                //   backgroundColor:'red'
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 56,
                  height: 56,
                  mb: 2,
                  mx: "auto",
                }}
              >
                {feature.icon}
              </Avatar>
              <Typography variant="subtitle1" fontWeight={600}>
                {feature.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopFirms;
