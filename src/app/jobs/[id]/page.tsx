"use client";

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Breadcrumbs,
  Link
} from '@mui/material';
import { ArrowBack, Home, Work } from '@mui/icons-material';
import { useRouter, useParams } from 'next/navigation';
import { useAppSelector } from '../../../store/slices/hooks';
import { Job } from '../../../types/job';
import JobDetailsContent from '../../../components/JobDetailsContent';
import RelatedJobs from '../../../components/RelatedJobs';

const JobDetailsPage: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const params = useParams();
  const { jobs, selectedJob } = useAppSelector((state) => state.jobs);
  
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const jobId = params.id as string;
    const foundJob = jobs.find(j => j.id === jobId) || selectedJob;
    
    if (foundJob) {
      setJob(foundJob);
    } else {
      // If job not found, redirect to jobs page
      router.push('/jobs');
    }
  }, [params.id, jobs, selectedJob, router]);

  const handleViewDetails = (selectedJob: Job) => {
    router.push(`/jobs/${selectedJob.id}`);
  };

  if (!job) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h5">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.grey[50] }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Breadcrumbs */}
        <Box sx={{ mb: 4 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              <Home sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link
              color="inherit"
              href="/jobs"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              <Work sx={{ mr: 0.5 }} fontSize="inherit" />
              Jobs
            </Link>
            <Typography color="text.primary">{job.title}</Typography>
          </Breadcrumbs>
        </Box>

        {/* Back Button */}
        <Box sx={{ mb: 3 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={() => router.push('/jobs')}
            sx={{ mb: 2 }}
          >
            Back to Jobs
          </Button>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Job Details Content */}
          <Grid item xs={12} lg={8}>
            <JobDetailsContent job={job} />
            
            {/* Related Jobs */}
            <RelatedJobs currentJob={job} onViewDetails={handleViewDetails} />
          </Grid>

          {/* Job Overview Sidebar */}
          {/* <Grid item xs={12} lg={4}>
            <JobOverviewSidebar job={job} />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default JobDetailsPage; 