import React from "react";
import "../App.css";
import GeneralContainer from "../containers/GeneralContainer";
import Title from "./Title";
import NavBar from "./NavBar";
import categories from "./Categories";
import SearchBar from "./SearchBar";
import Register from "./Register";
import Account from "./Account";
import API from "./API";
// import { Route, withRouter, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Button from "@material-ui/core/Button";
import StoryPost from "../components/StoryPost";
import TweetList from "../components/TweetList";

const articlesURL = "http://localhost:3000/articles/save";
const storiesURL = "http://localhost:3000/stories";

class App2 extends React.Component {
  state = {
    currentCategory: categories.general,
    showInfo: false,
    selectedArticle: undefined,
    search: "",
    savedArticles: [],
    stories: []
  };

  selectArticle = article => {
    console.log(article);
    this.setState({ selectedArticle: article });
  };

  changeCurrentCategory = newCategory => {
    this.setState({
      currentCategory: newCategory,
      selectedArticle: undefined
    });
  };

  selectNews = e => {
    console.log(e.target);
    this.setState({
      showInfo: true
    });
  };

  handleSearch = e => {
    console.log(e.target.value);
    this.setState({
      search: e.target.value
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/articles")
      .then(res => res.json())
      .then(data => this.setState({ savedArticles: data }));

    API.get(storiesURL).then(stories => this.setState({ stories }));
  }

  render() {
    return (
      <>
        <div className="content-view">
          <div className="stories-grid">
            {this.state.stories.map(story => (
              <StoryPost stories={story} selectStory={this.props.selectStory} />
            ))}
          </div>
          <div className="ui-container">
            <NavBar
              changeCurrentCategory={this.changeCurrentCategory}
              currentCategory={this.currentCategory}
            />
            <div className="generalcontainer">
              <GeneralContainer
                currentCategory={this.state.currentCategory}
                selectNews={this.selectNews}
                showInfo={this.state.showInfo}
                selectArticle={this.selectArticle}
                selectedArticle={this.state.selectedArticle}
                selectStory={this.props.selectStory}
              />
            </div>
          </div>
          <div className="twitter-grid">
            <TweetList />
          </div>
        </div>
      </>
    );
  }
}

export default App2;
