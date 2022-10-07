// import { Container, MovieList } from "./styles";
import { Link } from 'react-router-dom'
// import { useEffect, useState } from "react";
// const Home = () => {
  
//   const [movies,setMovies]=useState([])

//   useEffect(()=>{
// // fetch('https://www.omdbapi.com/?t=fight+club&apikey=d08082f7')
// fetch('https://www.omdbapi.com/?s=Batman&page=2&apikey=d08082f7')
// .then(response =>response.json())
// .then(data =>setMovies(data.Search))
//   },[])
//   return (
//     <Container>
//       <h1>Movies</h1>
//      <input type="text" placeholder="Buscar"/>
//       <MovieList>
//         {movies.map((item) => {
//           return (
//             <li>
//               <Link to={`/details/${item.imdbID}`}><img src={item.Poster} alt="capa" /></Link>
//                <span>{item.Title}</span>
//               <p>{item.Year}</p>
//             </li>
//           );
//         })}
//       </MovieList>
//     </Container>
//   );
// };
// export default Home;
import { useState, useEffect } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
// import CardHome from '../../components/CardHome/ori';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth:'350px',
    margin: theme.spacing(4),
    transitions: "all 0.3s",
    "&:hover": { transform: "scale(1.1)" },
    padding:20,
  },
  Grid:{
background:'#fff',

  },
}));

const Home = () => {
  const classes = useStyles();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=Batman&page=2&apikey=d08082f7")
      .then((response) => {
        setMovies(response.data.Search);
      });
  }, []);

  return (
   <Container>
     <Grid container>
      {movies.map((item) =>  (
       
        <Grid item xs={12} md={3}  className={classes.card}  key={item.imdbID}>
      <Typography variant="h6" component="h2" color='#000'>
            {item.Title}
          </Typography>
          <Typography variant="h5" component="h2">
           
            {item.Year}
          </Typography>
            <Link to={`/details/${item.imdbID}`}> <img src={item.Poster} alt="capa" /></Link>
       
        </Grid>
      ))}
    </Grid>
   </Container>

  );
};

export default Home;
