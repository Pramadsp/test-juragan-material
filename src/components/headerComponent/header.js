import React, { Component } from 'react';

import Navbar from './navbar'
class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
        
    };
  }  

  componentDidMount(){
    let store = this.props.store;
  }

  componentWillUnmount(){
  }

  render(){
    return (
        <React.Fragment>
          <Navbar store = {this.props.store} />
        </React.Fragment>
    );
  }
}

export default Header;
