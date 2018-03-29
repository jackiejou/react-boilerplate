import React from 'react';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            Home
          </HeaderLink>
          <HeaderLink to="/messages">
            Messages
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
