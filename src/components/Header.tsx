// "use client";

// import {
//   Box,
//   Container,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   Typography,
// } from "@mui/material";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useTheme } from "@mui/material/styles";
// import Link from "next/link";
// import { useState } from "react";
// import DehazeIcon from "@mui/icons-material/Dehaze";
// import CloseIcon from "@mui/icons-material/Close";

// interface NavLinkTypes {
//   title: string;
//   url: string;
// }
// const navLinks: NavLinkTypes[] = [
//   {
//     title: "Home",
//     url: "/",
//   },
//   {
//     title: "Jobs",
//     url: "/jobs",
//   },
//   {
//     title: "About",
//     url: "/about",
//   },
//   {
//     title: "Contact",
//     url: "/contact",
//   },
// ];

// export default function Header() {
//   const pathname = usePathname();
//   const theme = useTheme();
//   const [toggle, setToggle] = useState<boolean>(false);
//   const toggleDrawer = (toggle: boolean) => () => {
//     setToggle(toggle);
//   };


//   return (
//     <Container maxWidth="lg" sx={{marginBottom:{xs:'70px',md:'100px'}}}>
//       <Box
//         sx={{
//           position: "relative",
//           top:"30px",
//           flexGrow: 1,
//           display: "flex",
//           justifyContent: "center",
//           // width: "100vw",
//           zIndex: "10",
          
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: { xs: "90vw", md: "80vw" },
//             borderRadius: { xs: "15px", md: "50px" },
//             px: 2,
//             border: 1,
//             borderColor: "#D8D8DB",
//             backgroundColor:'white'
//           }}
//         >
//           {/* Left side: Logo */}
//           <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
//             <IconButton component={Link} href="/" size="large" edge="start">
//               <Image
//                 src="/images/common/zam-job-logo-icon.png"
//                 alt="Zam Job Logo"
//                 width={50}
//                 height={50}
//                 priority
//               />
//             </IconButton>
//             <Typography
//               component={Link}
//               href="/"
//               sx={{
//                 color: theme.palette.primary.main,
//                 textDecoration: "none",
//                 fontWeight: "bold",
//                 fontSize: "1.2em",
//               }}
//             >
//               ZamJobs
//             </Typography>
//           </Box>

//           {/* Navigation Links */}
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               alignItems: "center",
//               gap: 2,
//             }}
//           >
//             {navLinks.map((items, index) => {
//               return (
//                 <Typography
//                   key={index}
//                   component={Link}
//                   href={items.url}
//                   sx={{
//                     px: 2,
//                     color:
//                       pathname === items.url
//                         ? theme.palette.primary.main
//                         : theme.palette.primary.contrastText,
//                     textDecoration: "none",
//                     fontWeight:'600',
//                     fontSize: "1.1rem",
//                     "&:hover": {
//                       color:
//                         pathname === items.url
//                           ? theme.palette.primary.main
//                           : theme.palette.primary.main,
//                     },
//                   }}
//                 >
//                   {items.title}
//                 </Typography>
//               );
//             })}
//           </Box>

//           <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               onClick={toggleDrawer(true)}
//               sx={{
//                 backgroundColor: theme.palette.primary.main,
//                 borderRadius: "5px",
//                 padding: 1,
//                 "&:hover": {
//                   backgroundColor: theme.palette.secondary.main,
//                 },
//               }}
//             >
//               <DehazeIcon sx={{ color:'white' }} />
//             </IconButton>
//           </Box>

//           <Box
//             component={Link}
//             href="/apply"
//             sx={{
//               display: { xs: "none", md: "flex" },
//               color: "white",
//               backgroundImage: `linear-gradient(135deg,rgba(59, 130, 246, 1), ${theme.palette.primary.dark})`,
//               textDecoration: "none",
//               px: 4,
//               py: 2,
//               borderRadius: "50px",
//               transition: "background-color 0.3s ease",
//               "&:hover": {
//                 backgroundImage: `linear-gradient(135deg,rgb(15, 63, 141), ${theme.palette.primary.dark})`,
//               },
//             }}
//           >
//             <Typography>Apply Now</Typography>
//           </Box>
//         </Box>
//         <Box>
//           <Drawer
//             sx={{ position: "relative" }}
//             anchor="top"
//             open={toggle}
//             onClose={toggleDrawer(false)}
//           >
//             <List sx={{ padding: 2 }}>
//               {navLinks.map((item, index) => {
//                 return (
//                   <ListItem
//                     onClick={toggleDrawer(false)}
//                     sx={{ padding: 2, borderBottom: "1px solid gray" }}
//                     key={index}
//                     component={Link}
//                     href={item.url}
//                   >
//                     <Typography
//                       sx={{
//                         color:
//                           pathname === item.url
//                             ? theme.palette.primary.main
//                             : theme.palette.primary.contrastText,
//                         fontSize: "16px",
//                         fontWeight: "600",
//                         "&:hover": {
//                           color: theme.palette.primary.main,
//                           fontWeight: "700",
//                           fontSize: "16px",
//                         },
//                       }}
//                     >
//                       {item.title}
//                     </Typography>
//                   </ListItem>
//                 );
//               })}
//               <Box
//               onClick={toggleDrawer(false)}
//                 component={Link}
//                 href="/apply"
//                 sx={{
//                   display: { xs: "flex", md: "none", justifyContent: "center" },
//                   color: "white",
//                   backgroundImage: `linear-gradient(135deg,rgba(59, 130, 246, 1), ${theme.palette.primary.dark})`,
//                   textDecoration: "none",
//                   px: 4,
//                   py: 2,
//                   mt: 2,
//                   borderRadius: "10px",
//                   transition: "background-color 0.3s ease",
//                   "&:hover": {
//                     backgroundImage: `linear-gradient(135deg,rgb(15, 63, 141), ${theme.palette.primary.dark})`,
//                   },
//                 }}
//               >
//                 <Typography>Apply Now</Typography>
//               </Box>
//             </List>
//             <IconButton
//               onClick={toggleDrawer(!toggle)}
//               sx={{
//                 position: "absolute",
//                 right: "5%",
//                 top: "6.5%",
//                 padding: "10px",
//               }}
//             >
//               <CloseIcon
//                 sx={{
//                   backgroundColor: theme.palette.primary.main,
//                   color: theme.palette.primary.contrastText,
//                   borderRadius: 2,
//                   "&:hover": {
//                     backgroundColor: theme.palette.secondary.main,
//                   },
//                 }}
//               />
//             </IconButton>
//           </Drawer>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

"use client";

import {
  Box,
  Container,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
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
  const pathname = usePathname();
  const theme = useTheme();
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDrawer = (toggle: boolean) => () => setToggle(toggle);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      router.push(`/jobs?search=${encodeURIComponent(searchTerm.trim())}`);
      setToggle(false); // close drawer if on mobile
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

