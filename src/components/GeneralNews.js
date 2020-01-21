import React from "react";
// import "../GeneralNews.css";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import NewsImage from "../images/news_image.png";
// import LazyLoad from "react-lazy-load";

class GeneralNews extends React.Component {
  render() {
    const { viewPicture, news, selectArticle } = this.props;
    return (
      <>
        <div className="images">
          <div className="img">
            {viewPicture ? (
              <GridList cellHeight={185} cols={3}>
                {news.map(article => (
                  <GridListTile cols={article.cols || 1}>
                    <img
                      src={article.urlToImage}
                      alt=""
                      onClick={() => selectArticle(article)}
                    />
                    <GridListTileBar
                      title={article.title}
                      subtitle={<span>SRC: {article.name}</span>}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${article.title}`}
                          //  className={classes.icon}
                        >
                          <div className="infoiconcolour">
                            <InfoIcon />
                          </div>
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            ) : (
              <div class="ui items">
                {news.map(article => (
                  <div class="item" onClick={() => selectArticle(article)}>
                    <div class="ui small image">
                      <img src={article.urlToImage} />
                    </div>
                    <div class="content">
                      <div class="header">{article.title}</div>
                      <div class="meta">
                        <span class="author">{article.author}</span>
                        <span class="source">{article.name}</span>
                      </div>
                      <div class="description">
                        <p>{article.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default GeneralNews;
