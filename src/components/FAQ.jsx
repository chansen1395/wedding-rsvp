import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import 524a2e from "../img524a2e.png";

export const faqCard = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        <strong>Frequently Asked Questions:</strong>
      </Typography>
      <Typography sx={{ mb: 1.5 }} variant="body2">
        <strong>Q:</strong> What are your colors?
        <br></br>
        <strong>A:</strong> Burgundy, Rose Pink, Copper Rust, & Dusty sage green
        <br></br>
        <img
          src={require("../img/542a2e.png")}
          alt="hexadecimal: #2542a2e"
          height="120"
          width="60"
        ></img>
        <img
          src={require("../img/d1b1b6.png")}
          alt="hexadecimal: #d1b1b6"
          height="120"
          width="60"
        ></img>
        <img
          src={require("../img/82454a.png")}
          alt="hexadecimal: #82454a"
          height="120"
          width="60"
        ></img>
        <img
          src={require("../img/7f8176.png")}
          alt="hexadecimal: #7f8176"
          height="120"
          width="60"
        ></img>
        <hr></hr>
        <strong>Q:</strong> What's on the menu?
        <br></br>
        <strong>A:</strong> We will be serving cookout fare, such as hamburgers,
        brats, etc. We will do our best to accommodate food allergies.
        <br></br>
        <hr></hr>
        
        <strong>Q:</strong> It's within two weeks of the wedding, and I feel
        sick. Should I still go?
        <br></br>
        <strong>A:</strong> As much as we love each and every one of you, we
        must ask you to notify us if you are ill. Please do not attend out of
        respect for the attendees who may be at risk of severe illness. We hope
        you understand.
        <br></br>
        <hr></hr>

        <strong>Q:</strong> Will the ceremony and reception be indoors?
        <br></br>
        <strong>A:</strong> Yes.
        <br></br>
        <hr></hr>

        <strong>Q:</strong> Will the wedding be viewable if I cannot attend?
        <br></br>
        <strong>A:</strong> We are working on a solution to livestream our wedding.
        <br></br>
        <hr></hr>

        <strong>Please reach out to us with any other questions!</strong>
        <br></br>
        <hr></hr>
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function FAQCard() {
  return (
    <Box sx={{ minWidth: 200 }}>
      <Card variant="outlined">{faqCard}</Card>
    </Box>
  );
}
