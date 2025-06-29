export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  postedTime: string;
  tags: string[];
  category: string;
  experienceLevel: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  overview: {
    jobTitle: string;
    company: string;
    category: string;
    jobType: string;
    experienceLevel: string;
    location: string;
    estimatedSalary: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface JobFilters {
  search: string;
  location: string;
  category: string;
  jobType: string;
  experienceLevel: string;
  datePosted: string;
  salaryRange: [number, number];
  tags: string[];
}

export interface JobState {
  jobs: Job[];
  filteredJobs: Job[];
  selectedJob: Job | null;
  filters: JobFilters;
  pagination: {
    currentPage: number;
    jobsPerPage: number;
    totalPages: number;
  };
  sortBy: 'latest' | 'salary' | 'title' | 'company';
  loading: boolean;
  error: string | null;
} 