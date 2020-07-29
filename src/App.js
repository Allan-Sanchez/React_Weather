import React, { Fragment } from "react";
import Banner from "./components/Banner";
import CardForm from './components/CardForm';
import CardWeather from './components/CardWeather';
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Fragment>
      <Banner></Banner>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={6} >
            <CardForm/>
          </Grid>
          <Grid item xs={6}>
            <CardWeather></CardWeather>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default App;
