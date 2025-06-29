'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient'; // Adjust if your client is elsewhere
import { Box, CircularProgress, Typography } from '@mui/material';

export default function AuthCallbackPage() {
  const router = useRouter();

useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.push('/');
      } else {
        router.push('/login');
      }
    });
    return () => subscription?.subscription.unsubscribe();
  }, [router]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 3,
      }}
    >
      <CircularProgress sx={{ mb: 2 }} />
      <Typography variant="h6" color="text.secondary">
        Authenticating...
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Please wait while we log you in.
      </Typography>
    </Box>
  );
}
