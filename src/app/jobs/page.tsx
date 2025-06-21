"use client";

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import { FilterList, Work } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../store/slices/hooks';
import { setSelectedJob, filterJobs } from '../../store/slices/jobSlice';
import { Job } from '../../types/job';
import JobCard from '../../components/JobCard';
import JobFilterSidebar from '../../components/JobFilterSidebar';
import SortDropdown from '../../components/SortDropdown';
import PaginationControl from '../../components/PaginationControl';
import HiringBanner from '../../components/HiringBanner';
import ViewToggle from '../../components/ViewToggle';

const JobListingsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  const { filteredJobs, pagination } = useAppSelector((state) => state.jobs);
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');

  useEffect(() => {
    dispatch(filterJobs());
  }, [dispatch]);

  const handleViewDetails = (job: Job) => {
    dispatch(setSelectedJob(job));
    router.push(`/jobs/${job.id}`);
  };

  const handleViewChange = (newViewMode: 'card' | 'list') => {
    setViewMode(newViewMode);
  };

  // Get current page jobs
  const startIndex = (pagination.currentPage - 1) * pagination.jobsPerPage;
  const endIndex = startIndex + pagination.jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.grey[50] }}>
      {/* Hiring Banner */}
      <HiringBanner />

      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Filter Sidebar */}
          {!isMobile && (
            <JobFilterSidebar open={false} onClose={() => {}} />
          )}

          {/* Main Content */}
          <Box sx={{ flex: 1 }}>
            {/* Header with filters and sort */}
            <Paper sx={{ p: isMobile ? 2 : 3, mb: 3 }}>
              {isMobile ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                      {filteredJobs.length} Jobs Found
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<FilterList />}
                      onClick={() => setFilterSidebarOpen(true)}
                      size="small"
                    >
                      Filters
                    </Button>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <SortDropdown />
                    <ViewToggle viewMode={viewMode} onViewChange={handleViewChange} />
                  </Box>
                </Box>
              ) : (
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.25rem' }}>
                      {filteredJobs.length} Jobs Found
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <ViewToggle viewMode={viewMode} onViewChange={handleViewChange} />
                    <SortDropdown />
                  </Box>
                </Box>
              )}
            </Paper>

            {/* Job Cards/List */}
            {currentJobs.length > 0 ? (
              viewMode === 'card' ? (
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { 
                    xs: '1fr', 
                    sm: 'repeat(2, 1fr)', 
                    lg: 'repeat(3, 1fr)' 
                  },
                  gap: 2
                }}>
                  {currentJobs.map((job: Job) => (
                    <Box key={job.id}>
                      <JobCard job={job} onViewDetails={handleViewDetails} viewMode="card" />
                    </Box>
                  ))}
                </Box>
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {currentJobs.map((job: Job) => (
                    <JobCard key={job.id} job={job} onViewDetails={handleViewDetails} viewMode="list" />
                  ))}
                </Box>
              )
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
            <PaginationControl />
          </Box>
        </Box>
      </Container>

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

export default JobListingsPage;
