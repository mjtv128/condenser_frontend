import React from "react";
import Comment from "./Comment";
// import Loading from "react-loading-bar";
import API from "./API";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const endPoint = "https://api.meaningcloud.com/summarization-1.0";
const articlesURL = "http://localhost:3000/articles/save";

class SummaryNews extends React.Component {
  state = {
    summary: "",
    toggleFullArticle: false,
    saved: [],
    save: []
  };

  showFullArticle = () => {
    this.setState({
      toggleFullArticle: !this.state.toggleFullArticle
    });
  };

  handleSaveToPost = () => {
    const data = {
      title: this.props.article.title,
      // urltoimage: this.props.article.urlToImage,
      article_name: this.props.article.title,
      user_id: 1
    };
    console.log(data);
    API.post(articlesURL, data).then(result => {
      console.log(result);
      // this.setState({ saved: [...this.state.saved, result]})
      // console.log(this.state.saved)
      this.getSavedArticles();
      // console.log(this.state.saved)
    });
  };

  getSavedArticles = () => {
    API.get(`${articlesURL}/${this.props.article.title}`).then(result => {
      console.log("result", result);

      this.setState({ saved: result });
      // console.log(this.state.saved)
    });
  };

  componentDidMount() {
    fetch(
      `https://api.meaningcloud.com/summarization-1.0?key=baa48f72b34a5a142bcf763e7bd92af7&url=${this.props.article.url}&sentences=10`
    )
      .then(res => res.json())
      .then(result => this.setState({ summary: result.summary }));
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handleSaveToPost}>
          Save Article
        </button>

        <div className="Article">
          <h1>{this.props.article.title}</h1>
          <h2>{this.props.article.author}</h2>
          <a href={this.props.article.url}>
            <Button color="secondary" variant="filled">
              Link To Article
            </Button>
          </a>
          <Link to="/join">
            <Button>Lets Discuss</Button>
          </Link>
          <div className="article-pic">
            <img src={this.props.article.urlToImage} alt="" />
          </div>
          {/* <div className="ldBar">
        <p>{this.state.summary}</p>
        </div> */}

          <p>{this.props.article.publishedAt}</p>
          <p>{this.state.summary}</p>
          {/* <button type="button" onClick={this.showFullArticle}>
          Show Full Article
        </button>
        <p>
          {this.state.toggleFullArticle ? this.props.article.content : null}
        </p> */}
          <Comment articleTitle={this.props.article.title} />
        </div>

        {/* <p>{this.state.save.map(art => art.title)}</p> */}
      </>
    );
  }
}

export default SummaryNews;
