import React from "react";
import { CircularProgress, Backdrop, makeStyles } from "@material-ui/core";

function LoadingComponent() {
  const useStyle = makeStyles(() => ({
    backdrop: {
      backgroundColor: "#8e898938",
      color: "#fff",
    },
  }));
  const classes = useStyle();
  return (
    <Backdrop className={classes.backdrop} open>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}

export default LoadingComponent;
