import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
      value: "Let`s hit the beach",
      iconName: "sun"
  },
  winter: {
      value: "Burr, it is chilly",
      iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {value, iconName } = seasonConfig[season];
    return (
      <div className={`season-display ${season}`}>
          <i className={`icon-left massive ${iconName} icon`}></i>
          <h1>{value}</h1>
      </div>
  );
};

export default SeasonDisplay;