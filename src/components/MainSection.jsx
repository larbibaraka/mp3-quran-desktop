import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    position: 'fixed',
    // left: '315px',
    /* right: 0; */
    bottom: '0',
    width: '67%',
    background: 'linear-gradient(to right, #b2fefa, #0ed2f7 90%)',
    color: 'white',
    textAlign: 'center'
  },
  details: {
    display: "flex",
    flexDirection: "row"
  },
  content: {
    flex: "1 1 auto"
  },
  cover: {
    width: 151
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
  }
}));

function MainSection() {
  const classes = useStyles();
  const theme = useTheme();
  return (
      <div className="playerSection">

      </div>
  );
}

export default MainSection;
