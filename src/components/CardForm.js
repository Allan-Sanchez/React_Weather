import React, { useState, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Error from './Error';
import PropTypes from 'prop-types'


const currencies = [
  {
    value: "US",
    label: "United States",
  },
  {
    value: "GT",
    label: "Guatemala",
  },
  {
    value: "MX",
    label: "Mexico",
  },
  {
    value: "ES",
    label: "Spain",
  },
];

const CardForm = ({data,setData, setConsult}) => {

  const [error, setError] = useState(false);
  
  const {country, city } = data;
  // const [currency, setCurrency] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    });
    // setCurrency(event.target.value);
  };

  const habdleSubmit = (e) =>{
    e.preventDefault();

    if (city.trim() === '' || country.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setConsult(true);
  }

  return (
    <Fragment>
    <Card className="m-4">
        {error ? <Error message="Please, fill all input"/> :null }
      <CardContent>
        <Typography  variant="h5" className="flex justify-center py-5">
          Form React Wheather
        </Typography>

        <form onSubmit={habdleSubmit}>
          <div className="w-2/3 mx-auto mb-10">
            <TextField fullWidth id="filled-basic" name="city"
              label="Type name of the city" value={city} 
              onChange={handleChange}
              />
          </div>

          <div className="w-2/3 mx-auto mb-5">
            <TextField
              fullWidth
              id="standard-select-currency"
              select name="country"
              // label="Select"
              value={country}
              onChange={handleChange}
              helperText="Please select Contry "
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="w-2/3 mx-auto mb-5 flex justify-end">
            <Button type="submit" variant="contained" size="large" color="primary">
              Weather Search
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
    </Fragment>
  );
};

CardForm.propTypes = {
  data : PropTypes.object.isRequired,
  setData : PropTypes.func.isRequired,
  setConsult: PropTypes.func.isRequired
};
export default CardForm;
