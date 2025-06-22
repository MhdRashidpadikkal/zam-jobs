import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const SortDropdown: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get('sortBy') || 'latest';

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('sortBy', value);
    } else {
      params.delete('sortBy');
    }
    router.push(pathname + '?' + params.toString());
  };

  return (
    <FormControl size={isMobile ? 'small' : 'medium'} sx={{ minWidth: isMobile ? 120 : 150 }}>
      <InputLabel>Sort by</InputLabel>
      <Select
        value={sortBy}
        label="Sort by"
        onChange={(e) => handleSortChange(e.target.value)}
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