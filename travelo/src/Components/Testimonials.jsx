import React from 'react'
import StyleSheet from 'styled-components';
import avatarImage from "../assets/avatarImage.jpeg";
import styled from 'styled-components';


export default function Testimonials() {
  return (
    <Section>
      <div className="title">
        <h2>Happy Customer</h2>
      </div>
      <div className="testimonials">
        <p>
          I am happy about this service..
        </p>
        <div className="info">
          <img src={avatarImage} alt="" />
          <div className="details">
            <h4>Suneth Perera</h4>
            <span>CEO - </span>
          </div>  
        </div>
      </div>
      <div className="testimonials">
        <p>
          I am happy about this service..
        </p>
        <div className="info">
          <img src={avatarImage} alt="" />
          <div className="details">
            <h4>Suneth Perera</h4>
            <span>CEO - </span>
          </div>  
        </div>
      </div>
      <div className="testimonials">
        <p>
          I am happy about this service..
        </p>
        <div className="info">
          <img src={avatarImage} alt="" />
          <div className="details">
            <h4>Suneth Perera</h4>
            <span>CEO - </span>
          </div>  
        </div>
      </div>
    </Section>
  )
}
const Section = styled.section``;