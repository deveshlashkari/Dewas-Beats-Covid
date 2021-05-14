import React, { Component } from "react";

import Header from "../Header";
import DashboardStats from "../DashboardStats";
import VaccineAvailabilityData from "../VaccineAvailabilityData";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Header />
        <DashboardStats />
        <VaccineAvailabilityData />
      </>
    );
  }
}
