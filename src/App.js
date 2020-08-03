import React, { Fragment,useState,useEffect } from "react";
import Banner from "./components/Banner";
import CardForm from './components/CardForm';
import CardWeather from './components/CardWeather';
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Error from './components/Error';


function App() {

  const [data, setData] = useState({
    country:'GT',
    city: ''
  });

  const [consult,setConsult] = useState(false);
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const {country,city} = data;


  useEffect(() => {
    // console.log(city);

    const getAPI = async () =>{
      if (consult) {
        const appId = 'ce147162b1cf49086b6e14e20abe3e74';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        
        const response = await fetch(url);
        const result = await response.json();

        setWeatherData(result);
        setConsult(false);
        
        if (result.cod === "404") {
          setError(true);
        }else{
          setError(false);
        }

      }
    };
    getAPI();
    //eslint-disable-next-line
  }, [consult]);


  return (
    <Fragment>
      <Banner></Banner>
      <Container>
      {error ? <Error message="Error City not found"/> :null }

        <Grid container spacing={4}>
          <Grid item xs={12} lg={6} >
            <CardForm
            data={data}
            setData={setData}
            setConsult={setConsult}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CardWeather
            weatherData = {weatherData}
            ></CardWeather>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default App;
