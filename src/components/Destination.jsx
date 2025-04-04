import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PublicIcon from '@mui/icons-material/Public';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// Import images for each location
import location1Image from "../assets/julien-tromeur-6-adg66qleM-unsplash.jpg";
import location2Image from "../assets/michael-marais-OVqrDBM0afM-unsplash.jpg";
import location3Image from "../assets/kind-and-curious-bsSy7x3mk00-unsplash.jpg";
import location4Image from "../assets/prasongsom-punyauppa-path-YlRxQQxj6Uo-unsplash.jpg";
import location5Image from "../assets/hans-eiskonen-13sk8LUVwMg-unsplash.jpg";
import location6Image from "../assets/alejandro-mendoza-i9JXr8a-QvU-unsplash.jpg"
import location7Image from "../assets/allan-fule-tFQozP5U7NQ-unsplash.jpg";
import location8Image from "../assets/joshua-carl-AWGwBpuIpTY-unsplash.jpg";

function Destination() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/location");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { results } = await response.json();
        setLocations(results.slice(0, 8)); // Limit to 8 locations
      } catch (error) {
        console.error("Error fetching locations:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  
    fetchLocations();
  }, []);

  // Get dimension colors
  const getDimensionColor = (dimension) => {
    if (dimension.includes("C-137")) return "#ff9800"; // Orange
    if (dimension.includes("Replacement")) return "#e91e63"; // Pink
    if (dimension.includes("Cronenberg")) return "#9c27b0"; // Purple
    if (dimension.includes("Fantasy")) return "#673ab7"; // Deep Purple
    if (dimension === "unknown") return "#607d8b"; // Blue Grey
    return "#2196f3"; // Default Blue
  };

  // Get type icon
  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case "planet":
        return <PublicIcon sx={{ verticalAlign: 'bottom', mr: 0.5 }} />;
      case "space station":
        return <TravelExploreIcon sx={{ verticalAlign: 'bottom', mr: 0.5 }} />;
      default:
        return null;
    }
  };

  // Render loading skeletons
  const renderSkeletons = () => {
    return Array(20).fill().map((_, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={`skeleton-${index}`}>
        <Card 
          elevation={2}
          sx={{ 
            height: '100%',
            display: 'flex', 
            flexDirection: 'column',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
            }
          }}
        >
          <Skeleton variant="rectangular" height={160} />
          <CardContent sx={{ flexGrow: 1 }}>
            <Skeleton variant="text" height={32} width="80%" />
            <Skeleton variant="text" height={24} width="60%" sx={{ mt: 1 }} />
            <Skeleton variant="rectangular" height={30} sx={{ mt: 2, borderRadius: 1 }} />
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  // Map images array
  const locationImages = [
    location1Image,
    location2Image,
    location3Image,
    location4Image,
    location5Image,
    location6Image,
    location7Image,
    location8Image
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: '#f5f5f5'
      }}
    >
      <Container maxWidth="xl">
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            mb: { xs: 3, md: 5 },
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              backgroundColor: 'primary.main',
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)'
            }
          }}
        >
          Places Rick & Morty Can Visit
        </Typography>

        {error && (
          <Box 
            sx={{ 
              textAlign: 'center',
              py: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}
          >
            <ErrorOutlineIcon color="error" sx={{ fontSize: 60 }} />
            <Typography variant="h6" color="error">
              Error loading locations: {error}
            </Typography>
          </Box>
        )}

        {loading && !error ? (
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={3}>
              {renderSkeletons()}
            </Grid>
          </Box>
        ) : !error && (
          <Grid container spacing={3}>
            {locations.map((location, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={location.id}>
                <Card 
                  elevation={2}
                  sx={{ 
                    height: '100%',
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={locationImages[index]}  // Assign each location its own image
                    alt={`${location.name} location`}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant="h6" 
                      component="h3"
                      gutterBottom
                      noWrap
                      title={location.name}
                      sx={{ 
                        fontWeight: 600,
                        mb: 1,
                        color: 'text.primary'
                      }}
                    >
                      {location.name}
                    </Typography>

                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
                    >
                      {getTypeIcon(location.type)}
                      {location.type}
                    </Typography>

                    <Chip
                      label={location.dimension}
                      size="small"
                      sx={{
                        backgroundColor: getDimensionColor(location.dimension),
                        color: 'white',
                        fontWeight: 500,
                        maxWidth: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
} 

export default Destination;
