/* eslint-disable react/jsx-indent */
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
export default function App() {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    }
  }));
  const classes = useStyles();
  return (
    <section>
      <div className="playerWrapper">
        <div className="left-part">
          <div className="search-section">
            <form>
              <FormControl>
                <TextField
                  id="outlined-search"
                  label="Search field"
                  type="search"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <Fab color="primary" aria-label="add" className={classes.fab}>
                  <AddIcon />
                </Fab>
              </FormControl>
            </form>
          </div>
          <div className="recetors-section"></div>
        </div>
        <div className="center-part"></div>
        <div className="right-part">
          <div className="playlist-section"></div>
        </div>
      </div>
    </section>
  );
}
