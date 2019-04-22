import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link, withRouter } from "react-router-dom";
const styles = {
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#045f50",
    color: "#fff"
  },
  site: {
    color: "#fff"
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, history } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          onClick={() => {
            history.push("/home");
          }}
          className={classes.site}
          icon={<HomeIcon />}
        />

        <BottomNavigationAction
          label="kampanye"
          onClick={() => {
            history.push("/kampanye");
          }}
          className={classes.site}
          icon={<RestoreIcon />}
        />

        <BottomNavigationAction
          label="Donasi"
          onClick={() => {
            history.push("/Donasi");
          }}
          className={classes.site}
          icon={<FavoriteIcon />}
        />

        <BottomNavigationAction
          label="profile"
          onClick={() => {
            history.push("/profile");
          }}
          className={classes.site}
          icon={<AccountCircle />}
        />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(SimpleBottomNavigation));
