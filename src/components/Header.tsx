
"use client";

import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from "@/context/AuthContext";


interface NavLinkTypes {
  title: string;
  url: string;
}

const navLinks: NavLinkTypes[] = [
  { title: "Home", url: "/" },
  { title: "Jobs", url: "/jobs" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];

export default function Header() {
  const { user, hasApplied, isApproved, logout } = useAuth();


  const pathname = usePathname();
  const theme = useTheme();
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();         // call the context logout
  handleMenuClose();      // close the menu in the UI
  router.push("/login");
  };

  const getFirstLetter = (email: string | null | undefined) => {
    if (email) {
      return email.charAt(0).toUpperCase();
    }
    return ''; 
  };

  const toggleDrawer = (toggle: boolean) => () => setToggle(toggle);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      router.push(`/jobs?search=${encodeURIComponent(searchTerm.trim())}`);
      setToggle(false); 
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: "40px", md: "100px" } }}>
      <Box
        sx={{
          position: "relative",
          top: "30px",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
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
            backgroundColor: "white",
          }}
        >
          {/* Logo */}
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
       
          </Box>

          {/* Desktop Nav & Search */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {/* Search Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 0.5,
                borderRadius: "25px",
                backgroundColor: "#F1F1F1",
                width: "250px",
              }}
            >
              <SearchIcon sx={{ color: "gray", mr: 1 }} />
              <InputBase
                placeholder="Search jobs..."
                inputProps={{ "aria-label": "search" }}
                sx={{ width: "100%" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
            </Box>

            {/* Links */}
            {navLinks.map((item, index) => (
              <Typography
                key={index}
                component={Link}
                href={item.url}
                sx={{
                  px: 2,
                  color:
                    pathname === item.url
                      ? theme.palette.primary.main
                      : theme.palette.primary.contrastText,
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
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
              <DehazeIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          {/* Desktop Apply Button */}
          {user === null ? (
            <Box
            component={Link}
            href="/login"
            sx={{
              display: { xs: "none", md: "flex" },
              color: "white",
              backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 1), ${theme.palette.primary.dark})`,
              textDecoration: "none",
              px: 4,
              py: 2,
              borderRadius: "50px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundImage: `linear-gradient(135deg, rgb(15, 63, 141), ${theme.palette.primary.dark})`,
              },
            }}
          >
            <Typography>Login</Typography>
          </Box>
          ) : user && hasApplied === false ? (
            <Box
            component={Link}
            href="/apply"
            sx={{
              display: { xs: "none", md: "flex" },
              color: "white",
              backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 1), ${theme.palette.primary.dark})`,
              textDecoration: "none",
              px: 4,
              py: 2,
              borderRadius: "50px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundImage: `linear-gradient(135deg, rgb(15, 63, 141), ${theme.palette.primary.dark})`,
              },
            }}
          >
            <Typography>Apply Now</Typography>
          </Box>
          ) : (
            (
              <>
               <Button
                  color="inherit"
                  onClick={handleMenuClick}
                  sx={{
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    minWidth: 0, 
                    padding: 0, 
                    backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 1), ${theme.palette.primary.dark})`,
                    color: 'white', 
                    fontSize: '1rem', 
                    fontWeight: 'bold', 
                    '&:hover': {
                      opacity: 0.9,
                      transform: 'scale(1.05)'
                    },
                    transition: 'all 0.2s ease-in-out', 
                  }}
                >
                  <Typography variant="body1" component="span">
                    {getFirstLetter(user?.email)}
                  </Typography>
                </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem>
                  Status: {isApproved ? 'Active' : 'Pending'}
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
            )
          ) }
        </Box>

        {/* Mobile Drawer */}
        <Box>
          <Drawer
            anchor="top"
            open={toggle}
            onClose={toggleDrawer(false)}
            sx={{ position: "relative" }}
          >
            {/* Mobile Search Bar */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
               
                py: 1,
                borderRadius: "10px",
                backgroundColor: "#F1F1F1",
                mx: 2,
                mt: 2,
                width:'80%'
               
              }}
            >
              <SearchIcon sx={{ color: "gray", mr: 1, }} />
              <InputBase
                placeholder="Search jobs..."
                inputProps={{ "aria-label": "search" }}
                sx={{ width: "100%" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
            </Box>

            {/* Mobile Nav Links */}
            <List sx={{ padding: 2 }}>
              {navLinks.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={toggleDrawer(false)}
                  component={Link}
                  href={item.url}
                  sx={{ padding: 2, borderBottom: "1px solid gray" }}
                >
                  <Typography
                    sx={{
                      color:
                        pathname === item.url
                          ? theme.palette.primary.main
                          : theme.palette.primary.contrastText,
                      fontSize: "16px",
                      fontWeight: "600",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </ListItem>
              ))}

              {/* Mobile Apply Button */}
              <Box
                onClick={toggleDrawer(false)}
                component={Link}
                href="/apply"
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "center",
                  color: "white",
                  backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 1), ${theme.palette.primary.dark})`,
                  textDecoration: "none",
                  px: 4,
                  py: 2,
                  mt: 2,
                  borderRadius: "10px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundImage: `linear-gradient(135deg, rgb(15, 63, 141), ${theme.palette.primary.dark})`,
                  },
                }}
              >
                <Typography>Apply Now</Typography>
              </Box>
            </List>

            {/* Drawer Close Button */}
            <IconButton
              onClick={toggleDrawer(!toggle)}
              sx={{
                position: "absolute",
                right: "5%",
                top: "4.5%",
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
    </Container>
  );
}

