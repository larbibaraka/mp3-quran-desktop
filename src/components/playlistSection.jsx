import React from "react";
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
    // color: "white"
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline"
  },
  ListItem : {
    // background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: '0 3px 5px 2px rgb(232, 232, 232)',
    // background: 'linear-gradient(to right, #b2fefa, #0ed2f7 90%) ',
    marginBottom: '1%',
    textAlign: 'center'
    
  }
}));

export default function PlaylistSection({souras}) {
  const classes = useStyles();

  

  return (
    <List className={classes.root}>
      {souras.map((soura , index) => (
        <ListItem button alignItems="flex-start" key={index} className={classes.ListItem}>
           <ListItemText
            primary={soura.name}
            secondary={
              <React.Fragment >
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                  >
                 {` رقم  السورة : ${soura.number}`}
                </Typography>
                {`  عدد الأيات  : ${soura.numberOfAyahs}`}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
