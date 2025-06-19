import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
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
import { useAppDispatch, useAppSelector } from '../store/slices/hooks';
import { setFilters, filterJobs, clearFilters } from '../store/slices/jobSlice';
import { categories, jobTypes, experienceLevels, locations } from '../data/mockJobs';

interface JobFilterSidebarProps {
  open: boolean;
  onClose: () => void;
}

const JobFilterSidebar: React.FC<JobFilterSidebarProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.jobs);

  const handleFilterChange = (key: string, value: string | number | [number, number]) => {
    dispatch(setFilters({ [key]: value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  useEffect(() => {
    dispatch(filterJobs());
  }, [filters, dispatch]);

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

      {/* Search */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
          Job Title Search
        </Typography>
        <TextField
          fullWidth
          size="small"
          placeholder="Search jobs..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          sx={{ mb: 1 }}
        />
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Location */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
          Location
        </Typography>
        <FormControl fullWidth size="small">
          <InputLabel>Select Location</InputLabel>
          <Select
            value={filters.location}
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
        {categories.map((category) => (
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
              backgroundColor: filters.category === category.name ? theme.palette.primary.light : 'transparent',
            }}
            onClick={() => handleFilterChange('category', filters.category === category.name ? '' : category.name)}
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
        ))}
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
            value={filters.jobType}
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
            value={filters.experienceLevel}
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