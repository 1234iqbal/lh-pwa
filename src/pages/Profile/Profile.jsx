import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Link, withRouter } from "react-router-dom";

const styles = {
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
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
  button: {
    width: "100%"
  }
};

function Profile(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Profile User
      </Typography>
      <div style={{ paddingBottom: "20px" }}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <Grid container>
                <Grid item xs={4}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/280x280_RS/aa/c9/42/aac94262cef917c15c13150e2aaf0e0c.jpg"
                    className={classes.bigAvatar}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Grid container>
                    <Grid item xs={4}>
                      <center>
                        <small>Donasi</small>
                        <h2>20</h2>
                      </center>
                    </Grid>
                    <Grid item xs={4}>
                      <center>
                        <small>Kampanye</small>
                        <h2>20</h2>
                      </center>
                    </Grid>
                    <Grid item xs={4}>
                      <center>
                        <small>Partisipasi</small>
                        <h2>20</h2>
                      </center>
                    </Grid>
                    <Grid item xs={12}>
                      <center>
                        <Link to="/update_profile" className="link">
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                          >
                            Update Profile
                          </Button>
                        </Link>
                      </center>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              style={{ paddingBottom: "10px" }}
            >
              Jack Kalla Huna
            </Typography>
            <Typography component="p">Tentang Saya</Typography>
            <Typography className={classes.pos} color="textSecondary">
              Biografi: Kami admin dari website lindungihutan.org atau
              lindungihutan.com.
              <br />
              Harapan: Bersama Menghijaukan Indonesia.
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/*  */}
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        History Kontribusi Lindungi Hutan
      </Typography>
      <div style={{ paddingBottom: "20px" }}>
        <Card className={classes.card}>
          <CardContent>
            <Typography component="p">
              Membuat Kampanye Alam dalam Aksi Penanaman pada Campaign
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Card className={classes.card}>
          <CardContent>
            <Typography component="p">
              Membuat Kampanye Alam dalam Aksi Penanaman pada Campaign
            </Typography>
          </CardContent>
        </Card>
      </div>
      {/*  */}
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(Profile));
