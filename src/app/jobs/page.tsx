import { mockJobs } from '../../data/mockJobs';
import JobListingsClient from './components/JobListingsClient';
import { Job } from '@/types/job';

const applyFilters = (jobs: Job[], searchParams: any): Job[] => {
  let filteredJobs = [...jobs];
  const { search, location, category, jobType, experienceLevel } = searchParams;

  if (search) {
    filteredJobs = filteredJobs.filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (location) {
    filteredJobs = filteredJobs.filter(job =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (category) {
    filteredJobs = filteredJobs.filter(job => job.category === category);
  }

  if (jobType) {
    filteredJobs = filteredJobs.filter(job => job.jobType === jobType);
  }

  if (experienceLevel) {
    filteredJobs = filteredJobs.filter(job => job.experienceLevel === experienceLevel);
  }

  return filteredJobs;
};

const sortJobs = (jobs: Job[], sortBy: string): Job[] => {
  switch (sortBy) {
    case 'salary':
      return [...jobs].sort((a, b) => b.salaryRange.max - a.salaryRange.max);
    case 'title':
      return [...jobs].sort((a, b) => a.title.localeCompare(b.title));
    case 'company':
      return [...jobs].sort((a, b) => a.company.localeCompare(b.company));
    default: // latest
      return [...jobs].sort((a, b) => {
        const aDays = parseInt(a.postedTime.split(' ')[0]);
        const bDays = parseInt(b.postedTime.split(' ')[0]);
        return aDays - bDays;
      });
  }
};

export default async function JobListingsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const allJobs = mockJobs;
  const resolvedSearchParams = await searchParams;

  const filteredJobs = applyFilters(allJobs, resolvedSearchParams);
  const sortedJobs = sortJobs(filteredJobs, resolvedSearchParams.sortBy as string);

  return <JobListingsClient jobs={sortedJobs} />;
}
