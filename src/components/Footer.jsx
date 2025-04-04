import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';

function Footer() {
  const [showTerms, setShowTerms] = useState(false);

  function handleShowTermsSummary() {
    setShowTerms(!showTerms);
  }
  return (
    <Paper 
      component="footer" 
      elevation={3} 
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800]
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Privacy And Conditions (Or Whatever...)
          </Typography>
          
          <Typography variant="body2" color="text.secondary" paragraph>
            &copy;2025 Rick & Morty @Adams, LLC. All rights reserved. Unless you’re a clone. In that case, we’ll have to talk.
          </Typography>
          
          <Button 
            variant="outlined" 
            size="small"
            onClick={handleShowTermsSummary}
            sx={{ mb: 2 }}
          >
            {showTerms ? 'Hide Terms of Use Summary' : 'Show Terms of Use Summary (It’s Not That Bad)'}
          </Button>
          
          <Collapse in={showTerms}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              By reading this, you acknowledge that you’ll probably end up in a dimension
               where things are a lot weirder than they seem.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              You agree to never ask "Why are we watching this show?" again. If you do,
               we’ll send you to a reality where the show never existed.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              Also, no refunds. We’re not going to the interdimensional council for that.
            </Typography>
          </Collapse>
        </Box>
      </Container>
    </Paper>
  );
}
export default Footer;
