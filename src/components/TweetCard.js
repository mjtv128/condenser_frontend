import React from "react";
// import TwitterIcon from "@material-ui/icons/Twitter";÷
import twitter_icon from "../images/twitter_icon.png";

class CardComponent extends React.Component {
  render() {
    let data = this.props.data;

    return (
      <div className="tweet-card-container">
        <div className="tweet-head">
          <div className="tweet-pic">
            <img src={data.user.profile_image_url} alt="" />
          </div>
          <div className="user-details-box">
            <p>{data.user.name}</p>
            <a
              href={`https://twitter.com/${data.user.screen_name}`}
              // target="_blank"
            >{`@${data.user.screen_name}`}</a>
          </div>
          <div className="twitter-logo">
            <img src={twitter_icon} alt="" />
          </div>
        </div>
        <div className="tweet-bottom">
          <div className="tweet-content">
            <p>{data.text}</p>
          </div>
          <div className="date">
            <p>{new Date(data.created_at).toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;

//  <div className="card-panel grey lighten-5 z-depth-3 hoverable thin">
//    <div className="row valign-wrapper">
//      <div className="col s2">
//        <img
//          src={data.user.profile_image_url}
//          alt={data.user.name}
//          className="circle responsive-img"
//        />
//      </div>
//      <div className="col s10 left-align">
//        <span className="black-text">{data.text}</span>
//      </div>
//    </div>
//    <div className="row valign-wrapper right-align chip hoverable">
//      {new Date(data.created_at).toLocaleTimeString()}
//    </div>
//    <div className="row valign-wrapper right-align chip hoverable">
//      <a
//        href={`https://twitter.com/${data.user.screen_name}`}
//        target="_blank"
//      >{`@${data.user.screen_name}`}</a>
//    </div>
//  </div>;
