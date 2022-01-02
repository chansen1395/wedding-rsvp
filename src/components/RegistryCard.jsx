import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const card = (
  <React.Fragment>
    <CardContent>

      <Typography variant="h5" component="div">
        Registries:
      </Typography>
      <Typography sx={{ mb: 1.5 }} variant="body2">
        Please feel free to go off-registry;
        <br></br>
        any and all gifts are very much appreciated!
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550991665?eventType=Wedding">Bed Bath & Beyond</Button>
    </CardActions>
  </React.Fragment>
);

export default function RegistryCard() {
  return (
    <Box sx={{ minWidth: 200 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}