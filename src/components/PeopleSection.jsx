import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
// import quran from './quran.jpg';

const getSoura = (souras) =>{
  console.log("your souras is : " , souras);
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // color: "white"
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline"
  },
  ListItem : {
    // background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: '0 3px 5px 2px rgb(232, 232, 232)',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    marginBottom: '1%',
    textAlign: 'center'
  }
}));

export default function PeopleSection({recitors, setSuras}) {
  const classes = useStyles();

 
  function handleListItemClick(event, suras) {
       setSuras(event , suras);
  }

  return (
    <List className={classes.root}>
      {recitors.map(recitor => (
        <ListItem button alignItems="flex-start" key={recitor.id} className={classes.ListItem} onClick={event => handleListItemClick(event, recitor.suras)} >
          <ListItemAvatar>
            <Avatar alt="holy quran" src='./quran.jpg' />
          </ListItemAvatar>
          <ListItemText
            primary={recitor.name}
            secondary={
              <React.Fragment >
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                
                >
                  {recitor.rewaya}
                </Typography>
                {`  عدد السور  : ${recitor.count}`}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
