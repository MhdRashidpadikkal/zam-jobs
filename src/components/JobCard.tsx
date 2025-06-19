import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import {
  Business,
  LocationOn,
  Work,
  Schedule
} from '@mui/icons-material';
import { Job } from '../types/job';

interface JobCardProps {
  job: Job;
  onViewDetails: (job: Job) => void;
  viewMode?: 'card' | 'list';
}

const JobCard: React.FC<JobCardProps> = ({ job, onViewDetails, viewMode = 'card' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // List view component
  if (viewMode === 'list') {
    return (
      <Paper
        sx={{
          width: '100%',
          p: isMobile ? 2 : 3,
          mb: 2,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease-in-out',
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
          border: `1px solid ${theme.palette.divider}`,
          '&:hover': {
            transform: isMobile ? 'translateY(-2px)' : 'translateX(4px)',
            boxShadow: theme.shadows[4],
            background: `linear-gradient(135deg, ${theme.palette.primary[50]} 0%, ${theme.palette.background.paper} 100%)`,
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        {/* Left Section - Job Info */}
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center', 
          gap: isMobile ? 2 : 3 
        }}>
          {/* Company Logo Placeholder */}
          <Box
            sx={{
              width: isMobile ? '100%' : 60,
              height: isMobile ? 50 : 60,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 600,
              fontSize: isMobile ? '1rem' : '1.2rem',
              alignSelf: isMobile ? 'flex-start' : 'center',
            }}
          >
            {job.company.charAt(0).toUpperCase()}
          </Box>

          {/* Job Details */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 0.5,
                fontSize: isMobile ? '1rem' : '1.1rem',
              }}
            >
              {job.title}
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center', 
              gap: isMobile ? 1 : 2, 
              mb: 0.5 
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Business sx={{ fontSize: 16, mr: 0.5, color: theme.palette.text.secondary }} />
                <Typography variant="body2" color="text.secondary">
                  {job.company}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ fontSize: 16, mr: 0.5, color: theme.palette.text.secondary }} />
                <Typography variant="body2" color="text.secondary">
                  {job.location}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center', 
              gap: isMobile ? 1 : 2 
            }}>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  label={job.jobType}
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.success[100],
                    color: theme.palette.success[700],
                    fontWeight: 500,
                    fontSize: isMobile ? '0.7rem' : '0.75rem',
                  }}
                />
                <Chip
                  label={job.experienceLevel}
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.info[100],
                    color: theme.palette.info[700],
                    fontWeight: 500,
                    fontSize: isMobile ? '0.7rem' : '0.75rem',
                  }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: isMobile ? '0.8rem' : '0.875rem' }}>
                Posted {job.postedTime}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Section - Tags and Button */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center', 
          gap: isMobile ? 2 : 2,
          mt: isMobile ? 2 : 0
        }}>
          {/* Tags */}
          <Box sx={{ 
            display: 'flex', 
            gap: 1, 
            flexWrap: 'wrap', 
            maxWidth: isMobile ? '100%' : 200,
            justifyContent: isMobile ? 'flex-start' : 'flex-end'
          }}>
            {job.tags.slice(0, isMobile ? 3 : 2).map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: theme.palette.warning[100],
                  color: theme.palette.warning[700],
                  fontWeight: 500,
                  fontSize: isMobile ? '0.7rem' : '0.75rem',
                }}
              />
            ))}
            {job.tags.length > (isMobile ? 3 : 2) && (
              <Chip
                label={`+${job.tags.length - (isMobile ? 3 : 2)}`}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: theme.palette.grey[400],
                  color: theme.palette.text.secondary,
                  fontSize: isMobile ? '0.7rem' : '0.75rem',
                }}
              />
            )}
          </Box>

          {/* View Details Button */}
          <Button
            variant="contained"
            onClick={() => onViewDetails(job)}
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: 'white',
              fontWeight: 600,
              textTransform: 'none',
              px: isMobile ? 2 : 3,
              py: isMobile ? 1.5 : 1,
              fontSize: isMobile ? '0.875rem' : '1rem',
              '&:hover': {
                background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                transform: 'translateY(-1px)',
                boxShadow: theme.shadows[4],
              },
            }}
          >
            View Details
          </Button>
        </Box>
      </Paper>
    );
  }

  // Card view component (existing)
  return (
    <Card
      sx={{
        width: '100%',
        minWidth: '280px',
        maxWidth: '100%',
        height: '450px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[8],
          background: `linear-gradient(135deg, ${theme.palette.primary[50]} 0%, ${theme.palette.background.paper} 100%)`,
        },
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <CardContent sx={{ 
        flexGrow: 1, 
        p: 3, 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* Header Section - Fixed Height */}
        <Box sx={{ height: '120px', mb: 2 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 1,
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              lineHeight: 1.3,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {job.title}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Business sx={{ fontSize: 16, mr: 1, color: theme.palette.text.secondary }} />
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {job.company}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOn sx={{ fontSize: 16, mr: 1, color: theme.palette.text.secondary }} />
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {job.location}
            </Typography>
          </Box>
        </Box>

        {/* Job Type Section - Fixed Height */}
        <Box sx={{ height: '40px', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Work sx={{ fontSize: 16, mr: 1, color: theme.palette.text.secondary }} />
            <Typography variant="body2" color="text.secondary">
              {job.jobType}
            </Typography>
          </Box>
        </Box>

        {/* Posted Time Section - Fixed Height */}
        <Box sx={{ height: '40px', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Schedule sx={{ fontSize: 16, mr: 1, color: theme.palette.text.secondary }} />
            <Typography variant="body2" color="text.secondary">
              Posted {job.postedTime}
            </Typography>
          </Box>
        </Box>

        {/* Experience & Category Section - Fixed Height */}
        <Box sx={{ height: '60px', mb: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Experience: {job.experienceLevel}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {job.category}
          </Typography>
        </Box>

        {/* Tags Section - Fixed Height */}
        <Box sx={{ height: '80px', mb: 2, overflow: 'hidden' }}>
          {job.tags.slice(0, 3).map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            />
          ))}
          {job.tags.length > 3 && (
            <Chip
              label={`+${job.tags.length - 3} more`}
              size="small"
              variant="outlined"
              sx={{ mb: 1 }}
            />
          )}
        </Box>

        {/* Button Section - Fixed at Bottom */}
        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => onViewDetails(job)}
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: 'white',
              py: 1.5,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                transform: 'translateY(-1px)',
                boxShadow: theme.shadows[4],
              },
            }}
          >
            View Job Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard; 