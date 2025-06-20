import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Business,
  LocationOn,
  Work,
  AttachMoney,
  Schedule,
  CheckCircle
} from '@mui/icons-material';
import { Job } from '../types/job';

interface JobDetailsContentProps {
  job: Job;
}

const JobDetailsContent: React.FC<JobDetailsContentProps> = ({ job }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const formatSalary = (min: number, max: number, currency: string) => {
    return `${currency}${min.toLocaleString()} - ${currency}${max.toLocaleString()}`;
  };

  return (
    <Box sx={{ flex: 1 }}>
      {/* Job Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            color: theme.palette.primary.main,
            mb: 2,
            fontSize: isMobile ? '1.75rem' : '2.125rem',
          }}
        >
          {job.title}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Business sx={{ fontSize: 20, mr: 1, color: theme.palette.text.secondary }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {job.company}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOn sx={{ fontSize: 20, mr: 1, color: theme.palette.text.secondary }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {job.location}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Work sx={{ fontSize: 20, mr: 1, color: theme.palette.text.secondary }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {job.jobType}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AttachMoney sx={{ fontSize: 20, mr: 1, color: theme.palette.text.secondary }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {formatSalary(job.salaryRange.min, job.salaryRange.max, job.salaryRange.currency)}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Schedule sx={{ fontSize: 18, mr: 1, color: theme.palette.text.secondary }} />
          <Typography variant="body1" color="text.secondary">
            Posted {job.postedTime}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {job.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="medium"
              sx={{
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Job Description */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Job Description
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7, color: theme.palette.text.primary }}>
          {job.description}
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Key Responsibilities */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Key Responsibilities
        </Typography>
        <List sx={{ pl: 0 }}>
          {job.responsibilities.map((responsibility, index) => (
            <ListItem key={index} sx={{ pl: 0, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircle sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={responsibility}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Professional Skills */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Professional Skills
        </Typography>
        <List sx={{ pl: 0 }}>
          {job.skills.map((skill, index) => (
            <ListItem key={index} sx={{ pl: 0, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircle sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={skill}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Additional Information */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Additional Information
        </Typography>
        <Box sx={{ display: 'grid', gap: 2 }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Experience Level
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {job.experienceLevel}
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Category
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {job.category}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetailsContent; 