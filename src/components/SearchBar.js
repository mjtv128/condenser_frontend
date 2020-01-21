import React from "react";
import LogIn from "./Login";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const SearchBar = ({ user, signOut, handleSearch }) => {
  return (
    <>
      <div className="Add Story">
        <div className="add-story" align="right">
          <a href="/newstory">
            <Button color="secondary">Add Story</Button>
          </a>
        </div>
      </div>
      {/* <div className="search-bar"> */}
      {/* <div className="search">
            <form>
              <TextField
                id="filled-basic"
                label="Search News...."
                variant="filled"
                onChange={handleSearch}
              />
            </form>
          </div> */}

      {/* <div className="login-account">
            {user ? (
              <>
                <div className="Account">
                  <div className="Account" align="right">
                    <a href="/account">Account</a>
                  </div>
                </div>
                <div className="signout">
                  <button onClick={signOut}>Sign Out</button>
                </div>
              </>
            ) : (
              <div className="Logging-in">
                <div className="SignIn" align="right">
                  <a href="/login">Log In / Sign Up</a>
                </div>
              </div>
            )}
          </div>

          <Button variant="outlined" color="secondary" >
            <AccountCircleIcon />
            &nbsp; &nbsp; Log In/ Sign Up
          </Button>

          <div className="Add Story">
            <div className="add-story" align="right">
              <a href="/newstory">Add Story</a>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default SearchBar;
