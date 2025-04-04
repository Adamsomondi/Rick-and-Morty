/*
This component passes a props to the Character component and handles the loading state of the characters.
It fetches the data from the API and maps through the characters to display them in a grid.
*/
// Import React and necessary hooks
import { useEffect, useState } from "react";
import { Container, Grid, Typography, CircularProgress, Box } from '@mui/material';
//import the receiver component
import Character from "./character";
import backgroundImage from '../assets/shubham-dhage-t0Bv0OBQuTg-unsplash.jpg';

function List() {
  //use state to manage the state of the characters and loading
  //useEffect to fetch data from the API
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

//Handle the loading state and fetch data from the API
  //useEffect to fetch data from the API
  //  *****************************************
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const { results } = await response.json();
        setCharacters(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Fetch only once on mount

  return (
  <Container>
  <Typography 
  variant="h2" 
  component="h1" 
  align="center" 
  gutterBottom 
  color="Yellow" 
  fontWeight="bold" 
  sx={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  // This ensures the image covers the entire area
    backgroundPosition: 'center',  // Ensures the image is centered
    padding: '20px',  // Optional, to provide some padding around the text
    borderRadius: '8px'  // Optional, for rounded corners
  }}
>
  THE SHOW YOUR MOM HATES BUT YOUR DAD SECRETLY LOVES.
</Typography>

<Grid container justifyContent="center" spacing={2} mb={4} mt={2}>

  <Grid item xs={12} md={6} display="flex" justifyContent="center">
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      sx={{
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" }, // Slight zoom on hover
      }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PkZtVBNkmso?si=v-hqwI6zkyK-WLWw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: "100%" }}
      ></iframe>
    </Box>
  </Grid>
  
  <Grid item xs={12} md={6} display="flex" justifyContent="center">
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      sx={{
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qqxJHq_CSGo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: "100%" }}
      ></iframe>
    </Box>
  </Grid>

</Grid>


      <Typography variant="h3" component="h1" align="center" gutterBottom color="black" fontWeight="bold" >
      THE MULTIVERSE MOST WANTED
      </Typography>
      {loading ? (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '64vh' }}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {characters.map((character) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
              <Character
                name={character.name}
                origin={character.origin.name}
                image={character.image}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
export default List;