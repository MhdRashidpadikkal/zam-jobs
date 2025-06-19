import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  useTheme,
  useMediaQuery,
  SelectChangeEvent
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/slices/hooks';
import { setSortBy } from '../store/slices/jobSlice';

const SortDropdown: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector((state) => state.jobs);

  const handleSortChange = (value: 'latest' | 'salary' | 'title' | 'company') => {
    dispatch(setSortBy(value));
  };

  return (
    <FormControl size={isMobile ? 'small' : 'medium'} sx={{ minWidth: isMobile ? 120 : 150 }}>
      <InputLabel>Sort by</InputLabel>
      <Select
        value={sortBy}
        label="Sort by"
        onChange={(e) => handleSortChange(e.target.value as 'latest' | 'salary' | 'title' | 'company')}
      >
        <MenuItem value="latest">Latest</MenuItem>
        <MenuItem value="salary">Salary</MenuItem>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="company">Company</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropdown; 