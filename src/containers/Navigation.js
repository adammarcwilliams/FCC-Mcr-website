import React from 'react';
import { Component } from 'react';
// sub components
import MainNav from '../components/MainNav';
import NavToggle from '../components/NavToggle';


/*
  Global navigation and control element. handles menu open and close.
*/
class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    return (
      <div className="fill navigation">
        <NavToggle onClick={ () => this.toggleNav() } />
        <MainNav open={this.state.navOpen} onClick={ () => this.toggleNav() }/>
      </div>
    );
  }
}

export default Navigation;
