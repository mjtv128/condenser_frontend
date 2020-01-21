import React from "react";
import "./App.css";
import GeneralContainer from "./containers/GeneralContainer";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import Register from "./components/Register";
import Account from "./components/Account";
import API from "./components/API";
import { Route, withRouter, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import App2 from "./components/App2";
import Story from "./components/Story";
import StoryContent from "./components/StoryContent";
import Newsticker from "react-newsticker";
import Ticker from "react-ticker";
import Geolocation from "./components/Geolocation";
import Chat from "./components/Chat";
import Join from "./components/Join";

const storiesURL = "http://localhost:3000/stories";
const articlesURL = "http://localhost:3000/articles";
const news = ["Hello World!", "Nice to meet you", "Happy hour :)"];

class App extends React.Component {
  state = {
    currentCategory: categories.general,
    showInfo: false,
    selectedArticle: undefined,
    search: "",
    savedArticles: [],
    stories: [],
    selectedStory: undefined,
    email: "",
    rates: []
  };

  signIn = user => {
    this.setState({ email: user.email });
    localStorage.setItem("token", user.token);
  };

  signOut = () => {
    this.setState({ email: "" });
    localStorage.removeItem("token");
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

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      API.validate().then(data => {
        if (data.error) throw Error(data.error);

        this.signIn(data);
        // this.props.history.push('/account')
      });
      // .catch(error => alert(error))
    }

    API.get(articlesURL).then(data => this.setState({ savedArticles: data }));
    // API.get(storiesURL).then(stories => this.setState({ stories }));
  }

  selectStory = story => {
    console.log("change state of selectStory");
    console.log(story);
    this.setState({ selectedStory: story });
  };

  getRatesFromAPI = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=79c185b798594a608f4576ae054c4f49`
    )
      .then(res => res.json())
      .then(data => this.setState({ rates: data.articles.map(x => x.title) }));

    return this.state.rates ? (
      <h2 style={{ whiteSpace: "nowrap" }}>
        {this.state.rates.join("+++")}+++
      </h2>
    ) : (
      <p stlye={{ visibility: "hidden" }}>Placeholder</p>
    );
  };

  render() {
    return (
      <>
        {/* <p>{this.getRatesFromAPI()}</p> */}
        <Title />
        <SearchBar
          handleSearch={this.handleSearch}
          user={this.state.email}
          signOut={this.signOut}
        />
        {/* <Newsticker news={news} /> */}
        <Ticker offset="run-in" speed={10}>
          {() => this.getRatesFromAPI()}
        </Ticker>
        {/* <Geolocation />  */}
        <Switch>
          <Route
            exact
            path="/"
            component={routerProps => (
              <App2 {...routerProps} selectStory={this.selectStory} />
            )}
          />
          <Route
            exact
            path="/login"
            component={routerProps => (
              <Login {...routerProps} signIn={this.signIn} />
            )}
          />
          <Route
            exact
            path="/account"
            component={routerProps => (
              <Account
                {...routerProps}
                savedArticles={this.state.savedArticles}
                user={this.state.email}
              />
            )}
          />
          <Route
            exact
            path="/newstory"
            component={routerProps => (
              <Story {...routerProps} handleStoryForm={this.handleStoryForm} />
            )}
          />
          <Route
            path="/story/:id"
            component={routerProps => (
              <StoryContent {...routerProps} story={this.state.selectedStory} />
            )}
          />
          <Route path="/join" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
