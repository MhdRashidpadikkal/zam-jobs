import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'New York, NY',
    jobType: 'Full-time',
    salaryRange: {
      min: 80000,
      max: 120000,
      currency: 'USD'
    },
    postedTime: '2 days ago',
    tags: ['React', 'TypeScript', 'Next.js', 'Full-time'],
    category: 'Technology',
    experienceLevel: 'Senior',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for building scalable web applications using modern technologies.',
    responsibilities: [
      'Develop and maintain web applications using React and TypeScript',
      'Collaborate with design and backend teams',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and technical discussions',
      'Mentor junior developers'
    ],
    skills: [
      'React.js',
      'TypeScript',
      'Next.js',
      'Redux',
      'Material-UI',
      'Git',
      'REST APIs'
    ],
    overview: {
      jobTitle: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      category: 'Technology',
      jobType: 'Full-time',
      experienceLevel: 'Senior',
      location: 'New York, NY',
      estimatedSalary: '$80,000 - $120,000'
    },
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'Creative Studios',
    location: 'San Francisco, CA',
    jobType: 'Full-time',
    salaryRange: {
      min: 70000,
      max: 100000,
      currency: 'USD'
    },
    postedTime: '1 day ago',
    tags: ['Design', 'UX', 'UI', 'Full-time'],
    category: 'Design',
    experienceLevel: 'Mid',
    description: 'Join our creative team as a UX/UI Designer. You will create beautiful and functional user experiences for our digital products.',
    responsibilities: [
      'Create user-centered designs by understanding business requirements',
      'Create user flows, wireframes, prototypes and mockups',
      'Translate requirements into style guides, design systems, design patterns and attractive user interfaces',
      'Create original graphic designs (e.g. images, sketches and tables)',
      'Identify and troubleshoot UX problems'
    ],
    skills: [
      'Figma',
      'Adobe Creative Suite',
      'Sketch',
      'Prototyping',
      'User Research',
      'Design Systems',
      'Wireframing'
    ],
    overview: {
      jobTitle: 'UX/UI Designer',
      company: 'Creative Studios',
      category: 'Design',
      jobType: 'Full-time',
      experienceLevel: 'Mid',
      location: 'San Francisco, CA',
      estimatedSalary: '$70,000 - $100,000'
    },
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    id: '3',
    title: 'Backend Engineer',
    company: 'DataFlow Inc',
    location: 'Austin, TX',
    jobType: 'Full-time',
    salaryRange: {
      min: 90000,
      max: 130000,
      currency: 'USD'
    },
    postedTime: '3 days ago',
    tags: ['Python', 'Django', 'PostgreSQL', 'Full-time'],
    category: 'Technology',
    experienceLevel: 'Senior',
    description: 'We are seeking a Backend Engineer to build scalable server-side applications and APIs.',
    responsibilities: [
      'Design and implement scalable backend services',
      'Write clean, efficient, and maintainable code',
      'Collaborate with frontend developers and DevOps teams',
      'Optimize application performance and database queries',
      'Participate in architectural decisions'
    ],
    skills: [
      'Python',
      'Django',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
      'REST APIs'
    ],
    overview: {
      jobTitle: 'Backend Engineer',
      company: 'DataFlow Inc',
      category: 'Technology',
      jobType: 'Full-time',
      experienceLevel: 'Senior',
      location: 'Austin, TX',
      estimatedSalary: '$90,000 - $130,000'
    },
    coordinates: {
      lat: 30.2672,
      lng: -97.7431
    }
  },
  {
    id: '4',
    title: 'Marketing Manager',
    company: 'Growth Marketing Co',
    location: 'Chicago, IL',
    jobType: 'Full-time',
    salaryRange: {
      min: 60000,
      max: 90000,
      currency: 'USD'
    },
    postedTime: '5 days ago',
    tags: ['Marketing', 'Digital', 'Strategy', 'Full-time'],
    category: 'Marketing',
    experienceLevel: 'Mid',
    description: 'Lead our marketing initiatives and drive growth through strategic campaigns and digital marketing efforts.',
    responsibilities: [
      'Develop and execute marketing strategies',
      'Manage digital marketing campaigns',
      'Analyze market trends and competitor activities',
      'Collaborate with sales and product teams',
      'Track and report on marketing metrics'
    ],
    skills: [
      'Digital Marketing',
      'Google Analytics',
      'Social Media Marketing',
      'Content Marketing',
      'SEO/SEM',
      'Email Marketing',
      'Marketing Automation'
    ],
    overview: {
      jobTitle: 'Marketing Manager',
      company: 'Growth Marketing Co',
      category: 'Marketing',
      jobType: 'Full-time',
      experienceLevel: 'Mid',
      location: 'Chicago, IL',
      estimatedSalary: '$60,000 - $90,000'
    },
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    }
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'Seattle, WA',
    jobType: 'Full-time',
    salaryRange: {
      min: 100000,
      max: 150000,
      currency: 'USD'
    },
    postedTime: '1 week ago',
    tags: ['Product', 'Strategy', 'Leadership', 'Full-time'],
    category: 'Product',
    experienceLevel: 'Senior',
    description: 'Drive product strategy and execution for our innovative software solutions.',
    responsibilities: [
      'Define product vision and strategy',
      'Gather and prioritize product requirements',
      'Work closely with engineering and design teams',
      'Analyze market and competitive landscape',
      'Define and track key product metrics'
    ],
    skills: [
      'Product Strategy',
      'User Research',
      'Data Analysis',
      'Agile/Scrum',
      'Product Roadmapping',
      'Stakeholder Management',
      'A/B Testing'
    ],
    overview: {
      jobTitle: 'Product Manager',
      company: 'Innovation Labs',
      category: 'Product',
      jobType: 'Full-time',
      experienceLevel: 'Senior',
      location: 'Seattle, WA',
      estimatedSalary: '$100,000 - $150,000'
    },
    coordinates: {
      lat: 47.6062,
      lng: -122.3321
    }
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'Boston, MA',
    jobType: 'Full-time',
    salaryRange: {
      min: 85000,
      max: 120000,
      currency: 'USD'
    },
    postedTime: '4 days ago',
    tags: ['Data Science', 'Machine Learning', 'Python', 'Full-time'],
    category: 'Data Science',
    experienceLevel: 'Mid',
    description: 'Join our data science team to build predictive models and extract insights from large datasets.',
    responsibilities: [
      'Develop machine learning models and algorithms',
      'Analyze large datasets to extract insights',
      'Create data visualizations and reports',
      'Collaborate with business stakeholders',
      'Stay updated with latest data science trends'
    ],
    skills: [
      'Python',
      'R',
      'Machine Learning',
      'SQL',
      'TensorFlow',
      'Pandas',
      'Data Visualization'
    ],
    overview: {
      jobTitle: 'Data Scientist',
      company: 'Analytics Pro',
      category: 'Data Science',
      jobType: 'Full-time',
      experienceLevel: 'Mid',
      location: 'Boston, MA',
      estimatedSalary: '$85,000 - $120,000'
    },
    coordinates: {
      lat: 42.3601,
      lng: -71.0589
    }
  }
];

export const categories = [
  { name: 'Technology', count: 2 },
  { name: 'Design', count: 1 },
  { name: 'Marketing', count: 1 },
  { name: 'Product', count: 1 },
  { name: 'Data Science', count: 1 }
];

export const jobTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
  'Freelance'
];

export const experienceLevels = [
  'Entry',
  'Mid',
  'Senior',
  'Lead',
  'Executive'
];

export const locations = [
  'New York, NY',
  'San Francisco, CA',
  'Austin, TX',
  'Chicago, IL',
  'Seattle, WA',
  'Boston, MA'
]; 