import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import WeatherImage from "../weather_app.svg";
import PropTypes from 'prop-types'



const CardWeather = ({weatherData}) => {

  const {name , main} = weatherData;

  if (!name) {
    return null
  }
  const kelvin = 273.15;
  return (
    <Card className="w-2/3 mt-4 mx-auto">
        <div className="w-full flex justify-center px-10 py-2">

           <img className="h-32" src={WeatherImage} alt="React Logo" />
        </div>
        <Typography className="text-center px-10" gutterBottom variant="h5" component="h5">
            The temperature of {name} is: 
          </Typography>
        <CardContent>
          <Typography className="text-center" gutterBottom variant="h4" component="h4">
            Actual Temperature 
          </Typography>

          <Typography className="text-center" gutterBottom variant="h2" component="h2">
           <span>{parseFloat(main.temp - kelvin,10).toFixed(2)} &#x2103; </span>
          </Typography>
          <Typography className="text-center " variant="body2" color="textSecondary" component="p">
          Maximum temperature <span>{parseFloat( main.temp_max - kelvin,10).toFixed(2)} &#x2103; </span>
          </Typography>
          <Typography className="text-center" variant="body2" color="textSecondary" component="p">
          Minimun temperature. <span>{parseFloat( main.temp_min - kelvin,10).toFixed(2)} &#x2103; </span>
          </Typography>
        </CardContent>
    </Card>
  );
};

CardWeather.propTypes = {
  weatherData: PropTypes.object.isRequired
};

export default CardWeather;
