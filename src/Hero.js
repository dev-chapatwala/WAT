import React, { useState } from 'react';
import './assets/HeroContainer.css'
import img from './assets/img.jpg'
import data from './assets/data.json'

function Hero() {
  const [TeamData, setTeamData] = useState(data);
  return (
    <>
    <div className="hero-container">
      <div className="Main-section">
        <div className="main-texts">
          <p className="tagline">
            Time Table <br /> Generator
          </p>
          <p className="basic-info-text">
          Effortlessly Organize Your Time with our User-Friendly Timetable Generator.
          </p>
          <section className="button-section">
            <a href="/form_field">
            <button>
              <p>Generate</p>
            </button>
            </a>
          </section>
        </div>
        <div className="main-image">
          <img src={img} alt="hero" />
          {/* <img src="https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png" alt="hero" /> */}
        </div>
      </div>
    </div>
    <div className="team-section">
        <h1>Our Team</h1>
        <section className="agents-section">
          {TeamData.map((TeamdsData) => {
            return (
              <>
                <div className="agent-div">
                <a href={TeamdsData.portfolio} target='_blank'><img
                    src={TeamdsData.agentImage}
                    alt=""
                  /></a>
                  
                  <h1>{TeamdsData.agentName}</h1>
                {/* {TeamdsData.portfolio && <h3>
                    {}
                 
                  </h3>} */}
                  
                </div>
              </>
            );
          })}
        </section>
      </div>
  </>
  );
}

export default Hero;
