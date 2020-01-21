import React from "react";
import TweetList from "../components/TweetList";
import { Button } from "@material-ui/core";

class StoryContent extends React.Component {
  render() {
    // console.log(this.props.selectedStory)
    const { title, content, image } = this.props.story;

    return (
      <div className="storypage">
        <div>
          <img src={image} alt="" />

          <h2>{title}</h2>
          <h3></h3>

          <h4>{content}</h4>
        </div>
      </div>
    );
  }
}

export default StoryContent;
