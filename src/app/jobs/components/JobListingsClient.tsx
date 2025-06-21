"use client";

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
  TextField,
  InputAdornment
} from '@mui/material';
import { FilterList, Search } from '@mui/icons-material';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Job } from '../../types/job';
import JobCard from './JobCard';
import JobFilterSidebar from './JobFilterSidebar';
import SortDropdown from './SortDropdown';
import PaginationControl from './PaginationControl';
import HiringBanner from './HiringBanner';

interface JobListingsClientProps {
  jobs: Job[];
}

const JobListingsClient: React.FC<JobListingsClientProps> = ({ jobs }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);

  const handleViewDetails = (job: Job) => {
    // This could be updated to store selected job differently if needed
    router.push(`/jobs/${job.id}`);
  };

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    return params.toString();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(pathname + '?' + createQueryString('search', event.target.value));
  };

  const searchBar = (
    <TextField
      fullWidth
      size="small"
      placeholder="Search by job title..."
      defaultValue={searchParams.get('search') || ''}
      onChange={handleSearchChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );

  const page = parseInt(searchParams.get('page') || '1', 10);
  const jobsPerPage = 6;
  const startIndex = (page - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.grey[50] }}>
      {/* Hiring Banner */}
      <HiringBanner />

      <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Filter Sidebar */}
          {!isMobile && (
            <JobFilterSidebar />
          )}

          {/* Main Content */}
          <Box sx={{ flex: 1 }}>
            {/* Header with filters and sort */}
            <Paper sx={{ p: isMobile ? 2 : 3, mb: 3 }}>
              {isMobile ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {searchBar}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                      {jobs.length} Jobs Found
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <SortDropdown />
                    <Button
                      variant="outlined"
                      startIcon={<FilterList />}
                      onClick={() => setFilterSidebarOpen(true)}
                      size="small"
                    >
                      Filters
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                }}>
                  <Box sx={{ flex: 1, maxWidth: 400 }}>
                    {searchBar}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <SortDropdown />
                  </Box>
                </Box>
              )}
            </Paper>

            {/* Job List */}
            {currentJobs.length > 0 ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {currentJobs.map((job) => (
                  <JobCard key={job.id} job={job} onViewDetails={handleViewDetails} viewMode="list" />
                ))}
              </Box>
            ) : (
              <Paper sx={{ p: 6, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                  No jobs found
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Try adjusting your filters or search criteria
                </Typography>
              </Paper>
            )}

            {/* Pagination */}
            <PaginationControl totalPages={Math.ceil(jobs.length / jobsPerPage)} />
          </Box>
        </Box>
      </Box>

      {/* Mobile Filter Sidebar */}
      {isMobile && (
        <JobFilterSidebar 
          open={filterSidebarOpen} 
          onClose={() => setFilterSidebarOpen(false)} 
        />
      )}
    </Box>
  );
};

export default JobListingsClient;
