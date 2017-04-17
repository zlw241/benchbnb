import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  handleInput(e) {
    e.preventDefault()

    const field = e.currentTarget.name
    const val = e.currentTarget.value
    this.setState({[field]: val});
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  handleSubmit(e) {
    this.props.processForm(this.props.formType, this.state).then(
      () => this.redirectIfLoggedIn()
    )
  }

  render() {
    return (
      <div>
        <label>Username
        <input type="text" name="username" onInput={this.handleInput} value={this.state.username} />
        </label><br />
        <label>Password
        <input type="password" name="password" onInput={this.handleInput} value={this.state.password} />
        </label><br />

        <button onClick={this.handleSubmit} id="session_submit">Submit</button>

      </div>
    )


  }
}

export default SessionForm;
