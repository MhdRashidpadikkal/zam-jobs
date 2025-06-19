import React from 'react';
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useAppSelector } from '../store/slices/hooks';
import { Job } from '../types/job';
import JobCard from './JobCard';

interface RelatedJobsProps {
  currentJob: Job;
  onViewDetails: (job: Job) => void;
}

const RelatedJobs: React.FC<RelatedJobsProps> = ({ currentJob, onViewDetails }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { jobs } = useAppSelector((state) => state.jobs);

  // Get related jobs based on category and excluding current job
  const relatedJobs = jobs
    .filter(job => 
      job.id !== currentJob.id && 
      (job.category === currentJob.category || 
       job.location === currentJob.location ||
       job.jobType === currentJob.jobType)
    )
    .slice(0, 3);

  if (relatedJobs.length === 0) {
    return null;
  }

  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 3,
          fontSize: isMobile ? '1.5rem' : '2rem',
        }}
      >
        Related Jobs
      </Typography>

      <Grid container spacing={3}>
        {relatedJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <JobCard job={job} onViewDetails={onViewDetails} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedJobs; 