import React from 'react'
import styled from 'styled-components'
import homeImage from "../assets/hero.png";


export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
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
const Section = styled.section`
  position:relative;
  margin-top:2rem;
  width:100%;
  height:100%;
  .background{
    img{
      width:100%;
      filter:brightness(40%);
    }
  }
  .content{
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    z-index:3;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;
    .title{
      color:black;
      h1{
        font-size:3rem;
        letter-spacing:0.2rem;

      }
      p{
        color:grey;
        margin-top:0.5rem;
        font-size:1.2rem;

      }

    }
    .search{
      display:flex;
      justify-content: center;
      background-color:#ffffffce;
      padding:0.5rem;
      border-radius:0.5rem;
      .container{
        display:flex;
        align-items:center;
        justify-content;center;
        flex-direction:column;
        padding:0 1.5rem;
        label{
          font-size:1.1rem;
          color:#03045e;
        }
        input{
          background-color:transparent;
          border:none;
          text-align:center;
          color:black;
          &[type=""date"]{
            padding-left:3rem;

          }
          &::placeholder{
            color:black;
          }
          &:focus{
            outline:none;

          }
        }
      }
      button{
        padding:1rem;
        cursor:pointer;
        border-radius:0.3rem;
        border:none;
        color:white;
        background-color:#4361ee;
        font-size:1.1rem;
        text-transform:uppercase;
        transition:0.3s ease-in-out;
        &:hover{
          background-color:#023e8a;
        }

      }
    }

  }

`;
