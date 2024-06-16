import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
// import ahsanProfile from '../assets/img/ahsan-profile.jpg';
// import ronaldProfile from '../assets/img/ronald.jpeg';
// import woodrowProfile from '../assets/img/woodrow.jpeg';
// import franklinProfile from '../assets/img/frank.jpeg';
// import bushProfile from '../assets/img/bush.jpeg';
// import bidenProfile from '../assets/img/binden.jpeg';
// // import ikProfile from '../assets/img/ik.jpg';
// import harryProfile from '../assets/img/harry.jpeg';
// import billProfile from '../assets/img/bill.jpeg';

// const cards = [
//   {
//     image: bushProfile,
//     title: "George Bush Jr.",
//     biography: "The United States must defend liberty and justice because these principles are right and true for all people every-where. No nation owns these aspirations, and nonation is exempt from them. Fathers and mothers in all societies want their children to be educated and to live free from poverty and violence. No people on earth yearn to be oppressed, aspire to servitude, or eagerly await the midnight knock of the secret police.",
//     designation: "US President"
//   },
//   {
//     image: ronaldProfile,
//     title: "Ronald Reagan",
//     biography: "The United States must be a beacon for democracy. Unfortunately, many in the world are prevented from seeing our beacon. For many more, it has been distorted; and still others, who are able to see it and are inspired by it, need help in the form of practical assistance.",
//     designation: "US President"
//   },
//   {
//     image: harryProfile,
//     title: "Harry S. Truman",
//     biography: "Democracy alone can supply the vitalizing force to stir the peoples of the world into triumphant action, not only against their human oppressors, but also against their ancient enemies—hunger, misery, and despair.",
//     designation: "Us President"
//   },
//   {
//     image: franklinProfile,
//     title: "Franklin D. Roosevelt",
//     biography: "We have learned, that we cannot live alone at peace. We have learned that our own well being is dependent on the well being of other nations far away. We have learned to be citizens of the world, members of the human community.",
//     designation: "Us President"
//   },
//   {
//     image: billProfile,
//     title: "Bill Clinton",
//     biography: "[F]ree elections [alone] are not enough. Genuine, lasting democracy also requires respect for human rights, including the right to political dissent; freedom of religion and belief; an independent media capable of engaging an informed citizenry; a robust civil society; the rule of law and an independent judiciary; open and competitive economic structures; mechanisms to safeguard minorities from oppressive rule by the majority; full respect for women’s and workers’ rights; and civilian control of the military.",
//     designation: "Us President"
//   },
//   {
//     image: bidenProfile,
//     title: "Joe Biden",
//     biography: "I firmly believe that democracy holds the key to freedom, prosperity, peace, and dignity. We must now demonstrate — with a clarity that dispels any doubt — that democracy can still deliver for our people and for people around the world. We must prove that our model isn’t a relic of history; it’s the single best way to realize the promise of our future. And, if we work together with our democratic partners, with strength and confidence, we will meet every challenge and outpace every challenger.",
//     designation: "Us President"
//   },
//   {
//     image: woodrowProfile,
//     title: "Woodrow Wilson",
//     biography: "No peace can last, or ought to last, which does not recognize and accept the principle that governments derive all their just powers from the consent of the governed, and that no right anywhere exists to hand peoples about from sovereignty to sovereignty as if they were property.",
//     designation: "Us President"
//   }
// ];

const Article = ({ data }) => {
  const { image, title, biography, designation } = data;

  return (
    <div className="snip1584">
      <img src={image} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <span>{designation}</span>
        <p className="biography">{biography}</p> {/* Added class for specificity */}
      </div>
    </div>
  );
};

const News = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="news">
      <Slider {...settings}>
        {data.length > 0 ? data.map((item, index) => (
          <div key={index}>
            <Article data={item} />
          </div>
        )) : <p>Please add some cards</p>}
      </Slider>
    </div>
  );
};

const SliderComponent = ({cards}) => {
  return (
    <div className="app">
      <News data={cards} />
    </div>
  );
};

export default SliderComponent;
