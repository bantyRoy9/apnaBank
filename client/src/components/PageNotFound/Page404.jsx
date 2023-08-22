import React, { Component } from 'react';
import Nav from '../home/header/nav';
class Page404 extends Component {
  render() {
    return (
      <>
      <Nav/>
      <div className="acessDenied"><div><span style={{fontSize:"55px"}}>404</span><br/><br/>Page Still In Development !!!</div></div>
      </>
    );
  }
}

export default Page404;