import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CardWeather = () => {
  const classes = useStyles();

  return (
    <Card className="w-2/3 mt-4 mx-auto">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className="text-center" gutterBottom variant="h5" component="h2">
            Actuality Weather
          </Typography>
          <Typography className="text-center " variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet.
          </Typography>
          <Typography className="text-center" variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardWeather;
