import React from 'react'
import styled from 'styled-components'
import homeImage from "../assets/hero.png";


export default function Hero() {
  return (
    <Section id="hero">
      <div className="backgraund">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Travel To Explore</h1>
          <p>Pack Up + Go is a travel agency that specializes in surprise vacations. Travelers fill out a 
            survey about their travel preferences, budget etc. The travel agent will then plan every aspect of the 
            trip accordingly. This type of vacation is perfect for those who love to travel and be spontaneous, but don’t like creative travel planning. 
            It’s also a great way to explore new places without any preconceived notions or expectations
            </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your Location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date"/>
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date"/>
          </div>
          <button>
            Explore Now
          </button>
        </div>
      </div>

      
    </Section>
  )
}

