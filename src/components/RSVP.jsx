import React, { useRef } from "react";
import emailjs from "emailjs-com";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RegistryCard from "./RegistryCard";
import MuiImageSlider from "mui-image-slider";

import useStyles from "../config/theme.signinup";
// import { Checkbox } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import beach from "../img/beach.jpg";
import drivein from "../img/drivein.jpg";
import proposal from "../img/proposal.jpg";
import hawaii from "../img/hawaii.jpg";
import multnomah from "../img/multnomah.jpg";
import gardens from "../img/gardens.jpg";
import hiking from "../img/hiking.png";
import mirrorlake from "../img/mirrorlake.jpg";

// require('dotenv').config();

// export const RSVP = () => {
const RSVP = () => {
  const classes = useStyles();
  const form = useRef();
  const images = [
    proposal,
    hawaii,
    beach,
    gardens,
    mirrorlake,
    drivein,
    multnomah,
    hiking,
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    if (process.env.REACT_APP_ACCESS_CODE === form.current.access_code.value) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE,
          process.env.REACT_APP_TEMPLATE,
          form.current,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      // then navigate to a thank you page with registry links.
      e.target.reset();
      alert(
        "Thank you for your RSVP! You may close this window or explore the photos/registry."
      );
    } else {
      alert("Please check your access code and inputs before trying again.");
      // e.target.reset();
    }
  };

  // const images = [icestorm, wildfires, rainbow];
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            June 4th, 2022
            <br></br>
            RSVP - Esperanza and Connor's Wedding
          </Typography>
          <form
            // className={classes.form}
            // noValidate
            ref={form}
            onSubmit={sendEmail}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Access Code from invitation (case sensitive):"
              name="access_code"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Your Name:"
              name="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              placeholder="your-email@address.com"
              name="email"
              autoFocus
            />

            <TextField
              type="number"
              step={1}
              min={1}
              max={5}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Including yourself/selves, total number attending?"
              name="group_size"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              multiline
              rows={5}
              fullWidth
              name="attendees"
              label="Names of all attendees?"
              type="textarea"
            />
            <br></br>
            <br></br>

            <RadioGroup
              aria-label="attendance"
              // defaultValue="yes"
              name="will_attend"
              required
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Can attend"
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="Cannot attend"
              />
            </RadioGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              RSVP!
            </Button>
          </form>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <CssBaseline />
        <Grid item xs={12} sm={12} md={12}>
          <RegistryCard />
          <MuiImageSlider autoPlay fitToImageHeight={true} images={images} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RSVP;
