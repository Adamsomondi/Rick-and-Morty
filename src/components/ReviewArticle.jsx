import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Avatar, Paper, Divider, CircularProgress } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// Importing assets (the author's image)
import authorImage from '../assets/WhatsApp Image 2025-04-02 at 01.54.59_7d9a29f7.jpg';

function ReviewArticle() {
  const [episodeData, setEpisodeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEpisodeData() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/episode/1');
        if (!response.ok) {
          throw new Error('Error fetching episode data');
        }
        const data = await response.json();
        setEpisodeData(data);
      } catch (error) {
        console.error('Error fetching episode:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEpisodeData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Article 1 */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
              borderRadius: '16px', // Rounded corners
            }}
          >
            {/* Author Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar src={authorImage} alt="Author" sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                  Adams
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Programmer & Rick and Morty Fans
                </Typography>
              </Box>
            </Box>
            
            <Divider sx={{ my: 2 }} />

            {/* Article Title */}
            <Typography variant="h4" component="h1" color="dark-grey" sx={{ fontWeight: 700 }}>
              Rick Sanchez and the Art of Not Giving a F***
            </Typography>

            {/* Article Content */}
            <Typography variant="body1" color="textSecondary">
              Fucked-up and absurd world of Rick and Morty—a show 
              that slaps you in the goddamn face with a multiversal wrecking ball. 
              This ain't your Saturday morning cartoon.
              You ever seen a cartoon ask you if free will even fucking matters?
              You ever seen a grandpa kill a room full of people and not even 
              blink because “that’s just how the universe works”?! 
              No? Well, strap the fuck in.
            </Typography>
          </Paper>
        </Grid>

        {/* Article 2 */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
              borderRadius: '16px', // Rounded corners
            }}
          >
            {/* Author Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar src={authorImage} alt="Author" sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                  Adams
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Programmer & Rick and Morty Fans
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* article title */}
            <Typography variant="h4" component="h1" color="dark-grey" sx={{ fontWeight: 700 }}>
              C-137 love story: as messed up as our dna
            </Typography>

            {/* article content */}
            <Typography variant="body1" color="textSecondary">
              And don’t even think about getting some emotional redemption here. 
              In Rick’s world, people die. Friends die. Family dies. And when they 
              do, it’s with a smile on his face, a drink in his hand, and a sarcastic 
              quip to bury the whole goddamn thing under. You can try to make sense of it, 
              but trust me, you’re not gonna find any answers.
              It’s all just one big bloody mess and 200% more fuckery.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ReviewArticle;