import React from 'react';
//error handling for props
import PropTypes from 'prop-types';
// Material UI imports
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function Character({ name, image, origin }) {
  return (
    <Card sx={{ maxWidth: 345, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Origin: {origin || "Unknown"}
        </Typography>
      </CardContent>
    </Card>
  );
}
Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  origin: PropTypes.string,
};

Character.defaultProps = {
  origin: 'Unknown',
};

export default Character;