import React, { useState, useEffect } from 'react';
import '../portfolio.css';
import Header from '../header.js';

function Portfolio() {
return (
    <body>
      <Header />
      <section class="project">
        <h2 class="project-title">Gutters and Windows Website</h2>
        <img class="project-image" src="/Project 1(1).png" alt="Project 1 Image 1"/>
        <img class="project-image" src="/Project 1(2).png" alt="Project 1 Image 2"/>
        <img class="project-image" src="/Project 1(3).png" alt="Project 1 Image 3"/>
        <img class="project-image" src="/Project 1(4).png" alt="Project 1 Image 4"/>
        <img class="project-image" src="/Project 1(5).png" alt="Project 1 Image 5"/>
        <p class="project-description">
            This was a project made for a friend who was starting a window and gutter cleaning company in 2023. He wanted a quick website built to allow potentials customers to read about his buisiness. I built a website that fits those needs with multiple different pages in HTML, CSS and JavaScript. He was originally going to use resurva to schedule his appointments with customers but instead I built a backend database and allowed for customers to view and make appointments, notifying the business by email once that happens. That was made using NodeJS and MySQL.
        </p>
    </section>
    <section class="project">
        <h2 class="project-title">Android Mealer App</h2>
        <img class="project-image2" src="/Project 2(1).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(2).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(3).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(4).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(5).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(6).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(7).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(8).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(9).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(10).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(11).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(12).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(13).png" alt="Project 2 Image 1"/>
        <img class="project-image2" src="/Project 2(14).png" alt="Project 2 Image 1"/>
        <p class="project-description">
           This application was made using Android Studio and Java, with firebase as the database that stores user information. It was made as a version of uber eats but where the food sold is home-made food from home-made cooks. Features of the app can be seen in the photos, each have a desciption of the page under them.
        </p>
    </section>
    <section class="project">
        <h2 class="project-title">Dominant Plane Program (In 4 different paradigms)</h2>
        <video controls autoplay muted loop src="Project 3(1).mp4" width="500"></video>
        <img class="project-image" src="project 3(2).png" alt="Project 3 Image"/>
        <p class="project-description">
            This project was remade 4 times in 4 different paradigms, using the languages Java, GoLang, Scheme, and Prolog. This example right here is the Java (Object-oriented-programming paradigm) version shown with the UML diagram of the classes. This program identifies the three most dominant planes in a given xyz file of points. It also outputs 4 output files containing the points in each of the three dominant planes, as well as the original points file with all the points that were not in one of the three dominant planes.
        </p>
    </section>
    </body>
  );
}

export default Portfolio;