import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { convertFahrenheittoCelcius } from "../../utils/formatter";
import { CELCIUS_ICON, FAHRENHEIT_ICON } from "../../constants/Constants";
import "../../Styles.css";

function CurrentDetailsComponent(props) {
  const useStyle = makeStyles(() => ({
    box: {
      display: "flex",
      justifyContent: "center",
      padding: "30px",
    },
  }));
  const classes = useStyle();
  const { overAllDetails, isCelcius } = props;
  return (
    <>
      {overAllDetails && (
        <Box className={classes.box}>
          <div className="main-div">
            <div className="primary-text">
              {overAllDetails.city},{overAllDetails.country}
            </div>
            <div className="temp-text">
              {isCelcius
                ? convertFahrenheittoCelcius(overAllDetails.temp) + CELCIUS_ICON
                : overAllDetails.temp + FAHRENHEIT_ICON}
            </div>
            <div className="secondary-text">{overAllDetails.date}</div>
          </div>
        </Box>
      )}
    </>
  );
}

CurrentDetailsComponent.propTypes = {
  overAllDetails: PropTypes.shape({
    date: PropTypes.string,
    temp: PropTypes.number,
    weather: PropTypes.string,
    icon: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
  }),
  isCelcius: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    overAllDetails: state.weatherReducer.data.overAllDetails,
  };
};

export default connect(mapStateToProps, null)(CurrentDetailsComponent);
