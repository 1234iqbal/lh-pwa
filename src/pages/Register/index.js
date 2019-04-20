import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const styles = {
  root: {
    paddingTop: "100px",
    textAlign: "center",
    backgroundColor: "none"
  },
  button: {
    margin: 10,
    width: 150,
    backgroundColor: "#f50057",
    color: "#fafafa",
    fontFamily: "Kavoon"
  },
  text: {
    color: "#045f50",
    fontFamily: "Bevan"
  },
  textField: {
    width: "70%"
  }
};

function Register(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.text} gutterBottom>
        Lindungi Hutan
      </Typography>

      <TextField
        id="outlined-email-input"
        label="Name"
        className={classes.textField}
        type="name"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <br />

      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <br />

      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
      <br />
      <TextField
        id="outlined-password-input"
        label="Confrim Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
      <br />
      <Link to="/home" className="link">
        <Button size="large" variant="contained" className={classes.button}>
          Daftar
        </Button>
      </Link>
      <div style={{ paddingTop: 30 }}>
        Sudah punya akun lindungihutan?{" "}
        <Link to="/" className="link">
          Masuk
        </Link>
      </div>
    </div>
  );
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
