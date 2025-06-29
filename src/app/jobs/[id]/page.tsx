"use client";

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
  Breadcrumbs,
  Link
} from '@mui/material';
import { ArrowBack, Home, Work } from '@mui/icons-material';
import { useRouter, useParams } from 'next/navigation';
import { Job } from '../../../types/job';
import JobDetailsContent from '../components/JobDetailsContent';
import RelatedJobs from '../components/RelatedJobs';
import { supabase } from '@/lib/supabaseClient';

const JobDetailsPage: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const params = useParams();

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobById = async (jobId: string) => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('jobs')
          .select('*')
          .eq('id', jobId)
          .single();

        if (error) {
          console.error("Error fetching job details:", error.message);
          setFetchError("Job not found or error fetching job.");
          setLoading(false);
          return;
        }

        if (data) {
          // Transform Supabase job to frontend Job type
          const transformedJob: Job = {
            id: data.id,
            title: data.title,
            company: data.company,
            location: data.location,
            jobType: data.job_type,
            salaryRange: {
              min: data.min_salary,
              max: data.max_salary,
              currency: data.currency,
            },
            postedTime: data.posted_time,
            tags: data.tags,
            category: data.category,
            experienceLevel: data.experience_level,
            description: data.description,
            responsibilities: data.responsibilities,
            skills: data.skills,
            overview: {
              jobTitle: data.title,
              company: data.company,
              category: data.category,
              jobType: data.job_type,
              experienceLevel: data.experience_level,
              location: data.location,
              estimatedSalary: `${data.min_salary}-${data.max_salary} ${data.currency}`,
            },
          };
          setJob(transformedJob);
        }
      } catch (err: unknown) {
        console.error("Unexpected error fetching job:", (err as Error).message);
        setFetchError("Unexpected error fetching job.");
      } finally {
        setLoading(false);
      }
    };

    const jobId = params.id as string;
    if (jobId) {
      fetchJobById(jobId);
    } else {
      setFetchError("Invalid job ID.");
      setLoading(false);
    }
  }, [params.id, router]);

  const handleViewDetails = (selectedJob: Job) => {
    router.push(`/jobs/${selectedJob.id}`);
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h5">Loading job details...</Typography>
      </Container>
    );
  }

  if (fetchError || !job) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h5" color="error">
          {fetchError || "Job not found."}
        </Typography>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => router.push('/jobs')}
          sx={{ mt: 2 }}
        >
          Back to Jobs
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', backgroundColor: theme.palette.grey[50] }}>
      <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
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
        <Grid container spacing={4} >
          <Grid size={{ xs: 12 }}>
            <JobDetailsContent job={job} />

            {/* Related Jobs (still from store, but optional) */}
            <RelatedJobs currentJob={job} onViewDetails={handleViewDetails} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default JobDetailsPage;
