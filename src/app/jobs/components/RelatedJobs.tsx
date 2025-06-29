import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Grid
} from '@mui/material';
import { useAppSelector } from '@/store/hooks';
import { Job } from '@/types/job';
import JobCard from './JobCard';

interface RelatedJobsProps {
  currentJob: Job;
  onViewDetails: (job: Job) => void;
}

const RelatedJobs: React.FC<RelatedJobsProps> = ({ currentJob, onViewDetails }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const jobs = useAppSelector((state) => state.jobs.jobs);

  // Get related jobs based on category and excluding current job
  const relatedJobs = jobs
    .filter((job: Job) => 
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
    <Box sx={{ mt: 6}}>
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

      <Grid container spacing={5} >
        {relatedJobs.map((job: Job) => (
          <Grid size={{ xs: 12, lg: 4 }} key={job.id}>
            <JobCard job={job} onViewDetails={onViewDetails} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedJobs;