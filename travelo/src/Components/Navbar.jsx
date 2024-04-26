import React from 'react'
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <Nav>
        <div className="brand">
            <div className="container">
                <img src={logo} alt="" />
                Travelo
            </div>
            <div className="Toggle">
            </div>
        </div>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#recommendation'>Recommendation</a></li>
            <li><a href='#tsetimonials'>Testimonials</a></li>
        </ul>
        <button>Connect</button>
      </Nav>
    </>

  )
}
const Nav = Styled.nav;

