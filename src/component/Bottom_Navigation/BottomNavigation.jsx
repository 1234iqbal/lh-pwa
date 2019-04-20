import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
const styles = {
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#045f50"
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
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <Link to="/home" className="link">
          <BottomNavigationAction
            label="Home"
            className={classes.site}
            icon={<HomeIcon />}
          />
        </Link>
        <Link to="/Kampanye" className="link">
          <BottomNavigationAction
            label="kampanye"
            className={classes.site}
            icon={<RestoreIcon />}
          />
        </Link>
        <Link to="/Donasi" className="link">
          <BottomNavigationAction
            label="Donasi"
            className={classes.site}
            icon={<FavoriteIcon />}
          />
        </Link>
        <Link to="/profile" className="link">
          <BottomNavigationAction
            label="profile"
            className={classes.site}
            icon={<LocationOnIcon />}
          />
        </Link>
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
