import React from "react";
import Title from "../components/Title";
import API from "../components/API";

class Account extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    API.getSavedArticles().then(articles => this.setState({ articles }));
  }
  render() {
    return (
      <>
        <div className="account">
          {/* {this.props.user?} */}
          <p>
            {this.state.articles.map(art => (
              <li>{art.title}</li>
            ))}
          </p>
        </div>
      </>
    );
  }
}
export default Account;
