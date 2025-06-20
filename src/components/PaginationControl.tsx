import React from 'react';
import {
  Box,
  Pagination,
  PaginationItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../store/slices/hooks';
import { setCurrentPage } from '../store/slices/jobSlice';

const PaginationControl: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();
  const { pagination } = useAppSelector((state) => state.jobs);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setCurrentPage(page));
  };

  if (pagination.totalPages <= 1) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
        px: 2,
      }}
    >
      <Pagination
        count={pagination.totalPages}
        page={pagination.currentPage}
        onChange={handlePageChange}
        size={isMobile ? 'small' : 'medium'}
        showFirstButton
        showLastButton
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: KeyboardArrowLeft,
              next: KeyboardArrowRight,
            }}
            {...item}
          />
        )}
        sx={{
          '& .MuiPaginationItem-root': {
            borderRadius: 2,
            fontWeight: 500,
          },
          '& .Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          },
        }}
      />
    </Box>
  );
};

export default PaginationControl; 