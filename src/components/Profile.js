import React, { Component } from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div>Welcome {user}</div>
      </div>
    );
  }
}
