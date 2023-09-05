import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../header.js';

function Resume() {
return (
    <div className="App">
      <Header />
      <div className="about-me-container">
        <div class="left-column-resume">
            <img src="/Resume screenshot.png" alt="My photo"></img>
        </div>
        <div class="middle-column">
            <h1>Resume Overview</h1>
            <p>I attend the Univeristy of Ottawa for Computer Science and have an 8.0/10 GPA To Date (September 1, 2023). I made a large improvement from first to second year and in both semesters in second year I was rewarded a merits scholarship along with dean's list.</p>
            <p>Prior to my more relevent experiences I've worked in various customer service related jobs, where I developed various communication, collaboration, and time-management skills.</p>
            <p>I am part of the co-op program at the University of Ottawa, and my first co-op oppurtunity was for BMO in the summer of 2023, where I worked as a data analyst. My back-end roles were to develop SAS and SQL scripts to produce correct weekly and yearly results on a scorecard for financial planner, teams, regions, and nation. My front-end tasks included using services such as SSMS and SSRS, along with JavaScript, C++ and VisualBasic languages to create a viewable website that results can be seen each week by members of the workforce. There were some individual projects I had to work on such as developing an automated macro function which tests incoming tables for outliers and sends out alerts to members of the team, this was created with my knowledge of Probability and Statistics from second-year univeristy. Wee used github and tortoise to commit and collaborate our work as a team.</p>
            <p>Both projects listed here are included under the "Projects info and Gallary Section", if you wish to see and read about them view there, to see more tasks I've worked on please check out my GitHub.</p>
            <p>A portion of my technical skills are listed on the Resume, this website was made with the REACT framework so now I have familiarity with that framework as well!.</p>
        </div>
        

      </div>
    </div>
  );
}

export default Resume;