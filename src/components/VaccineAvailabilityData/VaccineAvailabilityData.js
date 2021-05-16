import React, { Component } from "react";

import { Button, Grid, Container, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BootstrapTable from "react-bootstrap-table-next";

import { getVaccineDataByPin } from "../../Services/API";
import { DEWAS_PIN } from "../../Constants/Constants";
import Moment from "react-moment";

var moment = require("moment");

const styles = {
  headingText: {
    textAlign: "center",
    color: "#233e8b",
    borderBottom: "1px solid gray",
  },
  container: {
    marginTop: "50px",
  },
  tableHeader: {
    backgroundColor: "#233e8b",
    color: "white",
  },
};
class VaccineAvailabilityData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      centerData: [],
    };
  }

  componentDidMount = () => {
    let currentDate = moment(Date.now()).format("DD-MM-YY");
    getVaccineDataByPin(DEWAS_PIN, currentDate).then((data) => {
      let centersData = data.data.centers;
      let tempArr = [];

      centersData.map((_centersData) => {
        console.log(_centersData);
        _centersData.sessions.map((_sessionData) => {
          if (_sessionData.date == moment(Date.now()).format("DD-MM-Y")) {
            tempArr.push({
              centerId: _centersData.center_id,
              address: `${_centersData.address}, ${_centersData.district_name}, ${_centersData.state_name}, ${_centersData.pincode}`,
              name: _centersData.name,
              feeType: _centersData.fee_type,
              vaccineAvailable: _sessionData.available_capacity,
              minimumAge: _sessionData.min_age_limit,
              vaccineName: _sessionData.vaccine,
            });
          }
        });
      });
      console.log(tempArr);
      this.setState({
        centerData: tempArr,
      });
    });
  };

  columns = [
    {
      dataField: "name",
      text: "Center Name",
    },
    {
      dataField: "address",
      text: "Address",
    },
    {
      dataField: "feeType",
      text: "Paid/Free",
    },
    {
      dataField: "vaccineAvailable",
      text: "Vaccine Count",
    },
    {
      dataField: "vaccineName",
      text: "Vaccine Name",
    },
    {
      dataField: "minimumAge",
      text: "Age Group",
    },
  ];
  render() {
    const { classes } = this.props;
    return (
      <>
        <Container maxWidth="lg" component="main" className={classes.container}>
          <Grid container spacing={4}>
            <Grid item xs={12} justify="center" alignItems="center">
              <Typography variant="h4" className={classes.headingText}>
                Vaccine Availability -{" "}
                <Moment format="MMMM Do YYYY">
                  {<span style={{ fontWeight: "bolder" }}>Date.now()</span>}
                </Moment>
              </Typography>
              <Typography
                style={{
                  fontWeight: "bold",
                  color: "gray",
                  textAlign: "center",
                }}
              >
                NOTE:- This table will only show current date Data and
                Availablity of the center. If no data is available on COWIN
                website for the center it will not be visible here.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <BootstrapTable
                keyField="id"
                data={this.state.centerData}
                columns={this.columns}
                hover
                condensed
                headerClasses={classes.tableHeader}
                noDataIndication={() => {
                  return (
                    <span style={{ textAlign: "center" }}>
                      <Typography variant="h5" style={{ color: "#233e8b" }}>
                        No Data Found
                      </Typography>
                    </span>
                  );
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(VaccineAvailabilityData);
