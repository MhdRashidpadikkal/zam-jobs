import React from 'react';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  ViewModule,
  ViewList
} from '@mui/icons-material';

interface ViewToggleProps {
  viewMode: 'card' | 'list';
  onViewChange: (viewMode: 'card' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onViewChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newViewMode: 'card' | 'list' | null,
  ) => {
    if (newViewMode !== null) {
      onViewChange(newViewMode);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={handleViewChange}
        aria-label="view mode"
        size={isMobile ? 'small' : 'medium'}
        sx={{
          '& .MuiToggleButton-root': {
            border: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.background.paper,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
              color: theme.palette.primary.main,
            },
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            },
          },
          '& .MuiToggleButton-root:first-of-type': {
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius,
          },
          '& .MuiToggleButton-root:last-of-type': {
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
          },
        }}
      >
        <ToggleButton value="card" aria-label="card view">
          <ViewModule sx={{ fontSize: isMobile ? 18 : 20 }} />
        </ToggleButton>
        <ToggleButton value="list" aria-label="list view">
          <ViewList sx={{ fontSize: isMobile ? 18 : 20 }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ViewToggle; 