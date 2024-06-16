import React from 'react';
import SliderComponent from './Slider.js'; // Import your SliderComponent from its file
import ahsanProfile from '../assets/img/ahsan-profile.jpg';
const cards = [
  {
    image: ahsanProfile,
    title: "Ahsan Y. Chaudhary",
    biography: "Ahsan Chaudhary is first-generation PhD student in Political Science at Louisiana State University where his research focuses on constitutional foundations of authoritarianism and political violence. Before joining LSU, he earned masters degrees in law and International Relations at Universities in Pakistan and England respectively. Besides academic work, he advises citizens and governments eradicate conflict and achieve peace worldwide.",
     designation: "Founder"
  },
  {
    image: ahsanProfile,
    title: "Ahsan Y. Chaudhary",
    biography: "Ahsan Chaudhary is first-generation PhD student in Political Science at Louisiana State University where his research focuses on constitutional foundations of authoritarianism and political violence. Before joining LSU, he earned masters degrees in law and International Relations at Universities in Pakistan and England respectively. Besides academic work, he advises citizens and governments eradicate conflict and achieve peace worldwide.",
     designation: "Founder"
  },
  {
    image: ahsanProfile,
    title: "Ahsan Y. Chaudhary",
    biography: "Ahsan Chaudhary is first-generation PhD student in Political Science at Louisiana State University where his research focuses on constitutional foundations of authoritarianism and political violence. Before joining LSU, he earned masters degrees in law and International Relations at Universities in Pakistan and England respectively. Besides academic work, he advises citizens and governments eradicate conflict and achieve peace worldwide.",
     designation: "Founder"
  }
];
const About = () => {
  return (
    <div>
      <h1>Team</h1>
      <SliderComponent cards={cards}/>
    </div>
  );
}

export default About;
