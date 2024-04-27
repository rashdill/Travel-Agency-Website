import React from 'react'
import styled from 'styled-components'
import {BsLinkedin,BsFacebook} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";

export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy 2024 Travelo.All rights reserved</span>
      
      <ul className="Links">
            <li><a href='#home'>Home</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#recommend'>Recommendation</a></li>
            <li><a href='#testimonials'>Testimonials</a></li>
      
      </ul>
      <ul className="social_links">
        <li><BsFacebook/></li>
        <li><BsLinkedin/></li>
        <li><AiFillInstagram/></li>
        
        
      </ul>
    </FooterContainer>
  )
}
const FooterContainer = styled.footer``;
