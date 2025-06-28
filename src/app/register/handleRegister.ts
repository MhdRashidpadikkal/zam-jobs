import { supabase } from '@/lib/supabaseClient';

export async function handleRegister({
  email,
  password,
  name,
  setWarning,
  setLoading,
}: {
  email: string;
  password: string;
  name: string;
  setWarning: (msg: string) => void;
  setLoading: (loading: boolean) => void;
}) {
  setLoading(true);
  setWarning('');

  console.log("getted result", email, password, name);


  try {
    const check = await fetch('/api/check-auth-method', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    let result = { exists: false, provider: '' };

    try {
      result = await check.json();
    } catch (err) {
      console.error('❌ JSON parse failed:', err);
      setWarning('Something went wrong. Please try again.');
      return;
    }

    if (result.exists && result.provider === 'email') {
      setWarning('Email already registered. Please log in.');
      return;
    }

    const cleanedEmail = email.trim().toLowerCase();
    const cleanedPassword = password.trim();
    
    const { error } = await supabase.auth.signUp({
      email: cleanedEmail,
      password: cleanedPassword,
      options: {
        data: { full_name: name.trim() }, // also safe to trim name
        emailRedirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      setWarning(error.message);
    } else {
      setWarning('✅ Check your inbox for confirmation email.');
    }
  } catch (err) {
    console.error('❌ Registration failed:', err);
    setWarning('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
}
