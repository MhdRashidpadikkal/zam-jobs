'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
  Divider,
  InputAdornment,
  IconButton,
  CircularProgress,
  Alert,
  Fade,
  Slide,
} from '@mui/material';
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Google,
  ArrowForward,
  Person,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import AuthBackground from '@/components/AuthBackground';
import NextLink from 'next/link';
import { handleLogin } from './handleLogin';
import { supabase } from '@/lib/supabaseClient';

const MotionCard = motion(Card);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState('');
  const router = useRouter();

  const handleGoogleSignIn = async () => {
      try {
        const check = await fetch('/api/check-auth-method', {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        const result = await check.json();
  
        if (result.exists && result.provider === 'email') {
          alert('This email is registered with password. Please login with password.');
          return;
        }
  
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: `${window.location.origin}/auth/callback`,
            scopes: 'email profile',
          },
        });
  
        if (error) {
          console.error('Google Sign In Error:', error);
          setWarning('Failed to sign in with Google. Please try again.');
          return;
        }
  
        router.push('/');
        // router.refresh();
      } catch (error) {
        console.error('Google Sign In Error:', error);
        setWarning('Failed to sign in with Google. Please try again.');
      }
    };
  
    const handleLoginSubmit = async () => {
 
      const { error } = await handleLogin({
        email,
        password,
        setWarning,
        setLoading,
      });

      console.log("getted error", error);
  
      if (!error) {
        router.push('/');
        router.refresh();
        console.log("success")
      }
    };

  return (
    <>
      <AuthBackground />
      <Fade in timeout={600}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
            py: 4,
          }}
        >
          <MotionCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            sx={{
              maxWidth: 440,
              width: '100%',
              position: 'relative',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              {/* Header */}
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    <Person sx={{ fontSize: 32, color: 'white' }} />
                  </Box>
                </motion.div>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                  }}
                >
                  Welcome Back
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Sign in to continue to your account
                </Typography>
              </Box>

              {/* Warning Alert */}
              {warning && (
                <Slide direction="down" in={!!warning} mountOnEnter unmountOnExit>
                  <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                    {warning}
                  </Alert>
                </Slide>
              )}

              {/* Login Form */}
              <Box component="form" >
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                  disabled={loading}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          disabled={loading}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 4 }}
                  disabled={loading}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  onClick={handleLoginSubmit}
                  endIcon={
                    loading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <ArrowForward />
                    )
                  }
                  sx={{ mb: 3 }}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>
              </Box>

              {/* Divider */}
              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>

              {/* Google Sign In */}
              <Button
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<Google />}
                onClick={handleGoogleSignIn}
                disabled={loading}
                sx={{
                  mb: 4,
                  borderColor: '#DB4437',
                  color: '#DB4437',
                  '&:hover': {
                    borderColor: '#C23321',
                    backgroundColor: 'rgba(219, 68, 55, 0.04)',
                  },
                }}
              >
                Continue with Google
              </Button>

              {/* Register Link */}
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{' '}
                  <Link component={NextLink} href="/register" sx={{ fontWeight: 600 }}>
                    Create Account
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </MotionCard>
        </Box>
      </Fade>
    </>
  );
}