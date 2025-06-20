 'use client'


 import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  Avatar,
  Stack,
  LinearProgress,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

const AboutFirst = () => {
  return (
    <Box sx={{ bgcolor: '#DDF6F7', pt: 10, pb: 20, position: 'relative' }}>
      <Container>
        <Grid container alignItems="center" spacing={4} sx={{pt:0}}>
          {/* Text Section */}
          <Grid size={{
            xs:12, md:6
          }} >
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: '#001F3F' }}>
              Upgrade Your<br />Business Firm
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Tempora class excepturi. Earum ipsam velit ex montes, explicabo ex adipisicing labore,
              fames quibusdam praesentium, nostrud eveniet, rutrum.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button variant="contained" sx={{ bgcolor: '#00b9b3', px: 4, py: 1.5 }}>
                Discover More
              </Button>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar sx={{ bgcolor: '#fff', color: '#00b9b3', width: 40, height: 40 }}>
                  <PlayArrowIcon />
                </Avatar>
                <Typography variant="body2" fontWeight="500">Watch The Video</Typography>
              </Stack>
            </Stack>
          </Grid>
 
 
 <Grid size= {{xs:12,md:6}}  >
  <Box
    sx={{
      position: 'relative',
      width: 350,
      height: 460,
      mx: 'auto',
      
    }}
  >
    {/* Teal background shape behind */}
    <Box
      sx={{
        position: 'absolute',
        top: 133,
        left: 20,
        width: 350,
        height: 180,
        backgroundColor: '#00b9b3',
        borderRadius: 4,
        zIndex: 1,
      }}
    />
    {/* Foreground image larger and centered */}
    <Box
      component="img"
      src="/images/cover.png"
      alt="Business Team"
      sx={{
        position: 'relative',
        width: '440px',
        height: 'auto',
        right:'40px',
        top:'20px',
        
        zIndex: 2,
      }}
    />
  </Box>
</Grid>



        </Grid>

        {/* Floating Cards */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -60,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Card sx={{ width: 300, borderRadius: 4, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                We Aim To Flawless Business Growth
              </Typography>
              <Typography variant="body2" color="text.secondary">Present Growth</Typography>
              <LinearProgress variant="determinate" value={85} sx={{ my: 1 }} />
              <Typography variant="body2" color="text.secondary">Post Growth</Typography>
              <LinearProgress variant="determinate" value={70} sx={{ my: 1 }} />
            </CardContent>
          </Card>

          <Card
            sx={{
              width: 220,
              borderRadius: 4,
              boxShadow: 3,
              backgroundColor: '#1a237e',
              color: '#fff',
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Creative Team
              </Typography>
              <Stack direction="row" spacing={-1} mb={2}>
                {[...Array(4)].map((_, i) => (
                  <Avatar key={i} alt={`User ${i}`} src={`/images/avatar${i + 1}.jpg`} />
                ))}
                <Avatar sx={{ bgcolor: '#00b9b3' }}>
                  <AddIcon />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutFirst;

