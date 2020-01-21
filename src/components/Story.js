import React from "react";
import API from "./API";
import SummaryNews from "../components/SummaryNews";

const storyURL = "http://localhost:3000/stories";

class Story extends React.Component {
  state = {
    title: "",
    content: "",
    image: "",
    allStories: []
  };

  handleStoryInput = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleStoryForm = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      content: this.state.content,
      image: this.state.image,
      user_id: 1,
      created_at: new Date()
    };

    API.post(storyURL, data);
    // .then(result => this.renderStories());
    // document.getElementById('InputEmail').reset()
  };

  render() {
    return (
      <>
        <form>
          <div class="form-group">
            <label for="title">Your Title</label>
            <input
              type="text"
              name="title"
              class="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              onChange={this.handleStoryInput}
            />
          </div>
          <div class="form-group">
            <label for="story-description">Your Story</label>
            <textarea
              class="form-control"
              id="story-description"
              name="content"
              placeholder="Tell us your story........."
              onChange={this.handleStoryInput}
            />
          </div>
          {/* <div class="form-group">
              <label for="image">Your Image</label>
              <input
                type="file"
                class="form-control-file"
                name="image"
                id="exampleFormControlFile1"
                onChange={this.handleStoryInput}
              />
            </div> */}
          <div class="image-group">
            <label for="image">Your Image</label>
            <input
              type="text"
              class="form-control-file"
              name="image"
              id="exampleFormControlFile1"
              onChange={this.handleStoryInput}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.handleStoryForm}
          >
            Submit
          </button>
        </form>

        <p>{this.state.allStories.map(stories => stories.title)}</p>
      </>
    );
  }
}

export default Story;
