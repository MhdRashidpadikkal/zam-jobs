 



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
    date: '30 March 2024',
    tag: 'News',
    image: '/images/environ.jpg',
  },
  {
    title: 'How To Avoid The Top Six Most Common Job Interview Mistakes',
    date: '30 March 2024',
    tag: 'Blog',
    image: '/images/inter.jpg',
  },
];
  return (
    <Box sx={{ py: 10, px: 2, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        News and Blog
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={6}>
        Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {blogs.map((blog, index) => (
          // <Grid item key={index} xs={12} sm={6} md={5.5}>
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

