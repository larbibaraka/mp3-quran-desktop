/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import Slider from "@material-ui/core/Slider";
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    blur : 6
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  SliderMP3 : {
    color : "black",
  }
}));
function MainSection() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className="playerSection">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="./quran.jpg"
          title="Paella dish"
        />
        <div className="playerslide">
           <Slider
            defaultValue={0}
            aria-labelledby="continuous-slider"
            className={classes.SliderMP3}
          />
          <span className="timer">03:56/06:00</span>
        </div>
       
        <CardContent>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider
                value="30"
                // onChange={handleChange}
                aria-labelledby="continuous-slider"
              />
            </Grid>
            <Grid item>
              <VolumeUpIcon />
            </Grid>
          </Grid>
          
          <CardActions disableSpacing>
            <div className={classes.controls}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </div>
            <div >
            <IconButton >
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <RepeatIcon />
              </IconButton>
              <IconButton>
                <ShuffleIcon />
              </IconButton>
            </div>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default MainSection;
