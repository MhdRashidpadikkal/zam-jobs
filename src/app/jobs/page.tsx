// import { mockJobs } from '../../data/mockJobs';
// import JobListingsClient from './components/JobListingsClient';
// import { Job } from '@/types/job';

// const applyFilters = (jobs: Job[], searchParams: { [key: string]: string | string[] | undefined }): Job[] => {
//   let filteredJobs = [...jobs];
//   const { search, location, category, jobType, experienceLevel } = searchParams;

//   if (search) {
//     const searchStr = Array.isArray(search) ? search[0] : search;
//     filteredJobs = filteredJobs.filter(job =>
//       job.title.toLowerCase().includes(searchStr.toLowerCase()) ||
//       job.company.toLowerCase().includes(searchStr.toLowerCase())
//     );
//   }

//   if (location) {
//     const locationStr = Array.isArray(location) ? location[0] : location;
//     filteredJobs = filteredJobs.filter(job =>
//       job.location.toLowerCase().includes(locationStr.toLowerCase())
//     );
//   }

//   if (category) {
//     filteredJobs = filteredJobs.filter(job => job.category === category);
//   }

//   if (jobType) {
//     filteredJobs = filteredJobs.filter(job => job.jobType === jobType);
//   }

//   if (experienceLevel) {
//     filteredJobs = filteredJobs.filter(job => job.experienceLevel === experienceLevel);
//   }

//   return filteredJobs;
// };

// const sortJobs = (jobs: Job[], sortBy: string): Job[] => {
//   switch (sortBy) {
//     case 'salary':
//       return [...jobs].sort((a, b) => b.salaryRange.max - a.salaryRange.max);
//     case 'title':
//       return [...jobs].sort((a, b) => a.title.localeCompare(b.title));
//     case 'company':
//       return [...jobs].sort((a, b) => a.company.localeCompare(b.company));
//     default: // latest
//       return [...jobs].sort((a, b) => {
//         const aDays = parseInt(a.postedTime.split(' ')[0]);
//         const bDays = parseInt(b.postedTime.split(' ')[0]);
//         return aDays - bDays;
//       });
//   }
// };

// export default async function JobListingsPage({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) {
//   const allJobs = mockJobs;
//   const resolvedSearchParams = await searchParams;

//   const filteredJobs = applyFilters(allJobs, resolvedSearchParams);
//   const sortedJobs = sortJobs(filteredJobs, resolvedSearchParams.sortBy as string);

//   return <JobListingsClient jobs={sortedJobs} />;
// }


// app/jobs/page.tsx (or app/page.tsx)
import { supabase } from '@/lib/supabaseClient';
import JobListingsClient from './components/JobListingsClient'; // Assuming this remains a client component for UI interactions
import { Job } from '@/types/job'; // Ensure this path is correct for your Job interface

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
      job.description.toLowerCase().includes(searchStr.toLowerCase()) || // Often include description in search
      job.skills.some(skill => skill.toLowerCase().includes(searchStr.toLowerCase())) // Search skills
    );
  }

  if (location) {
    const locationStr = Array.isArray(location) ? location[0] : location;
    filteredJobs = filteredJobs.filter(job =>
      job.location.toLowerCase().includes(locationStr.toLowerCase())
    );
  }

  if (category) {
    // Ensure category is a string before comparison
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
  if (!sortBy) return jobs; // Return unsorted if no sortBy parameter

  switch (sortBy) {
    case 'salary':
      // Sort by max salary descending
      return [...jobs].sort((a, b) => b.salaryRange.max - a.salaryRange.max);
    case 'title':
      // Sort by title alphabetically
      return [...jobs].sort((a, b) => a.title.localeCompare(b.title));
    case 'company':
      // Sort by company alphabetically
      return [...jobs].sort((a, b) => a.company.localeCompare(b.company));
    case 'latest': // Default or explicit 'latest' sort
    default:
      // Sort by posted_time (newest first). Supabase 'posted_time' is a timestamp.
      // Convert to Date objects for proper comparison.
      return [...jobs].sort((a, b) => {
        const dateA = new Date(a.postedTime).getTime();
        const dateB = new Date(b.postedTime).getTime();
        return dateB - dateA; // Descending order (newest first)
      });
  }
};

export default async function JobListingsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let allJobs: Job[] = [];
  let fetchError: string | null = null;

  try {
    const { data, error: supabaseError } = await supabase
      .from('jobs')
      .select('*') // Selects all columns from the Supabase table
      .order('posted_time', { ascending: false }); // Order by newest jobs first

    if (supabaseError) {
      throw supabaseError;
    }

    if (data) {
      // Transform the fetched Supabase data into your frontend Job interface format
      allJobs = data.map(transformSupabaseJobToFrontendJob);
    }
  } catch (err: any) {
    console.error('Error fetching jobs from Supabase:', err.message);
    fetchError = err.message;
    // In a production app, consider using an error.js boundary here
  }

  if (fetchError) {
    return <div>Error loading jobs: {fetchError}</div>;
  }
  
  const filteredJobs = applyFilters(allJobs, searchParams);
  const sortedJobs = sortJobs(filteredJobs, searchParams.sortBy as string | undefined);

  return <JobListingsClient jobs={sortedJobs} />;
}