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
import CssBaseline from "@material-ui/core/CssBaseline";

import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';

import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",

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
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Card className={classes.card}>
            <CardContent>
              <h1>kjsdkjsdkdsksd</h1>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default MainSection;
