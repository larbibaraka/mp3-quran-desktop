/* eslint-disable react/jsx-indent */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PeopleSection from './components/PeopleSection';
export default function App() {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    root: {
      // padding: '2px 4px',
      padding : '10% 3%',
      display: 'flex',
      alignItems: 'center',
      // width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      // border : '1px solid rgba(209,209,209,1)',
      padding: "1% 5%",
      borderRadius: "6px",
      direction:'rtl',
      boxShadow: '-4px 10px 21px -1px rgba(209,209,209,1)',
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
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
    },
    iconButton : {
      // border : '1px solid rgba(209,209,209,1)',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      // border: 0,
      // borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      marginRight :'1%',
      // boxShadow: '-4px 10px 21px -1px rgba(209,209,209,1)'
    }
  }));
  const classes = useStyles();
  return (
    <section>
      <div className="playerWrapper">
        <div className="left-part">
          <div className="search-section">
            <form className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="ابحث عن قارئ"
                inputProps={{ "aria-label": "ابحث عن قارئ" }}
              />
            </form>
          </div>
          <div className="recetors-section">
            <PeopleSection/>
          </div>
        </div>
        <div className="center-part"></div>
        <div className="right-part">
          <div className="playlist-section"></div>
        </div>
      </div>
    </section>
  );
}
