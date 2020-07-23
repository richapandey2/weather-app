import React from "react";
import { Box, Switch, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { CELCIUS_ICON, FAHRENHEIT_ICON } from "../../constants/Constants";

function TempratureAndSearchComponent({
  isCelcius,
  handleSwitchButton,
  searchCity,
  handleTextOnChange,
  handleKeyPress,
}) {
  return (
    <Box className="div-box">
      <TextField
        id="standard-multiline-flexible"
        label="Search City"
        rowsMax={4}
        value={searchCity}
        onChange={handleTextOnChange}
        onKeyDown={handleKeyPress}
      />
      <div className="div-temp-box">
        {FAHRENHEIT_ICON}
        <Switch
          checked={isCelcius === true}
          onChange={(event) => handleSwitchButton(event)}
          color="default"
        />
        {CELCIUS_ICON}
      </div>
    </Box>
  );
}

TempratureAndSearchComponent.propTypes = {
  isCelcius: PropTypes.bool,
  handleSwitchButton: PropTypes.func,
  searchCity: PropTypes.string,
  handleTextOnChange: PropTypes.func,
  handleKeyPress: PropTypes.func,
};

export default TempratureAndSearchComponent;
