/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import PeopleSection from "./components/PeopleSection";
import PlaylistSection from "./components/PlaylistSection";
import MainSection from './components/MainSection';
export default function App() {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    root: {
      // padding: '2px 4px',
      padding: "10% 3%",
      display: "flex",
      alignItems: "center"
      // width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      // border : '1px solid rgba(209,209,209,1)',
      padding: "1% 5%",
      borderRadius: "6px",
      direction: "rtl",
      boxShadow: "-4px 10px 21px -1px rgba(209,209,209,1)",
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
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
    iconButton: {
      // border : '1px solid rgba(209,209,209,1)',
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      // border: 0,
      // borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      marginRight: "1%"
      // boxShadow: '-4px 10px 21px -1px rgba(209,209,209,1)'
    }
  }));

  const classes = useStyles();

  const [recitors, setRecitor] = useState([]);
  const [souras, setSouras] = useState([]);

  useEffect(async () => {
    // Update the document title using the browser API
    const url = "https://mp3quran.net/api/_arabic.json";
    const response = await fetch(url);
    const data = await response.json();
    console.log("==> ", data);
    setRecitor(data.reciters);
  }, []);

  async function setSuras(e, suras) {
    const souras = suras.split(",");
    const urlSouras = "http://api.alquran.cloud/v1/surah";
    const response = await fetch(urlSouras);
    const { data } = await response.json();
    
     souras.map((x, index)=>{
        let element =  data.find(item => item.number === parseInt(x));
        souras[index] = element;
     }) 
      console.log("your sourats is : ", souras);
      setSouras(souras);
  }
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
            <PeopleSection recitors={recitors} setSuras={setSuras} />
          </div>
        </div>
        <div className="center-part">
            <div className="soura-cover">
              <img src="./quran.jpg"/>
            </div>



        </div>
        <div className="right-part">
          <div className="playlist-section">
            <div className="search-section">
              <form className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="ابحث عن سورة"
                  inputProps={{ "aria-label": "ابحث عن سورة" }}
                />
              </form>
            </div>
            <div className="recetors-section">
              <PlaylistSection souras={souras} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
