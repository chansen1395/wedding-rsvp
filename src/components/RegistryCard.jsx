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
        Please do not feel constrained by our registry;
        <br></br>
        any and all gifts are very much appreciated!
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550991665?eventType=Wedding">Bed Bath & Beyond</Button>
      <br></br>
      <Button size="small" href="https://www.amazon.com/wedding/esperanza-zavala-connor-hansen--june-2022/registry/2FTU1HBPN6HA0?fbclid=IwAR3wkwD1RA8T0b1j8PmKPDpPeUVX1OI3mU6BVg3Js1rJ55o7Uz7rH55t7os">Amazon</Button>
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