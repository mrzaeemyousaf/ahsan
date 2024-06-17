import React from 'react';
import SliderComponent from './Slider.js'; // Import your SliderComponent from its file
import ahsanProfile from '../assets/img/ahsan_new.jpeg';
import './Slider.css'; // Ensure styles are imported

const cards = [
  {
    image: ahsanProfile,
    title: "Ahsan Y. Chaudhary",
    biography: "Ahsan Y. Chaudhary is a lawyer-turned-political theorist who studies state as if it were a living organism, prone to conflict (disease) and curable through constitution (medicine). Born to a family of peasants in a small village near Kanganpur, Kasur, Pakistan, Ahsan received bachelor’s degree in arts before moving to Lahore for higher education. There, he studied, taught, and practiced law only to be inspired by philosophical questions concerning the foundations of a just state and society which led him pursue an academic career eventually. Ahsan travelled to the United Kingdom for a master’s degree in international relations. Later, he got admission for a PhD in the United States, where he currently researches the constitutional foundations of political order. Ahsan is passionate about peace, justice, and equality. He firmly believes that just as medicine cures disease, the republican constitution can neutralize war and poverty worldwide.",
    designation: "Founder"
  },
  {
    image: ahsanProfile,
    title: "Ahsan Y. Chaudhary",
    biography: "Ahsan Y. Chaudhary is a lawyer-turned-political theorist who studies state as if it were a living organism, prone to conflict (disease) and curable through constitution (medicine). Born to a family of peasants in a small village near Kanganpur, Kasur, Pakistan, Ahsan received bachelor’s degree in arts before moving to Lahore for higher education. There, he studied, taught, and practiced law only to be inspired by philosophical questions concerning the foundations of a just state and society which led him pursue an academic career eventually. Ahsan travelled to the United Kingdom for a master’s degree in international relations. Later, he got admission for a PhD in the United States, where he currently researches the constitutional foundations of political order. Ahsan is passionate about peace, justice, and equality. He firmly believes that just as medicine cures disease, the republican constitution can neutralize war and poverty worldwide.",
    designation: "Founder"
  },
  {
    image: ahsanProfile,
    title: "Ahsan Y. Chaudhary",
    biography: "Ahsan Y. Chaudhary is a lawyer-turned-political theorist who studies state as if it were a living organism, prone to conflict (disease) and curable through constitution (medicine). Born to a family of peasants in a small village near Kanganpur, Kasur, Pakistan, Ahsan received bachelor’s degree in arts before moving to Lahore for higher education. There, he studied, taught, and practiced law only to be inspired by philosophical questions concerning the foundations of a just state and society which led him pursue an academic career eventually. Ahsan travelled to the United Kingdom for a master’s degree in international relations. Later, he got admission for a PhD in the United States, where he currently researches the constitutional foundations of political order. Ahsan is passionate about peace, justice, and equality. He firmly believes that just as medicine cures disease, the republican constitution can neutralize war and poverty worldwide.",
    designation: "Founder"
  }
];
const About = () => {
  return (
    <div>
      <h1>Team</h1>
      <SliderComponent cards={cards} slidesToShow= {1} />
    </div>
  );
}

export default About;
