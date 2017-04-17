import React from 'react';
import { Link } from 'react-router';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    if (this.props.user) {
      return (
        <section>
          <h2>Hello {this.props.user.username}</h2>
          <button onClick={this.props.logout }>Logout</button>
        </section>
      );
    } else {
      return (
        <section>
          <div>
            <Link to='/signup'>Sign Up</Link>
          </div>
          <div>
            <Link to='/login'>Log In</Link>
          </div>
        </section>
      );
    }
  }
}

export default Greeting;
