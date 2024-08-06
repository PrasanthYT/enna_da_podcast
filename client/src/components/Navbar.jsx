import React from 'react'
import Logo from "../assets/logo.png"

function Navbar() {
  return (
    <>
    <div className="navbar-component-area">
      <div className="navbar-component-logo-and-menu-area">
        <div className="navbar-component-logo-area">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-component-menus-area">
          <p>Episodes</p>
          <p>About</p>
          <p>Share</p>
        </div>
      </div>
      <div className="navbar-component-buttons-area">
        <div className="navbar-component-new-episode-button">
          <button>New Episode</button>
        </div>
        <div className="navbar-component-subscribe-button">
          <button>Subscribe!</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar