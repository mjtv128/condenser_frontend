import React from "react";
import { Link } from "react-router-dom";

const Title = props => {
  return (
    <div className="title-header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 align="left">CONDENSER</h1>
      </Link>
    </div>
  );
};

export default Title;
