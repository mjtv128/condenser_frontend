import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import TweetList from "../components/TweetList";

const useStyles = makeStyles({
  card: {
    maxWidth: 230
  },
  media: {
    height: 100
  }
});

const StoryPost = props => {
  const classes = useStyles();

  return (
    <div className="storyposts">
      <Card className={classes.card}>
        <CardActionArea>
          <NavLink to={`/story/${props.stories.id}`}>
            <CardMedia
              className={classes.media}
              title="Contemplative Reptile"
              onClick={() => props.selectStory(props.stories)}
              // image="{props.stories.image}"
            >
              <img src={props.stories.image} alt="" />
            </CardMedia>
          </NavLink>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.stories.title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {props.stories.content}
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <NavLink to={`/story/${props.stories.id}`}>
            <Button
              size="small"
              color="primary"
              onClick={() => props.selectStory(props.stories)}
            >
              Read More
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </div>
  );
};
// props.history.push(`/story/{props.stories.id}`);

export default StoryPost;
