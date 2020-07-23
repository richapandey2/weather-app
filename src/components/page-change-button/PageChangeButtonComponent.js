import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Fab } from "@material-ui/core";
import {
  PAGE_BUTTON_ICON_PREVIOUS,
  PAGE_BUTTON_ICON_NEXT,
} from "../../constants/Constants";

function PageChangeButtonComponent(props) {
  const { pageDetails, pageIndex, handlePageButton } = props;
  return (
    <Grid
      data-test-id="container"
      container
      spacing={4}
      style={{ justifyContent: "space-between" }}
    >
      <Grid item>
        {pageIndex > 0 && (
          <Fab
            className="page-button"
            onClick={() => handlePageButton("previous")}
          >
            <i className="material-icons md-48">{PAGE_BUTTON_ICON_PREVIOUS}</i>
          </Fab>
        )}
      </Grid>
      <Grid item>
        {pageDetails && pageIndex !== Object.keys(pageDetails).length - 1 && (
          <Fab className="page-button" onClick={() => handlePageButton("next")}>
            <i className="material-icons md-48">{PAGE_BUTTON_ICON_NEXT}</i>
          </Fab>
        )}
      </Grid>
    </Grid>
  );
}

PageChangeButtonComponent.propTypes = {
  pageDetails: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  pageIndex: PropTypes.number,
  handlePageButton: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    pageDetails: state.weatherReducer.data.pageDetails,
  };
};

export default connect(mapStateToProps, null)(PageChangeButtonComponent);
