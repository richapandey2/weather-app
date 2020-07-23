import React, { useState } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import CardDetailComponent from "../components/card/CardComponent";
import CurrentDetailsComponent from "../components/current-details/CurrentDetailsComponent";
import TempratureAndSearchComponent from "../components/temperature-and-search/TemperatureAndSearchComponent";
import PageChangeButtonComponent from "../components/page-change-button/PageChangeButtonComponent";
import { fetchWeatherAction, loaderAction } from "../actions/Weather.Action";
import "../Styles.css";

function HomePage(props) {
  const [pageIndex, setPageIndex] = useState(0);
  const [isCelcius, setIsCelcius] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const { details, pageDetails, fetchData, showLoader } = props;

  const handlePageButton = (type) => {
    if (type === "next") {
      setPageIndex(pageIndex + 1);
    } else {
      setPageIndex(pageIndex - 1);
    }
  };

  const handleSwitchButton = (event) => {
    setIsCelcius(event.target.checked);
  };

  const handleTextOnChange = (event) => {
    setSearchCity(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (+event.keyCode === 13) {
      setSearchCity(event.target.value);
      showLoader();
      fetchData(event.target.value);
    }
  };

  return (
    <>
      <TempratureAndSearchComponent
        isCelcius={isCelcius}
        searchCity={searchCity}
        handleSwitchButton={handleSwitchButton}
        handleTextOnChange={handleTextOnChange}
        handleKeyPress={handleKeyPress}
      />
      <CurrentDetailsComponent isCelcius={isCelcius} />
      <PageChangeButtonComponent
        pageIndex={pageIndex}
        handlePageButton={handlePageButton}
      />
      {details && (
        <Grid container spacing={8} style={{ justifyContent: "center" }}>
          {pageDetails[pageIndex].map((card, index) => (
            <Grid item key={"Grid" + index}>
              <CardDetailComponent
                key={index}
                detail={details[card]}
                isCelcius={isCelcius}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

HomePage.propTypes = {
  details: PropTypes.object,
  pageDetails: PropTypes.object,
  fetchData: PropTypes.func,
  showLoader: PropTypes.func,
  pageIndex: PropTypes.number,
  isCelcius: PropTypes.bool,
  searchCity: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    details: state.weatherReducer.data.details,
    pageDetails: state.weatherReducer.data.pageDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (searchCity) => dispatch(fetchWeatherAction(searchCity)),
    showLoader: () => dispatch(loaderAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
