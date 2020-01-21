import React from "react";
import API from "./API";

const commentsURL = "http://localhost:3000/comments";

class Comment extends React.Component {
  state = {
    content: "",
    comments: []
  };

  handleCommentChange = e => {
    // console.log(e.target.value);
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      content: this.state.content,
      article_name: this.props.articleTitle,
      user_id: 1
    };

    API.post(commentsURL, data).then(result => {
      console.log("resssss", result);
      // this.setState(prevState => ({comments: prevState.comments.concat(result)}));
      this.getComments();
    });
  };

  getComments = () => {
    const cUrl = `${commentsURL}/${this.props.articleTitle}`;
    console.log("currrr", `${commentsURL}/${this.props.articleTitle}`);
    API.get(cUrl).then(result => {
      console.log("api data setting state");
      console.log("result", result);
      this.setState({ comments: result });
    });
  };

  // getComments = () => {
  //   console.log('get comments')
  //   API.get(`${commentsURL}/${this.props.articleTitle}`)
  //   .then(result => console.log(result))
  // }

  componentDidMount() {
    console.log("componentDidMount");
    this.getComments();
  }

  render() {
    console.log(this.state);
    return (
      <>
        <form>
          <input
            type="content"
            name="comment"
            onChange={this.handleCommentChange}
          />
          <button
            type="submit"
            name="submit-comment"
            onClick={this.handleSubmit}
          >
            Comment!
          </button>
        </form>

        <div>
          {this.state.comments.map(comment => {
            return <p>{comment.content}</p>;
          })}
        </div>
      </>
    );
  }
}

export default Comment;
