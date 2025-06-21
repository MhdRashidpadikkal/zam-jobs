import React from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { categories, jobTypes, experienceLevels, locations } from '../../../data/mockJobs';

interface JobFilterSidebarProps {
  open?: boolean;
  onClose?: () => void;
}

const JobFilterSidebar: React.FC<JobFilterSidebarProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    // Reset page to 1 when filters change
    params.set('page', '1');
    router.push(pathname + '?' + params.toString());
  };

  const handleClearFilters = () => {
    router.push(pathname);
  };

  const filterContent = (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Filters
        </Typography>
        {isMobile && (
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        )}
      </Box>

      {/* Location */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
          Location
        </Typography>
        <FormControl fullWidth size="small">
          <InputLabel>Select Location</InputLabel>
          <Select
            value={searchParams.get('location') || ''}
            label="Select Location"
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <MenuItem value="">All Locations</MenuItem>
            {locations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Category */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
          Category
        </Typography>
        {categories.map((category) => {
          const currentCategory = searchParams.get('category');
          const isSelected = currentCategory === category.name;
          return (
            <Box
              key={category.name}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1,
                cursor: 'pointer',
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
                backgroundColor: isSelected ? theme.palette.primary.light : 'transparent',
              }}
              onClick={() => handleFilterChange('category', isSelected ? '' : category.name)}
            >
              <Typography variant="body2">{category.name}</Typography>
              <Chip
                label={category.count}
                size="small"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
              />
            </Box>
          );
        })}
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Job Type */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
          Job Type
        </Typography>
        <FormControl fullWidth size="small">
          <InputLabel>Select Job Type</InputLabel>
          <Select
            value={searchParams.get('jobType') || ''}
            label="Select Job Type"
            onChange={(e) => handleFilterChange('jobType', e.target.value)}
          >
            <MenuItem value="">All Types</MenuItem>
            {jobTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Experience Level */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
          Experience Level
        </Typography>
        <FormControl fullWidth size="small">
          <InputLabel>Select Experience</InputLabel>
          <Select
            value={searchParams.get('experienceLevel') || ''}
            label="Select Experience"
            onChange={(e) => handleFilterChange('experienceLevel', e.target.value)}
          >
            <MenuItem value="">All Levels</MenuItem>
            {experienceLevels.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Clear Filters */}
      <Button
        variant="outlined"
        fullWidth
        onClick={handleClearFilters}
        sx={{ mb: 2 }}
      >
        Clear All Filters
      </Button>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        {filterContent}
      </Drawer>
    );
  }

  return (
    <Box
      sx={{
        width: 280,
        borderRight: `1px solid ${theme.palette.divider}`,
        height: '100%',
        overflowY: 'auto',
      }}
    >
      {filterContent}
    </Box>
  );
};

export default JobFilterSidebar; 