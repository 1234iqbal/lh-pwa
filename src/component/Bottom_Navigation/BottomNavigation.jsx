import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

const styles = {
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#26a69a"
  },
  site: {
    color: "#fff"
  }
};

class Bottom_Navigation extends React.Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        position="static"
        value={value}
        onChange={this.handleChange}
        className={classes.root + " " + classes.primary}
      >
        <BottomNavigationAction
          label="Beranda"
          value="Beranda"
          as={Link}
          to="/"
          className={classes.site}
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Kampanye"
          value="Kampanye"
          as={Link}
          to="/Kampanye"
          className={classes.site}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Donasi"
          value="Donasi"
          as={Link}
          to="/donasi"
          className={classes.site}
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Dll"
          value="dll"
          as={Link}
          to="/dll"
          className={classes.site}
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    );
  }
}

Bottom_Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bottom_Navigation);
