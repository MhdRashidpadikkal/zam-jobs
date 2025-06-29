import React, { useEffect, useState } from 'react';
import {
  Paper,
  Box,
  Typography,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Business, LocationOn } from '@mui/icons-material';
import { Job } from '@/types/job';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useSnackbar } from 'notistack';

interface JobCardProps {
  job: Job;
  onViewDetails: (job: Job) => void;
  viewMode?: 'card' | 'list';
}

const JobCard: React.FC<JobCardProps> = ({ job, onViewDetails, viewMode = 'card' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const { isApproved } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const [hasApplied, setHasApplied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkApplied = async () => {
      setLoading(true);
      const { data: user, error: userError } = await supabase.auth.getUser();
      if (userError || !user?.user) {
        console.error('Not authenticated or error fetching user:', userError?.message);
        setHasApplied(false);
        setLoading(false);
        return;
      }

      const userId = user.user.id;

      const { data: applied, error: appliedError } = await supabase
        .from('applied_jobs')
        .select('id')
        .eq('user_id', userId)
        .eq('job_id', job.id)
        .single();

      if (appliedError && appliedError.code !== 'PGRST116') {
        console.error('Error checking applied_jobs:', appliedError.message);
      }

      setHasApplied(!!applied);
      setLoading(false);
    };

    checkApplied();
  }, [job.id]);

  const handleApply = async () => {
    setLoading(true);
    const { data: user, error: userError } = await supabase.auth.getUser();
    if (userError || !user?.user) {
      console.error('User not authenticated. Redirecting to login...');
      router.push('/login');
      return;
    }

    const userId = user.user.id;

    const { data: jobApplication, error: jobAppError } = await supabase
      .from('job_applications')
      .select('id')
      .eq('user_id', userId)
      .single();

    if (jobAppError || !jobApplication) {
      console.error('Error finding job_application:', jobAppError?.message || 'Not found');
      setLoading(false);
      return;
    }

    const { error: applyError } = await supabase.from('applied_jobs').insert([{
      user_id: userId,
      job_id: job.id,
      job_applicant_id: jobApplication.id,
      status: 'submitted',
    }]);

    if (applyError) {
      console.error('Error applying to job:', applyError.message);
    } else {
      console.log('Application submitted successfully.');
      setHasApplied(true);
    }

    setLoading(false);
  };

  const handleApplyClick = () => {
    console.log('isApproved', isApproved);
    if (!isApproved) {
      enqueueSnackbar('Your application is under review. You cannot apply yet.', { variant: 'warning' });
      return;
    }
    handleApply();
  };

  if (viewMode !== 'list') {
    return null;
  }

  return (
    <Paper
      sx={{
        width: '100%',
        p: isMobile ? 2 : 3,
        mb: 2,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'stretch' : 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease-in-out',
        border: `1px solid ${theme.palette.divider}`,
        '&:hover': {
          transform: isMobile ? 'translateY(-2px)' : 'translateX(4px)',
          boxShadow: theme.shadows[4],
          borderColor: theme.palette.primary.main,
        },
      }}
    >
      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: isMobile ? 2 : 3
      }}>
        <Box sx={{
          width: 60,
          height: 60,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 600,
          fontSize: '1.2rem',
          flexShrink: 0,
          backgroundColor: theme.palette.primary.main,
        }}>
          {job.company.charAt(0).toUpperCase()}
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{
            fontWeight: 600,
            color: theme.palette.primary.main,
            mb: 0.5,
            fontSize: isMobile ? '1rem' : '1.1rem',
          }}>
            {job.title}
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? 1 : 2,
            mb: 0.5
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Business sx={{ fontSize: 16, mr: 0.5, color: theme.palette.text.secondary }} />
              <Typography variant="body2" color="text.secondary">{job.company}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ fontSize: 16, mr: 0.5, color: theme.palette.text.secondary }} />
              <Typography variant="body2" color="text.secondary">{job.location}</Typography>
            </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? 1 : 2
          }}>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label={job.jobType} size="small" sx={{
                backgroundColor: '#002D62',
                color: 'white',
                fontWeight: 500,
                fontSize: isMobile ? '0.7rem' : '0.75rem',
              }} />
              <Chip label={job.experienceLevel} size="small" sx={{
                backgroundColor: '#002D62',
                color: 'white',
                fontWeight: 500,
                fontSize: isMobile ? '0.7rem' : '0.75rem',
              }} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: isMobile ? '0.8rem' : '0.875rem' }}>
              Posted {formatDistanceToNow(parseISO(job.postedTime), { addSuffix: true })}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'stretch' : 'center',
        gap: isMobile ? 2 : 2,
        mt: isMobile ? 2 : 0
      }}>
        <Button
          variant="contained"
          onClick={() => onViewDetails(job)}
          size="small"
          sx={{ backgroundColor: '#002D62', color: 'white' }}
        >
          View Details
        </Button>

        <Button
          variant="contained"
          onClick={hasApplied ? undefined : handleApplyClick}
          disabled={loading || hasApplied}
          size="small"
          sx={{
            background: hasApplied
              ? theme.palette.success.main
              : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              background: hasApplied
                ? theme.palette.success.main
                : `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
              transform: 'translateY(-1px)',
              boxShadow: theme.shadows[4],
            },
          }}
        >
          {loading ? 'Loading...' : hasApplied ? 'Applied' : 'Apply'}
        </Button>
      </Box>
    </Paper>
  );
};

export default JobCard;
