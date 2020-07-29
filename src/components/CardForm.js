import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const CardForm = () => {
  const [currency, setCurrency] = useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Card className="m-4">
      <CardContent>
        <Typography  variant="h5" className="flex justify-center py-5">
          Form React Wheather
        </Typography>

        <form className="">
          <div className="w-2/3 mx-auto mb-10">
            <TextField fullWidth id="filled-basic" label="Type name the city" />
          </div>

          <div className="w-2/3 mx-auto mb-5">
            <TextField
              fullWidth
              id="standard-select-currency"
              select
              label="Select"
              value={currency}
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
              Primary
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CardForm;
