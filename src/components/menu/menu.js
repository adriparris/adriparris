import React, { Component } from "react"
import "./menu.css"
import Logo from "../logo/logo"

class Menu extends React.Component {
  render() {
    return (
      <div>
        <Logo></Logo>
        <div className="menutype">
          <div>ui design</div>
          <div>ux design</div>
          <div>web development</div>
          <div>illustration</div>
          <div>a plane</div>
        </div>
      </div>
    )
  }
}

export default Menu
