import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Business,
  LocationOn,
  Work,
  Category,
  School,
  AttachMoney
} from '@mui/icons-material';
import { Job } from '../types/job';
import ApplyJobButton from './ApplyJobButton';

interface JobOverviewSidebarProps {
  job: Job;
}

const JobOverviewSidebar: React.FC<JobOverviewSidebarProps> = ({ job }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const overviewItems = [
    {
      icon: <Business />,
      label: 'Company',
      value: job.overview.company
    },
    {
      icon: <Category />,
      label: 'Category',
      value: job.overview.category
    },
    {
      icon: <Work />,
      label: 'Job Type',
      value: job.overview.jobType
    },
    {
      icon: <School />,
      label: 'Experience Level',
      value: job.overview.experienceLevel
    },
    {
      icon: <LocationOn />,
      label: 'Location',
      value: job.overview.location
    },
    {
      icon: <AttachMoney />,
      label: 'Estimated Salary',
      value: job.overview.estimatedSalary
    }
  ];

  return (
    <Box sx={{ width: isMobile ? '100%' : 350 }}>
      <Card sx={{ mb: 3, position: 'sticky', top: 20 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Job Overview
          </Typography>

          <Box sx={{ mb: 3 }}>
            {overviewItems.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ 
                    color: theme.palette.primary.main, 
                    mr: 1.5,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {item.icon}
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ ml: 3.5, fontWeight: 500 }}>
                  {item.value}
                </Typography>
                {index < overviewItems.length - 1 && (
                  <Divider sx={{ mt: 2 }} />
                )}
              </Box>
            ))}
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Job Tags
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {job.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Map placeholder */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Location
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: 200,
                backgroundColor: theme.palette.grey[200],
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Map View - {job.location}
              </Typography>
            </Box>
          </Box>

          <ApplyJobButton 
            jobTitle={job.title} 
            companyName={job.company} 
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobOverviewSidebar; 