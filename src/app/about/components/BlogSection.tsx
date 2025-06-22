 



import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Link,
} from '@mui/material';



const BlogSection = () => {
  const blogs = [
  {
    title: 'Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024',
    date: '30 March 2025',
    tag: 'News',
    image: '/images/environ.jpg',
  },
  {
    title: 'How To Avoid The Top Six Most Common Job Interview Mistakes',
    date: '30 March 2025',
    tag: 'Blog',
    image: '/images/inter.jpg',
  },
];
  return (
    <Box sx={{ py: 10, px: 2, textAlign: 'center' }}>
      
        <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                      fontWeight: 700,
                      color: '#1a202c',
                      mb: 3,
                      lineHeight: 1.2,
                    }}
                  >
                    News And{' '}
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                     
                    >
                      Blog
                    </Box>
                  </Typography>
       
       <Typography
                          variant="h6"
                          sx={{
                            color: '#64748b',
                            maxWidth: '48rem',
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: '1.25rem',
                            mb:3,
                          }}
                        >
                             Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique 
                          
                        </Typography>

      <Grid container spacing={4} justifyContent="center">
        {blogs.map((blog, index) => (
          
         <Grid key={index} size ={{xs:12,sm:6,md:5.5}}>
           
            <Card
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                textAlign: 'left',
                boxShadow: 3,
                height: '100%',
              }}>
            
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt={blog.title}
                  sx={{
                    height: { xs: 200, sm: 220, md: 250 },
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Chip
                  label={blog.tag}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    bgcolor: blog.tag === 'News' ? 'primary.main' : 'success.main',
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                />
              </Box>
              <CardContent>
                <Typography variant="caption" color="text.secondary" gutterBottom>
                  {blog.date}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  gutterBottom
                  sx={{
                    lineClamp: 2,
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {blog.title}
                </Typography>
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    fontWeight: 'bold',
                    color: 'success.main',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;

