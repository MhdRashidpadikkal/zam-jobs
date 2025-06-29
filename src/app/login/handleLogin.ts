import { supabase } from '@/lib/supabaseClient';

export async function handleLogin({
  email,
  password,
  setWarning,
  setLoading,
}: {
  email: string;
  password: string;
  setWarning: (msg: string) => void;
  setLoading: (loading: boolean) => void;
}): Promise<{ error: Error | null }> {
  setLoading(true);
  setWarning('');

  const cleanedEmail = email.trim().toLowerCase();
  const cleanedPassword = password.trim();

  if (!cleanedEmail || !cleanedPassword) {
    setWarning('Please enter both email and password.');
    setLoading(false);
    return { error: new Error('Please enter both email and password.') };
  }

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: cleanedEmail,
      password: cleanedPassword,
    });

    if (error) {
      console.error('Login Error:', error);
      setWarning('Invalid email or password. Please try again.');
      setLoading(false);
      return { error };
    }

    return { error: null };
  } catch (error) {
    console.error('Login Error:', error);
    setWarning('Something went wrong. Please try again.');
    setLoading(false);
    return { error: new Error('Something went wrong. Please try again.') };
  } finally {
    setLoading(false);
  }
}

 
