import React from 'react';
import Slider from 'react-slick';
import './Slider.css';

const Article = ({ data }) => {
  const { image, title, biography, designation } = data;

  return (
    <div className="snip1584">
      <img src={image} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <span>{designation}</span>
        <p className="biography">{biography}</p>
      </div>
    </div>
  );
};

const News = ({ data, slidesToShow }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow, // Initial number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3 // Adjust to show 2 slides on screens between 768px and 500px
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1 // Adjust to show 1 slide on screens smaller than 500px
        }
      }
    ]
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

const SliderComponent = ({ cards, slidesToShow }) => {
  return (
    <div className="app">
      <News data={cards} slidesToShow={slidesToShow} />
    </div>
  );
};

export default SliderComponent;
