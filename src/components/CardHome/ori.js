
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    height:540,
    padding: 10,
    marginTop: 20,
    
  },
  card: {
    margin: theme.spacing(3),
    transitions: "all 0.3s",
    "&:hover": { transform: "scale(1.1)" },
  },
    media: {
      maxheight:450,
    maxWidth:350,
  },
 btn:{
  textDecoration:'none',
  margin: '10px auto'
 },
}));

const CardHome = ({ Title,Year,Poster,imdbID}) => {
  const classes = useStyles();
    

  return (
    <Card className={classes.root}>
      <CardHeader
           
       
        title={Title}
        subheader={Year}
      />
       <CardMedia
            className={classes.media}
            image={Poster}
            title={Title}
          />
           
      <CardActions disableSpacing>
      
      <Link to={`/details/${imdbID}`} className={classes.btn}><AddCircleIcon color="primary"  style={{ fontSize: 40 }}/></Link>       
      
    

       </CardActions>
     </Card>
  );
}

export default  CardHome