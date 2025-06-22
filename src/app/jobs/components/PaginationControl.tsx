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
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface PaginationControlProps {
  totalPages: number;
}

const PaginationControl: React.FC<PaginationControlProps> = ({ totalPages }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(pathname + '?' + params.toString());
  };

  if (totalPages <= 1) {
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
        count={totalPages}
        page={currentPage}
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