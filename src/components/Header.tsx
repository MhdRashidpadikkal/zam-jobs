"use client";

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

interface NavLinkTypes {
  title: string;
  url: string;
}
const navLinks: NavLinkTypes[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Jobs",
    url: "/jobs",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();
  const theme = useTheme();
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleDrawer = (toggle: boolean) => () => {
    setToggle(toggle);
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          top: "50px",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          zIndex: "10",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { xs: "90vw", md: "80vw" },
            borderRadius: { xs: "15px", md: "50px" },
            px: 2,
            border: 1,
            borderColor: "#D8D8DB",
          }}
        >
          {/* Left side: Logo */}
          <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
            <IconButton component={Link} href="/" size="large" edge="start">
              <Image
                src="/images/common/zam-job-logo-icon.png"
                alt="Zam Job Logo"
                width={50}
                height={50}
                priority
              />
            </IconButton>
            <Typography
              component={Link}
              href="/"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.2em",
              }}
            >
              ZamJobs
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {navLinks.map((items, index) => {
              return (
                <Typography
                  key={index}
                  component={Link}
                  href={items.url}
                  sx={{
                    px: 2,
                    color:
                      pathname === items.url
                        ? theme.palette.primary.main
                        : theme.palette.secondary.contrastText,
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    "&:hover": {
                      color:
                        pathname === items.url
                          ? theme.palette.primary.main
                          : theme.palette.primary.main,
                    },
                  }}
                >
                  {items.title}
                </Typography>
              );
            })}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: "5px",
                padding: 1,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.main,
                },
              }}
            >
              <DehazeIcon sx={{ color: theme.palette.primary.contrastText }} />
            </IconButton>
          </Box>

          <Box
            component={Link}
            href="/apply"
            sx={{
              display: { xs: "none", md: "flex" },
              color: "white",
              backgroundColor: theme.palette.primary.main,
              textDecoration: "none",
              px: 4,
              py: 2,
              borderRadius: "50px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            <Typography>Apply Now</Typography>
          </Box>
        </Box>
        <Box>
          <Drawer
            sx={{ position: "relative" }}
            anchor="top"
            open={toggle}
            onClose={toggleDrawer(false)}
          >
            <List sx={{ padding: 2 }}>
              {navLinks.map((item, index) => {
                return (
                  <ListItem
                    onClick={toggleDrawer(false)}
                    sx={{ padding: 3, borderBottom: "1px solid gray" }}
                    key={index}
                    component={Link}
                    href={item.url}
                  >
                    <Typography
                      sx={{
                        color:
                          pathname === item.url
                            ? theme.palette.primary.main
                            : theme.palette.secondary.contrastText,
                        fontSize: "16px",
                        fontWeight: "600",
                        "&:hover": {
                          color: theme.palette.primary.main,
                          fontWeight: "700",
                          fontSize: "16px",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </ListItem>
                );
              })}
              <Box
                component={Link}
                href="/apply"
                sx={{
                  display: { xs: "flex", md: "none", justifyContent: "center" },
                  color: "white",
                  backgroundColor: theme.palette.primary.main,
                  textDecoration: "none",
                  px: 4,
                  py: 2,
                  mt: 2,
                  borderRadius: "10px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                <Typography>Apply Now</Typography>
              </Box>
            </List>
            <IconButton
              onClick={toggleDrawer(!toggle)}
              sx={{
                position: "absolute",
                right: "5%",
                top: "6.5%",
                padding: "10px",
              }}
            >
              <CloseIcon
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              />
            </IconButton>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
}
