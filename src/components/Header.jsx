import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/peter-thomas-aGMOKJ5gaQU-unsplash.jpg';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'About', href: '#About' },
    { name: 'Blog', href: '#Blog' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <Box 
          component="img" 
          src={logo} 
          alt="Rick And Morty Logo" 
          sx={{ 
            width: 35, 
            height: 35, 
            borderRadius: '50%', 
            mr: 1
          }} 
        />
        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
          Rick and Morty
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component="a" href={item.href} disablePadding>
            <ListItemText 
              primary={item.name} 
              sx={{ 
                textAlign: 'center',
                py: 1,
                '&:hover': {
                  bgcolor: 'rgba(234, 230, 223, 0.04)'
                }
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo & Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box 
            component="img" 
            src={logo} 
            alt="Rick And Morty Logo" 
            sx={{ 
              width: { xs: 35, sm: 40 }, 
              height: { xs: 35, sm: 40 }, 
              borderRadius: '50%', 
              mr: 1.5,
              objectFit: 'cover',
              border: '2px solid #f5f5f5',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }} 
          />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.2rem', sm: '1.25rem' },
              letterSpacing: '0.5px'
            }}
          >
            Rick And Morty
          </Typography>
        </Box>

        {/* Navigation - Desktop */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: { sm: 1, md: 2 } }}>
            {navItems.map((item) => (
              <Button 
                key={item.name} 
                color="inherit" 
                href={item.href}
                sx={{ 
                  fontWeight: '500',
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    bottom: '6px',
                    left: '50%',
                    background: theme.palette.primary.main,
                    transition: 'all 0.3s ease',
                  },
                  '&:hover:after': {
                    width: '80%',
                    left: '10%'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile menu icon */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            borderRadius: '0 0 0 8px'
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Header;