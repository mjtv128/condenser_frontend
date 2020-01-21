import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h1 className="heading">Join A Discussion</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={event => setName(event.target.value)}
          />
          {/* <TextField
              id="standard-basic"
              label="Name"
              //   defaultValue="User1"
              // margin='normal'
              // variant='outlined'
              color="secondary"
              onChange={event => setName(event.target.value)}
            /> */}
        </div>
        <div>
          <input
            placeholder="Topic"
            className="joinInput"
            type="text"
            onChange={event => setRoom(event.target.value)}
          />
          {/* <TextField
              id="standard-basic"
              label="Topic"
              //   defaultValue="Topic"
              // margin='normal'
              // variant='outlined'
              color="secondary"
              onChange={event => setName(event.target.value)}
            /> */}
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button"} type="submit">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
