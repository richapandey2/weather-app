import React from "react";
import { APP_HEADER } from "../../constants/Constants";
import { AppBar, Typography, makeStyles } from "@material-ui/core";

function HeaderComponent() {
  const useStyle = makeStyles(() => ({
    root: {
      padding: "20px",
      alignItems: "center",
    },
    text: {
      fontSize: "18px",
      fontWeight: "bold",
    },
  }));
  const classes = useStyle();
  return (
    <AppBar className={classes.root}>
      <Typography className={classes.text}>{APP_HEADER}</Typography>
    </AppBar>
  );
}

export default HeaderComponent;
