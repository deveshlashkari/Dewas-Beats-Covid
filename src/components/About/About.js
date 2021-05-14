import React, { Component } from "react";

import { Grid, Container, Typography, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";

import Header from "../Header";

const styles = {
  primaryTextColor: {
    color: "#233e8b",
  },
  anchorDecoration: {
    textDecoration: "none",
    color: "#233e8b",
  },
  icon: {
    color: "#233e8b",
  },
};

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Header backArrow={true} />
        <Container maxWidth="lg" component="main" style={{ marginTop: "5%" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.primaryTextColor}>
                Sources
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ul>
                <li className={classes.primaryTextColor}>
                  <a
                    href="https://github.com/covid19india"
                    target="_blank"
                    className={classes.anchorDecoration}
                  >
                    COVID19INDIA
                  </a>
                </li>
                <li className={classes.primaryTextColor}>
                  <a
                    href="https://apisetu.gov.in/public/marketplace/api/cowin"
                    target="_blank"
                    className={classes.anchorDecoration}
                  >
                    API SETU
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.primaryTextColor}>
                About the developer
              </Typography>
              <Typography
                style={{ fontSize: "18px", color: "gray", marginTop: "10px" }}
              >
                You can connect with me on any of the social media links below -{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="row">
                <Grid item>
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/deveshlashkari/",
                        "blank"
                      )
                    }
                  >
                    <LinkedInIcon className={classes.icon} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://www.twitter.com/devesh_lashkari/",
                        "blank"
                      )
                    }
                  >
                    <TwitterIcon className={classes.icon} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={() =>
                      window.open("https://deveshlashkari.github.io/", "blank")
                    }
                  >
                    <LanguageIcon className={classes.icon} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.primaryTextColor}>
                If you want to contribute
              </Typography>
              <IconButton
                style={{ marginTop: "10px" }}
                onClick={() =>
                  window.open(
                    "https://github.com/deveshlashkari/Dewas-Beats-Covid",
                    "blank"
                  )
                }
              >
                <GitHubIcon className={classes.icon} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(About);
