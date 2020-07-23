import React from "react";
import { Dialog, DialogContent, Slide } from "@material-ui/core";
import PropTypes from "prop-types";
import { VictoryChart, VictoryAxis, VictoryBar, Bar } from "victory";
import { convertFahrenheittoCelcius } from "../../utils/formatter";
import {
  TEMP_FAHRENHEIT_LABEL,
  TEMP_CELCIUS_LABEL,
  TIME,
} from "../../constants/Constants";

function BarChartComponent({ chartDetails, handleDetailsDialog, isCelcius }) {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <Dialog
      open
      TransitionComponent={Transition}
      onClose={() => handleDetailsDialog(false)}
    >
      <DialogContent>
        <VictoryChart
          height={400}
          width={500}
          domainPadding={{ x: 50, y: [0, 20] }}
        >
          <VictoryAxis
            dependentAxis
            offsetX={50}
            style={{ axisLabel: { padding: 35 } }}
            label={isCelcius ? TEMP_CELCIUS_LABEL : TEMP_FAHRENHEIT_LABEL}
          />
          <VictoryAxis label={TIME} />
          <VictoryBar
            barWidth={30}
            dataComponent={<Bar />}
            style={{
              data: { fill: "#3f51b5" },
            }}
            data={chartDetails}
            x="time"
            y="temp"
            labels={({ datum }) => {
              return isCelcius
                ? convertFahrenheittoCelcius(datum.temp)
                : datum.temp;
            }}
          />
        </VictoryChart>
      </DialogContent>
    </Dialog>
  );
}

BarChartComponent.propTypes = {
  chartDetails: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      temp: PropTypes.number,
    })
  ),
  handleDetailsDialog: PropTypes.func,
  isCelcius: PropTypes.bool,
};

export default BarChartComponent;
