import React from "react";
import GeneralNews from "../components/GeneralNews";
import SummaryNews from "../components/SummaryNews";
import API from "../components/API";
import StoryPost from "../components/StoryPost";

const articlesApiUrl = "http://localhost:3000/articles/";

const storiesURL = "http://localhost:3000/stories";

class GeneralContainer extends React.Component {
  state = {
    general: [],
    business: [],
    health: [],
    technology: [],
    sports: [],
    entertainment: [],
    science: [],
    pictureView: true
  };

  handleToggle = () => {
    this.setState({
      pictureView: !this.state.pictureView
    });
  };

  renderContent = () => {
    if (this.props.selectedArticle !== undefined) {
      return <SummaryNews article={this.props.selectedArticle} />;
    } else if (this.props.currentCategory === "General") {
      return (
        <GeneralNews
          news={this.state.general}
          selectArticle={this.props.selectArticle}
          viewPicture={this.state.pictureView}
        />
      );
    } else if (this.props.currentCategory === "Business") {
      return (
        <GeneralNews
          news={this.state.business}
          selectArticle={this.props.selectArticle}
          viewPicture={this.state.pictureView}
        />
      );
    } else if (this.props.currentCategory === "Health") {
      return (
        <GeneralNews
          news={this.state.health}
          selectArticle={this.props.selectArticle}
          viewPicture={this.state.pictureView}
        />
      );
    } else if (this.props.currentCategory === "Technology") {
      return (
        <GeneralNews
          news={this.state.technology}
          selectArticle={this.props.selectArticle}
          viewPicture={this.state.pictureView}
        />
      );
    } else if (this.props.currentCategory === "Sports") {
      return (
        <GeneralNews
          news={this.state.sports}
          selectArticle={this.props.selectArticle}
          viewPicture={this.state.pictureView}
        />
      );
    } else if (this.props.currentCategory === "Entertainment") {
      return (
        <GeneralNews
          news={this.state.entertainment}
          selectArticle={this.props.selectArticle}
          viewPicture={this.state.pictureView}
        />
      );
    } else if (this.props.currentCategory === "Science") {
      return (
        <GeneralNews
          news={this.state.science}
          selectArticle={this.props.selectArticle}
          viewPicture={this.state.pictureView}
        />
      );
    } else if (this.props.currentCategory === "Stories") {
      return (
        <GeneralNews
          news={this.state.stories}
          selectArticle={this.props.selectArticle}
          viewPicture={this.state.pictureView}
        />
      );
    }
  };

  componentDidMount() {
    API.get(`${articlesApiUrl}general`).then(general =>
      this.setState({ general })
    );

    API.get(`${articlesApiUrl}business`).then(business =>
      this.setState({ business })
    );

    API.get(`${articlesApiUrl}science`).then(science =>
      this.setState({ science })
    );

    API.get(`${articlesApiUrl}technology`).then(technology =>
      this.setState({ technology })
    );

    API.get(`${articlesApiUrl}health`).then(health =>
      this.setState({ health })
    );

    API.get(`${articlesApiUrl}entertainment`).then(entertainment =>
      this.setState({ entertainment })
    );

    API.get(`${articlesApiUrl}sports`).then(sports =>
      this.setState({ sports })
    );
  }

  render() {
    return (
      <>
        {this.props.selectedArticle !== undefined ? null : (
          <button onClick={this.handleToggle} type="button">
            Switch Layout
          </button>
        )}
        <div className="main-container">
          <div className="images-grid">{this.renderContent()}</div>
        </div>
      </>
    );
  }
}

export default GeneralContainer;
