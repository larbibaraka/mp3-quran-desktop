import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    color : 'white'
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(async () => {
      const response = await fetch(url);
      const data = await response.json();
      const [item] = data.results;
      setData(item);
      setLoading(false);
    }, []);
  
    return { data, loading };
  };

export default function PeopleSection() {
  const classes = useStyles();

//   let [recetors, setRecetors] = useState(null);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//         const url = 'https://mp3quran.net/api/_arabic.json';
//         useEffect(async() =>{
//             const response = await fetch(url);
//             const data  = await response.json();
//             const [reciters] = data.reciters;
//             setRecetors(reciters);
//         } , [])
//             return {reciters};
//             console.log("your state is : ", recetors)
            

//         // fetch(url)
//         //   .then(response => response.json())
//         //   .then(data => {
//         //     // console.log("your data is : ", data);
//         //     let reciters = data.reciters;
//         //     setRecetors(reciters, []);
//         //     // setRecetors([{name:"sss"}], []);

//         //    ;
//         //   });
//     }); 
    const { data, loading } = useFetch("https://api.randomuser.me/");
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
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
  );
}