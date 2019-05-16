import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = {
  root: {
    paddingTop: "150px",
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

function Login(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.text} gutterBottom>
        Lindungi Hutan
      </Typography>
      <form onSubmit={props.submit} method="POST">
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          onChange={props.handle}
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
          onChange={props.handle}
          name="name"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <br />

        <Button
          size="large"
          variant="contained"
          type="submit"
          className={classes.button}
        >
          Masuk
        </Button>
      </form>
      <div style={{ paddingTop: 30 }}>
        Belum punya akun lindungihutan?{" "}
        <Link to="/register" className="link">
          Daftar
        </Link>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
