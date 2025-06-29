// app/jobs/page.tsx (or app/page.tsx)
import { supabase } from '@/lib/supabaseClient';
import JobListingsClient from './components/JobListingsClient';
import { Job } from '@/types/job';

// Define the type for data directly from Supabase to help with transformation
interface SupabaseJobData {
  id: string; // UUID from Supabase
  created_at: string; // timestamp with time zone
  title: string;
  company: string;
  location: string;
  job_type: string; // From Supabase, will be jobType in frontend
  min_salary: number; // From Supabase, will be part of salaryRange
  max_salary: number; // From Supabase, will be part of salaryRange
  currency: string;
  posted_time: string; // From Supabase, will be part of frontend postedTime
  tags: string[];
  category: string;
  experience_level: string; // From Supabase, will be experienceLevel
  description: string;
  responsibilities: string[];
  skills: string[];
  overview: {
    jobTitle: string;
  };
}

// Function to transform data from Supabase format to your frontend Job interface
const transformSupabaseJobToFrontendJob = (supabaseJob: SupabaseJobData): Job => {
  return {
    id: supabaseJob.id,
    title: supabaseJob.title,
    company: supabaseJob.company,
    location: supabaseJob.location,
    jobType: supabaseJob.job_type, // Transform job_type to jobType
    salaryRange: {
      min: supabaseJob.min_salary,
      max: supabaseJob.max_salary,
      currency: supabaseJob.currency,
    },
    postedTime: supabaseJob.posted_time, // Keep as string (ISO format) for Date object creation in sort
    tags: supabaseJob.tags,
    category: supabaseJob.category,
    experienceLevel: supabaseJob.experience_level, // Transform experience_level
    description: supabaseJob.description,
    responsibilities: supabaseJob.responsibilities,
    skills: supabaseJob.skills,
    overview: {
      jobTitle: supabaseJob.title,
      company: supabaseJob.company,
      category: supabaseJob.category,
      jobType: supabaseJob.job_type,
      experienceLevel: supabaseJob.experience_level,
      location: supabaseJob.location,
      estimatedSalary: `${supabaseJob.min_salary}-${supabaseJob.max_salary} ${supabaseJob.currency}`
    }
  };
};

const applyFilters = (jobs: Job[], searchParams: { [key: string]: string | string[] | undefined }): Job[] => {
  let filteredJobs = [...jobs];
  const { search, location, category, jobType, experienceLevel } = searchParams;

  if (search) {
    const searchStr = Array.isArray(search) ? search[0] : search;
    filteredJobs = filteredJobs.filter(job =>
      job.title.toLowerCase().includes(searchStr.toLowerCase()) ||
      job.company.toLowerCase().includes(searchStr.toLowerCase()) ||
      job.description.toLowerCase().includes(searchStr.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchStr.toLowerCase()))
    );
  }

  if (location) {
    const locationStr = Array.isArray(location) ? location[0] : location;
    filteredJobs = filteredJobs.filter(job =>
      job.location.toLowerCase().includes(locationStr.toLowerCase())
    );
  }

  if (category) {
    const categoryStr = Array.isArray(category) ? category[0] : category;
    filteredJobs = filteredJobs.filter(job => job.category === categoryStr);
  }

  if (jobType) {
    const jobTypeStr = Array.isArray(jobType) ? jobType[0] : jobType;
    filteredJobs = filteredJobs.filter(job => job.jobType === jobTypeStr);
  }

  if (experienceLevel) {
    const experienceLevelStr = Array.isArray(experienceLevel) ? experienceLevel[0] : experienceLevel;
    filteredJobs = filteredJobs.filter(job => job.experienceLevel === experienceLevelStr);
  }

  return filteredJobs;
};

const sortJobs = (jobs: Job[], sortBy: string | undefined): Job[] => {
  if (!sortBy) return jobs;

  switch (sortBy) {
    case 'salary':
      return [...jobs].sort((a, b) => b.salaryRange.max - a.salaryRange.max);
    case 'title':
      return [...jobs].sort((a, b) => a.title.localeCompare(b.title));
    case 'company':
      return [...jobs].sort((a, b) => a.company.localeCompare(b.company));
    case 'latest':
    default:
      return [...jobs].sort((a, b) => {
        const dateA = new Date(a.postedTime).getTime();
        const dateB = new Date(b.postedTime).getTime();
        return dateB - dateA;
      });
  }
};

// **HERE'S THE CRITICAL CHANGE**
interface JobListingsPageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>; // searchParams itself is a Promise
}

export default async function JobListingsPage({
  searchParams,
}: JobListingsPageProps) {
  let allJobs: Job[] = [];
  let fetchError: string | null = null;

  // Await searchParams before using it
  const resolvedSearchParams = searchParams ? await searchParams : {}; // Await the promise

  try {
    const { data, error: supabaseError } = await supabase
      .from('jobs')
      .select('*')
      .eq('status', 'active')
      .order('posted_time', { ascending: false });

    if (supabaseError) {
      throw supabaseError;
    }

    if (data) {
      allJobs = data.map(transformSupabaseJobToFrontendJob);
    }
  } catch (err: unknown) {
    console.error('Error fetching jobs from Supabase:', (err as Error).message);
    fetchError = (err as Error).message;
  }

  if (fetchError) {
    return <div>Error loading jobs: {fetchError}</div>;
  }

  // Use the resolved searchParams for filtering and sorting
  const filteredJobs = applyFilters(allJobs, resolvedSearchParams);
  const sortedJobs = sortJobs(filteredJobs, resolvedSearchParams.sortBy as string | undefined);

  return <JobListingsClient jobs={sortedJobs} />;
}