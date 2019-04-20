import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
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

          {/* <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography> */}

          {/*  */}

          <TextField
            id="outlined-email-input"
            label="Nominal"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <br />

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
            id="outlined-email-input"
            label="No Telp"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
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
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <br />

          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value="BRI"
            className={classes.textField}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select your currency"
            margin="normal"
            variant="outlined"
          >
            <MenuItem key="BRI" value="BRI">
              BRI
            </MenuItem>
            <MenuItem key="BCA" value="BCA">
              BCA
            </MenuItem>
            <MenuItem key="MANDIRI" value="MANDIRI">
              MANDIRI
            </MenuItem>
          </TextField>

          <Link to="/home" className="link">
            <Button size="large" variant="contained" className={classes.button}>
              Daftar
            </Button>
          </Link>
        </CardContent>
      </center>
    </Card>
  );
}

Donasi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Donasi);
