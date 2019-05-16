import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = {
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
};

function Donasi(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <center>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <b>Instruksi Pembayaran</b>
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Transfer tepat sesuai nominal berikut
            </Typography>

            <Typography
              className={classes.title}
              gutterBottom
              style={{
                paddingBottom: "10px",
                paddingTop: "10px",
                fontSize: 20
              }}
            >
              <b>Rp 8,000,115</b>
            </Typography>

            <Table className={classes.table}>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Donasi
                  </TableCell>
                  <TableCell align="right" color="textSecondary">
                    Rp. 8,000,000
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Kode (*)
                  </TableCell>
                  <TableCell align="right" color="textSecondary">
                    115
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </center>
      </Card>
      <div style={{ paddingTop: "10px" }}>
        <Card>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <b>Pembayaran</b>
            </Typography>
            <center style={{ paddingTop: "10px" }}>
              <img src="https://lindungihutan.com/public/img/logo-bca.png" />
              <div style={{ paddingTop: "10px" }}>Hario Laskito Ardi</div>
              <div>No. Reg : 1400694075</div>
            </center>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

Donasi.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Donasi);
