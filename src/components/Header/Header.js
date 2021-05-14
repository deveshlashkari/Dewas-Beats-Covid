import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withRouter } from "next/router";

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "20px",
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#233e8b",
  },
};

class Header extends Component {
  render() {
    const { classes, router } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            {this.props.backArrow ? (
              <IconButton onClick={() => router.push("/")}>
                <ArrowBackIcon style={{ color: "white" }} />
              </IconButton>
            ) : (
              ""
            )}
            <Typography variant="h6" className={classes.title}>
              Dewas Beats Covid
            </Typography>

            <Button color="inherit" onClick={() => router.push("/about")}>
              About
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Header));
