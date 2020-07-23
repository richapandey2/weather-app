import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { fetchWeatherAction, loaderAction } from "../actions/Weather.Action";
import ErrorComponent from "../components/error/ErrorComponent";
import LoadingComponent from "../components/loading/LoadingComponent";
import HomePage from "../pages/HomePage";
import HeaderComponent from "../components/header/HeaderComponent";

class App extends Component {
  constructor() {
    super();
    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }
  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.props.showLoader();
    this.props.fetchData();
  }

  render() {
    const { showData, isError, isPending } = this.props;
    return (
      <>
        <HeaderComponent />
        <Container
          fixed
          style={{
            marginTop: "5em",
          }}
        >
          {showData && <HomePage />}
          {isPending && <LoadingComponent />}
          {isError && (
            <ErrorComponent fetchWeatherData={this.fetchWeatherData} />
          )}
        </Container>
      </>
    );
  }
}

App.propTypes = {
  showData: PropTypes.bool,
  isError: PropTypes.bool,
  isPending: PropTypes.bool,
  fetchData: PropTypes.func,
  showLoader: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    showData: state.weatherReducer.showData,
    isError: state.weatherReducer.isError,
    isPending: state.weatherReducer.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchWeatherAction()),
    showLoader: () => dispatch(loaderAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
