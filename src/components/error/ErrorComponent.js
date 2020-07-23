import React from "react";
import { Box, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Alert, AlertTitle } from "@material-ui/lab";
import {
  ERROR_MESSAGE_LABEL,
  ERROR_LABEL_BUTTON_LABEL,
  ERROR_TITLE,
} from "../../constants/Constants";

function ErrorComponent({ fetchWeatherData }) {
  return (
    <Box>
      <Alert severity="error">
        <AlertTitle>{ERROR_TITLE}</AlertTitle>
        {ERROR_MESSAGE_LABEL}
        <Button
          variable="contained"
          color="secondary"
          onClick={fetchWeatherData}
        >
          {ERROR_LABEL_BUTTON_LABEL}
        </Button>
      </Alert>
    </Box>
  );
}

ErrorComponent.propTypes = {
  fetchWeatherData: PropTypes.func,
};

export default ErrorComponent;
