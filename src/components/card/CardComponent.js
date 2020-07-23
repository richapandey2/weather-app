import React, { useState } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import BarChartComponent from "../bar-chart/BarChartComponent";
import { convertFahrenheittoCelcius } from "../../utils/formatter";
import { CELCIUS_ICON, FAHRENHEIT_ICON } from "../../constants/Constants";
import "../../Styles.css";

function CardDetailComponent({ detail, isCelcius }) {
  const [showDialog, setShowDialog] = useState(false);
  const useStyle = makeStyles(() => ({
    paper: {
      width: "15em",
      height: "18em",
      padding: "30px",
      backgroundColor: "#e0e0e0",
      boxShadow:
        "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
    },
  }));

  const handleDetailsDialog = (value) => {
    setShowDialog(value);
  };
  const classes = useStyle();
  return (
    <>
      {detail && (
        <Paper
          className={classes.paper}
          onClick={() => handleDetailsDialog(true)}
        >
          <div className="main-div">
            <div>
              <img
                width="100px"
                alt="icon"
                src={`http://openweathermap.org/img/w/${detail.icon}.png`}
              />
            </div>
            <div className="primary-text">{detail.weather}</div>
            <div className="temp-text">
              {isCelcius
                ? convertFahrenheittoCelcius(
                    (detail.sum / detail.count).toFixed(2)
                  ) + CELCIUS_ICON
                : (detail.sum / detail.count).toFixed(2) + FAHRENHEIT_ICON}
            </div>
            <div className="secondary-text">{detail.date}</div>
          </div>
        </Paper>
      )}
      {showDialog && (
        <BarChartComponent
          chartDetails={detail.barChart}
          handleDetailsDialog={handleDetailsDialog}
          isCelcius={isCelcius}
        />
      )}
    </>
  );
}

CardDetailComponent.propTypes = {
  detail: PropTypes.shape({
    barChart: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string,
        temp: PropTypes.number,
      })
    ),
    date: PropTypes.string,
    count: PropTypes.number,
    sum: PropTypes.number,
    weather: PropTypes.string,
    icon: PropTypes.string,
  }),
  showDialog: PropTypes.func,
  isCelcius: PropTypes.bool,
};

export default CardDetailComponent;
