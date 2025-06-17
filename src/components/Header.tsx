"use client";

import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

const isActiveRoute = (pathname: string, route: string) => {
  return pathname === route || pathname.startsWith(route);
};

export default function Header() {
  const pathname = usePathname();
  const theme = useTheme();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left side: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            component={Link}
            href="/"
            size="large"
            edge="start"
          >
            <Image
              src="/images/common/zam-job-logo-icon.png"
              alt="Zam Job Logo"
              width={70}
              height={70}
              priority
            />
          </IconButton>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            component={Link}
            href="/"
            sx={{
              px: 2,
              color: pathname === '/' ? theme.palette.primary.main : theme.palette.secondary.main,
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              '&:hover': {
                color: pathname === '/' ? theme.palette.primary.main : theme.palette.primary.main,
              },
            }}
          >
            Home
          </Typography>
          <Typography
            component={Link}
            href="/jobs"
            sx={{
              px: 2,
              color: pathname === '/jobs' ? theme.palette.primary.main : theme.palette.secondary.main,
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              '&:hover': {
                color: pathname === '/jobs' ? theme.palette.primary.main : theme.palette.primary.main,
              },
            }}
          >
            Jobs
          </Typography>
          <Typography
            component={Link}
            href="/about"
            sx={{
              px: 2,
              color: pathname === '/about' ? theme.palette.primary.main : theme.palette.secondary.main,
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              '&:hover': {
                color: pathname === '/about' ? theme.palette.primary.main : theme.palette.primary.main,
              },
            }}
          >
            About
          </Typography>
          <Typography
            component={Link}
            href="/contact"
            sx={{
              px: 2,
              color: pathname === '/contact' ? theme.palette.primary.main : theme.palette.secondary.main,
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              '&:hover': {
                color: pathname === '/contact' ? theme.palette.primary.main : theme.palette.primary.main,
              },
            }}
          >
            Contact
          </Typography>
          <Box component={Link} href="/apply" sx={{
            color: 'white',
            backgroundColor: theme.palette.primary.main,
            textDecoration: 'none',
            px: 3,
            py: 1,
            borderRadius: 2,
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: theme.palette.secondary.main,
            },
          }}>
            Apply Now
          </Box>
          
        </Box>
      </Toolbar>
    </Box>
  );
}
