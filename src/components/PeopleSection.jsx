import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    color: "white"
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline"
  }
}));


export default function PeopleSection() {
  const classes = useStyles();
  
  const [recitor , setRecitor] =  useState([]);

  useEffect(async() => {
      // Update the document title using the browser API
      const url = 'https://mp3quran.net/api/_arabic.json';
      const response = await fetch(url);
      const data =  await response.json();
      console.log("==> ",  data)  
      setRecitor([{name : 'testHook'}])
    }, []);
  




  return (
    <List className={classes.root}>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
             {recitor.map((recit, index) => 
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
                key={index}
              >
              {recit.name}
              
              </Typography>
                )}
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
