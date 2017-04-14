import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Link to='/signup'>Sign Up</Link>
        </div>
        <div>
          <Link to='/login'>Log In</Link>
        </div>
      </div>
    );
  }
}

export default Greeting;
