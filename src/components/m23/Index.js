import React from 'react'
import { DropdownDate, DropdownComponent } from "react-dropdown-date";

const formatDate = (date) => {
  // formats a JS date to 'yyyy-mm-dd'
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const M23 = () => {
  return (
    <div>
      <h1>M23 - Date Picker</h1>
      <DropdownDate
        startDate={
          // optional, if not provided 1900-01-01 is startDate
          "2012-01-01" // 'yyyy-mm-dd' format only
        }
        endDate={
          // optional, if not provided current date is endDate
          "2013-12-31" // 'yyyy-mm-dd' format only
        }
        selectedDate={
          // optional
          this.state.selectedDate // 'yyyy-mm-dd' format only
        }
        onDateChange={(date) => {
          // optional
          console.log(date);
          this.setState({ date: date, selectedDate: formatDate(date) });
        }}
      />
    </div>
  )
}

export default M23