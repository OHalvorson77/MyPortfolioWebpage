import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../header.js';
import Cube from '../cube.js';

function About() {
return (
    <div className="App">
      <Header />
      <div className="about-me-container">
        <div class="left-column">
            <img src="https://media.licdn.com/dms/image/D5603AQEfS8O1ShpJ3w/profile-displayphoto-shrink_400_400/0/1693537442624?e=1699488000&v=beta&t=ZxjGerFxpyasY61AllPu9R390vR62ONvgb0mhrGjsBQ" alt="My photo"></img>
        </div>
        <div class="middle-column">
            <h1>About Me</h1>
            <p>Im Owen Halvorson, a third-year student in the honors computer science bachelor degree program at the University of Ottawa. I grew up in Toronto, Ontario and I've always had a passion for Computer Science. I love writing code in languages such as Java, JavaScript, Python, HTML, CSS, C++, and more! I am interested in all fields of software development and have lots of experience through either work or projects, you can view some of my experiences on this website but even more on my LinkedIn or GitHub.</p>
            <p>In addition to computer science related tasks I also love to participate in various competitive or intramurals sports, as well as involve myself in clubs at uOttawa such as uOPower.</p>
        </div>
        <div class="right-column">
            <Cube />
        </div>

      </div>
    </div>
  );
}

export default About;