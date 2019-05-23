import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    width: "70%"
  },
  button: {
    margin: 10,
    width: 150,
    minWidth: "70%",
    backgroundColor: "#f50057",
    color: "#fafafa",
    fontFamily: "Kavoon"
  }
};

function Donasi(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <center>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Donasimu akan diakumulasikan dengan harga pohon yang sesuai dengan
            kampanye alam kami
          </Typography>

          {/*  */}
          <form onSubmit={props.submit} method="post">
            <TextField
              id="outlined-text-input"
              label="Nominal"
              className={classes.textField}
              onChange={props.handle}
              type="text"
              name="amount"
              autoComplete="text"
              margin="normal"
              variant="outlined"
            />
            <br />

            <TextField
              id="outlined-email-input"
              label="Name"
              className={classes.textField}
              onChange={props.handle}
              type="name"
              name="full_name"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
            <br />

            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              onChange={props.handle}
              value={props.email}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
            <br />

            <TextField
              id="outlined-text-input"
              label="No Telp"
              className={classes.textField}
              onChange={props.handle}
              type="text"
              name="phone"
              autoComplete="text"
              margin="normal"
              variant="outlined"
            />
            <br />

            <TextField
              id="outlined-email-input"
              label="komentar"
              multiline
              rowsMax="18"
              className={classes.textField}
              onChange={props.handle}
              type="email"
              name="comment"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
            <br />

            <TextField
              id="outlined-bank-input"
              label="Bank"
              multiline
              rowsMax="18"
              className={classes.textField}
              onChange={props.handle}
              type="bank"
              name="bank"
              autoComplete="bank"
              margin="normal"
              variant="outlined"
            />
            <br />

            {/* <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={props.bank}
              onClick={props.handle}
              className={classes.textField}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select your currency"
              margin="normal"
              variant="outlined"
            > */}

            {/*<MenuItem key="BRI" value="BRI">
                BRI
              </MenuItem>
              <MenuItem key="BCA" value="BCA">
                BCA
              </MenuItem>
              <MenuItem key="MANDIRI" value="MANDIRI">
                MANDIRI
              </MenuItem>
            </TextField>*/}

            <Button
              type="submit"
              size="large"
              variant="contained"
              className={classes.button}
            >
              Donasi
            </Button>
          </form>
        </CardContent>
      </center>
    </Card>
  );
}

Donasi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Donasi);
