import React, { Component } from "react";
import {
  Grid,
  Box,
  Typography,
  CssBaseline,
  Container,
  Card,
  CardContent,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CountUp from "react-countup";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Moment from "react-moment";

import { COUNT_UP_DURATION } from "../../Constants/Constants";

import { getDistrictData } from "../../Services/API";

const styles = {
  statsText: {
    fontSize: "45px",
    color: "#233e8b",
    fontWeight: 700,
  },
  secondaryText: {
    fontSize: "15px",
    color: "gray",
  },
  testedText: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#233e8b",
  },
  confirmedCard: {
    borderBottom: "15px solid #E4313C",
  },
  activeCard: {
    borderBottom: "15px solid #4C7DFF",
  },
  recoveredCard: {
    borderBottom: "15px solid #4FA743",
  },
  deceasedCard: {
    borderBottom: "15px solid #6C757D",
  },
  confirmedText: {
    color: "#E4313C",
    fontSize: "20px",
  },
  activeText: {
    color: "#4C7DFF",
    fontSize: "20px",
  },
  recoveredText: {
    color: "#4FA743",
    fontSize: "20px",
  },
  deceasedText: {
    color: "#6C757D",
    fontSize: "20px",
  },
  confirmedCountText: {
    color: "#E4313C",
    marginBottom: "10px",
  },
  activeCountText: {
    color: "#4C7DFF",
    marginBottom: "10px",
  },
  recoverdCountText: {
    color: "#4FA743",
    marginBottom: "10px",
  },
  deceasedCountText: {
    color: "#6C757D",
    marginBottom: "10px",
  },
  testedCount: {
    fontSize: "25px",
    color: "#233e8b",
  },
};

class DashboardStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmedCount: 0,
      recoveredCount: 0,
      deceasedCount: 0,
      vaccinatedCount: 0,
      testedCount: 0,
    };
  }

  componentDidMount = () => {
    getDistrictData().then((data) => {
      try {
        let dewasData = data.data.MP.districts.Dewas.total;
        let metaData = data.data.MP.meta;
        console.log(metaData);
        this.setState({
          confirmedCount: Number(dewasData.confirmed),
          recoveredCount: Number(dewasData.recovered),
          deceasedCount: Number(dewasData.deceased),
          vaccinatedCount: Number(dewasData.vaccinated),
          testedCount: Number(dewasData.tested),
          testingLastUpdate: metaData.tested.last_updated,
          dewasDataLastUpdate: metaData.last_updated,
          testingSource: metaData.tested.source,
        });
      } catch (error) {
        console.error();
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg" component="main" style={{ marginTop: "40px" }}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={10}>
                  <Typography className={classes.statsText}>Dewas</Typography>
                  <Typography className={classes.secondaryText}>
                    Last Updated on{" "}
                    <Moment format="MMMM Do YYYY, h:mm:ss a">
                      {this.state.dewasDataLastUpdate}
                    </Moment>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography className={classes.testedText}>
                    Testing Done
                  </Typography>
                  <Typography className={classes.testedCount}>
                    <CountUp
                      start={0}
                      end={this.state.testedCount}
                      duration={COUNT_UP_DURATION}
                      seperator=","
                    />
                  </Typography>
                  <Typography className={classes.secondaryText}>
                    Last Updated on{" "}
                    <Moment format="MMMM Do YYYY, h:mm:ss a">
                      {this.state.testingLastUpdate}
                    </Moment>
                    <span>
                      <a target="_blank" href={this.state.testingSource}>
                        {" "}
                        source
                      </a>
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2} justify="center">
                    <Grid item xs={12} md={3}>
                      <Card className={classes.confirmedCard}>
                        <CardContent>
                          <Typography
                            gutterBottom
                            className={classes.confirmedText}
                          >
                            Confirmed
                          </Typography>
                          <FavoriteIcon
                            className={classes.confirmedCountText}
                          />
                          <Typography variant="h4">
                            <CountUp
                              start={0}
                              end={this.state.confirmedCount}
                              duration={COUNT_UP_DURATION}
                              seperator=","
                              className={classes.confirmedCountText}
                            />
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} md={3}>
                      <Card className={classes.recoveredCard}>
                        <CardContent>
                          <Typography
                            gutterBottom
                            className={classes.recoveredText}
                          >
                            Recovered
                          </Typography>
                          <FavoriteIcon className={classes.recoverdCountText} />
                          <Typography variant="h4">
                            <CountUp
                              start={0}
                              end={this.state.recoveredCount}
                              duration={COUNT_UP_DURATION}
                              seperator=","
                              className={classes.recoverdCountText}
                            />
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Card>
                        <CardContent className={classes.deceasedCard}>
                          <Typography
                            gutterBottom
                            className={classes.deceasedText}
                          >
                            Deceased
                          </Typography>
                          <FavoriteIcon className={classes.deceasedCountText} />
                          <Typography variant="h4">
                            <CountUp
                              start={0}
                              end={this.state.deceasedCount}
                              duration={COUNT_UP_DURATION}
                              seperator=","
                              className={classes.deceasedCountText}
                            />
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Card className={classes.activeCard}>
                        <CardContent>
                          <Typography
                            gutterBottom
                            className={classes.activeText}
                          >
                            Vaccinated
                          </Typography>
                          <FavoriteIcon className={classes.activeCountText} />
                          <Typography variant="h4">
                            <CountUp
                              start={0}
                              end={this.state.vaccinatedCount}
                              duration={COUNT_UP_DURATION}
                              seperator=","
                              className={classes.activeCountText}
                            />
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(DashboardStats);
