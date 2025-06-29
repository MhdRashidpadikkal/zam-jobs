'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { supabase } from '@/lib/supabaseClient';
import { AuthChangeEvent, Session, User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  hasApplied: boolean | null;
  isApproved: boolean | null;
  loading: boolean;
  checkApplicationStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [hasApplied, setHasApplied] = useState<boolean | null>(null);
  const [isApproved, setIsApproved] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * Centralized function to check the application status for a given user
   */
  const updateStatus = async (currentUser: User | null) => {
    if (!currentUser) {
      setHasApplied(false);
      setIsApproved(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('job_applications')
        .select('is_approved')
        .eq('user_id', currentUser.id)
        .limit(1);

      if (error) {
        console.error('Error checking application status:', error.message);
        setHasApplied(false);
        setIsApproved(null);
      } else if (data && data.length > 0) {
        setHasApplied(true);
        setIsApproved(data[0].is_approved);
      } else {
        setHasApplied(false);
        setIsApproved(null);
      }
    } catch (err) {
      console.error('Unexpected error during application status check:', err);
      setHasApplied(false);
      setIsApproved(null);
    } finally {
      setLoading(false);
    }
  };

  const checkApplicationStatus = async () => {
    await updateStatus(user);
  };

  const logout = async () => {
    console.log('Logging out...');
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error during logout:', error.message);
    } else {
      console.log('User successfully signed out.');
      setUser(null);
      setHasApplied(false);
      setIsApproved(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleAuthChange = async (event: AuthChangeEvent, session: Session | null) => {
        const currentUser = session?.user || null;
        setUser(currentUser);
        await updateStatus(currentUser);
      };

    // Attach auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      handleAuthChange
    );

    // Initial check on mount
    const checkInitialSession = async () => {
      setLoading(true);
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) console.error('Error fetching session:', error.message);
      const initialUser = session?.user || null;
      setUser(initialUser);
      await updateStatus(initialUser);
    };
    checkInitialSession();

    // Cleanup
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    hasApplied,
    isApproved,
    loading,
    checkApplicationStatus,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
