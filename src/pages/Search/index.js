import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import React from "react";
import Container from '@material-ui/core/Container';
import axios from "axios";
import { Link } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
    padding: 10,
    margin: '20px auto',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 500,
    width: 500,
  },
  card: {
    margin: theme.spacing(2),
  },
}));

const SearchInput = ({ value, onchange }) => {
  const classes = useStyles();
  const [searchParams] = useSearchParams()
  const [buscador, setBuscador] = useState('')
  const query = searchParams.get('t && i')
  async function Search() {
    const response = await fetch(`http://www.omdbapi.com/?t=${value}&apikey=d08082f7`)
    const data = await response.json()
    console.log(buscador)
  }
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?t=${query}&?i=${query}&apikey=d08082f7`)
      .then((response) => {
        setBuscador(response.data.Search);
      });
  }, [query]);



  function handleChange(event) {
    setBuscador(event.target.value);
  }
  return (

    <Container>
      <Grid container>
        {buscador.map((item) => (

          <Grid item xs={12} md={3} className={classes.card} key={item.imdbID}>
            <Typography variant="h6" component="h2" color="primary">
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
export default SearchInput;
