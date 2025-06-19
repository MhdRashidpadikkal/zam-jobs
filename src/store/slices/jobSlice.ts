import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JobState, JobFilters, Job } from '../../types/job';
import { mockJobs } from '../../data/mockJobs';

const initialState: JobState = {
  jobs: mockJobs,
  filteredJobs: mockJobs,
  selectedJob: null,
  filters: {
    search: '',
    location: '',
    category: '',
    jobType: '',
    experienceLevel: '',
    datePosted: '',
    salaryRange: [0, 200000],
    tags: []
  },
  pagination: {
    currentPage: 1,
    jobsPerPage: 6,
    totalPages: Math.ceil(mockJobs.length / 6)
  },
  sortBy: 'latest',
  loading: false,
  error: null
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setSelectedJob: (state, action: PayloadAction<Job | null>) => {
      state.selectedJob = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<JobFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.pagination.currentPage = 1;
    },
    setSortBy: (state, action: PayloadAction<'latest' | 'salary' | 'title' | 'company'>) => {
      state.sortBy = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pagination.currentPage = action.payload;
    },
    filterJobs: (state) => {
      let filtered = [...state.jobs];

      // Search filter
      if (state.filters.search) {
        filtered = filtered.filter(job =>
          job.title.toLowerCase().includes(state.filters.search.toLowerCase()) ||
          job.company.toLowerCase().includes(state.filters.search.toLowerCase())
        );
      }

      // Location filter
      if (state.filters.location) {
        filtered = filtered.filter(job =>
          job.location.toLowerCase().includes(state.filters.location.toLowerCase())
        );
      }

      // Category filter
      if (state.filters.category) {
        filtered = filtered.filter(job => job.category === state.filters.category);
      }

      // Job type filter
      if (state.filters.jobType) {
        filtered = filtered.filter(job => job.jobType === state.filters.jobType);
      }

      // Experience level filter
      if (state.filters.experienceLevel) {
        filtered = filtered.filter(job => job.experienceLevel === state.filters.experienceLevel);
      }

      // Salary range filter
      filtered = filtered.filter(job =>
        job.salaryRange.min >= state.filters.salaryRange[0] &&
        job.salaryRange.max <= state.filters.salaryRange[1]
      );

      // Tags filter
      if (state.filters.tags.length > 0) {
        filtered = filtered.filter(job =>
          state.filters.tags.some(tag => job.tags.includes(tag))
        );
      }

      // Sort jobs
      switch (state.sortBy) {
        case 'salary':
          filtered.sort((a, b) => b.salaryRange.max - a.salaryRange.max);
          break;
        case 'title':
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'company':
          filtered.sort((a, b) => a.company.localeCompare(b.company));
          break;
        default: // latest
          filtered.sort((a, b) => {
            const aDays = parseInt(a.postedTime.split(' ')[0]);
            const bDays = parseInt(b.postedTime.split(' ')[0]);
            return aDays - bDays;
          });
      }

      state.filteredJobs = filtered;
      state.pagination.totalPages = Math.ceil(filtered.length / state.pagination.jobsPerPage);
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredJobs = state.jobs;
      state.pagination.currentPage = 1;
      state.pagination.totalPages = Math.ceil(state.jobs.length / state.pagination.jobsPerPage);
    }
  }
});

export const {
  setSelectedJob,
  setFilters,
  setSortBy,
  setCurrentPage,
  filterJobs,
  clearFilters
} = jobSlice.actions;

export default jobSlice.reducer; 