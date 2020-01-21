import React from "react";
import categories from "../components/Categories";
import Box from "@material-ui/core/Box";

class NavBar extends React.Component {
  render() {
    const { changeCurrentCategory } = this.props;
    return (
      <div className="categories-container">
        {/* <Box className='categories'> */}
        <h2 onClick={() => changeCurrentCategory(categories.general)}>
          General|
        </h2>
        <h2 onClick={() => changeCurrentCategory(categories.business)}>
          Business|
        </h2>
        <h2 onClick={() => changeCurrentCategory(categories.science)}>
          Science|
        </h2>
        <h2 onClick={() => changeCurrentCategory(categories.technology)}>
          Technology|
        </h2>
        <h2 onClick={() => changeCurrentCategory(categories.health)}>
          Health|
        </h2>
        <h2 onClick={() => changeCurrentCategory(categories.entertainment)}>
          Entertainment|
        </h2>
        <h2 onClick={() => changeCurrentCategory(categories.sports)}>
          Sports|
        </h2>
        <div className="enter-chat">
          <a href="/join">
            <h2 onClick={() => console.log("joins discussion")}>JOIN</h2>
          </a>
        </div>
        {/* </Box>   */}
      </div>
    );
  }
}

export default NavBar;

{
  /* <div class="ui seven item menu">
        <a
          class="item teal active"
          onClick={() => changeCurrentCategory(categories.general)}
        >
          General
        </a>
        <a
          class="item"
          onClick={() => changeCurrentCategory(categories.business)}
        >
          Business
        </a>
        <a
          class="item"
          onClick={() => changeCurrentCategory(categories.health)}
        >
          Health
        </a>
        <a
          class="item"
          onClick={() => changeCurrentCategory(categories.technology)}
        >
          Technology
        </a>
        <a
          class="item"
          onClick={() => changeCurrentCategory(categories.sports)}
        >
          Sports
        </a>
        <a
          class="item"
          onClick={() => changeCurrentCategory(categories.entertainment)}
        >
          Entertainment
        </a>
        <a
          class="item"
          onClick={() => changeCurrentCategory(categories.science)}
        >
          Science
        </a>
      </div> */
}
