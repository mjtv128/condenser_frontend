import React from "react";
import Title from "./Title";
import API from "./API";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    API.signIn(this.state.email, this.state.password)
      .then(data => {
        if (data.error) throw Error(data.error);
        this.props.signIn(data);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="uiicontainer">
        <p> hi@gmail.com bye</p>

        <div className="login-page">
          <div className="log-in">
            <form className="log in form">
              <h1> Log In</h1>
              <input
                id="emailInput"
                label="email"
                onChange={this.handleChange}
                value={this.state.email}
                type="text"
                name="email"
                placeholder="email"
                required
              />
              <br />

              <input
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
                name="password"
                placeholder="password"
                required
              />
              <br />

              <input
                className="button"
                type="submit"
                value="Log In"
                onClick={this.handleSubmit}
              />
            </form>
          </div>

          {/* <div className="register">
                <form className="register-form">
                  <h1>Sign Up</h1>
                  <input
                    onChange={this.handleChange}
                    value={this.state.firstname}
                    type="firstname"
                    name="firstname"
                    placeholder="first name"
                    required
                  />
                  <br />

                  <input
                    onChange={this.handleChange}
                    value={this.state.lastname}
                    type="last name"
                    name="lastname"
                    placeholder="last name"
                    required
                  />
                  <br />

                  <input
                    onChange={this.handleChange}
                    value={this.state.email}
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                  <br />

                  <input
                    onChange={this.handleChange}
                    value={this.state.password}
                    type="password"
                    name="password"
                    placeholder="password"
                    minLength="8"
                    required
                  />
                  <br />

                  <input className="button" type="submit" value="Sign Up" />
                </form> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Login;
