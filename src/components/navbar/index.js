import React from 'react';
import './index.scss';
import Cart from './cart'


 class Navbar extends React.Component {
   render() {
      return (
        <div className="navbar">
            <div className="navbar-logo">{"TAKHFIFAN"}</div>
            <div className="navbar-space"/>
            <div className="navbar-ordering">{"ordering"}</div>
            <div className="navbar-cart"><Cart /></div>
        </div>
      );
   }
 }

export default Navbar;
