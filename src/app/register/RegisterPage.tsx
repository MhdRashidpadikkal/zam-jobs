'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

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
  PersonAdd,
  Person,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import AuthBackground from '@/components/AuthBackground';
import { handleRegister } from './handleRegister';

const MotionCard = motion(Card);

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState('');


    const handleGoogleSignIn = async () => {
    const check = await fetch('/api/check-auth-method', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await check.json();

    console.log("getted result", result);

    if (result.exists && result.provider === 'email') {
      alert('This email is registered with password. Please login with password.');
      return;
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error('Google Sign In Error:', error);
      setWarning('Failed to sign in with Google. Please try again.');
      return;
    }

    // The auth flow will handle the rest through the callback route
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
                      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <PersonAdd sx={{ fontSize: 32, color: 'white' }} />
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
                  Create Account
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Join us today and start your journey
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

              {/* Register Form */}
              <Box component="form" >
                <TextField
                  fullWidth
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                  disabled={loading}
                />

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
                  helperText="Password must be at least 6 characters long"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  onClick={() =>
                            handleRegister({
                              email,
                              password,
                              name,
                              setWarning,
                              setLoading,
                            })
                          }
                  endIcon={
                    loading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <CheckCircle />
                    )
                  }
                  sx={{ mb: 3 }}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
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

              {/* Login Link */}
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Already have an account?{' '}
                  <Link component={NextLink} href="/login" sx={{ fontWeight: 600 }}>
                    Sign In
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