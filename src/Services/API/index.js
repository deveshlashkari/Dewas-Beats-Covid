import axios from "axios";

import { DISTRICT_BASE_URL, COWIN_BASE_URL } from "../../Constants/Constants";

//get district Data
export const getDistrictData = () => {
  return axios.get(DISTRICT_BASE_URL);
};

//get Vaccine data by Pin and Date
export const getVaccineDataByPin = (pinCode, date) => {
  return axios.get(
    `${COWIN_BASE_URL}calendarByPin?pincode=${pinCode}&date=${date}`
  );
};
