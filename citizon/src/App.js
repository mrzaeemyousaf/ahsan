//export NODE_OPTIONS=--openssl-legacy-provider
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logos/logo.png';
import './App.css';
import Footer from "./components/Footer";
import SliderComponent from './components/Slider';
// import World_const from './components/World_const'; // Import the new component
import About from './components/About.js'; // Import the new component
import GetInvolved from './components/GetInvolved.js';
import ContactUs from './components/ContactUs.js';

import ronaldProfile from '../src/assets/img/ronald.jpeg';
import woodrowProfile from '../src/assets/img/woodrow.jpeg';
import franklinProfile from '../src/assets/img/frank.jpeg';
import bushProfile from '../src/assets/img/bush.jpeg';
import bidenProfile from '../src/assets/img/binden.jpeg';
// import ikProfile from '../assets/img/ik.jpg';
import harryProfile from '../src/assets/img/harry.jpeg';
import billProfile from '../src/assets/img/bill.jpeg'
//import amblum from './assets/img/logo_amblum.png';
import citizen_court from './assets/img/citizens_court.png';
import Example from './components/Vision.js';


const cards = [
  {
    image: bushProfile,
    title: "George Bush Jr.",
    biography: "The United States must defend liberty and justice because these principles are right and true for all people every-where. No nation owns these aspirations, and no nation is exempt from them. Fathers and mothers in all societies want their children to be educated and to live free from poverty and violence. No people on earth yearn to be oppressed, aspire to servitude, or eagerly await the midnight knock of the secret police.",
    designation: "US President"
  },
  {
    image: ronaldProfile,
    title: "Ronald Reagan",
    biography: "The United States must be a beacon for democracy. Unfortunately, many in the world are prevented from seeing our beacon. For many more, it has been distorted; and still others, who are able to see it and are inspired by it, need help in the form of practical assistance.",
    designation: "US President"
  },
  {
    image: harryProfile,
    title: "Harry S. Truman",
    biography: "Democracy alone can supply the vitalizing force to stir the peoples of the world into triumphant action, not only against their human oppressors, but also against their ancient enemies—hunger, misery, and despair.",
    designation: "US President"
  },
  {
    image: franklinProfile,
    title: "Franklin D. Roosevelt",
    biography: "We have learned, that we cannot live alone at peace. We have learned that our own well being is dependent on the well being of other nations far away. We have learned to be citizens of the world, members of the human community.",
    designation: "US President"
  },
  {
    image: billProfile,
    title: "Bill Clinton",
    biography: "[F]ree elections [alone] are not enough. Genuine, lasting democracy also requires respect for human rights, including the right to political dissent; freedom of religion and belief; an independent media capable of engaging an informed citizenry; a robust civil society; the rule of law and an independent judiciary; open and competitive economic structures; mechanisms to safeguard minorities from oppressive rule by the majority; full respect for women’s and workers’ rights; and civilian control of the military.",
    designation: "US President"
  },
  {
    image: bidenProfile,
    title: "Joe Biden",
    biography: "I firmly believe that democracy holds the key to freedom, prosperity, peace, and dignity. We must now demonstrate — with a clarity that dispels any doubt — that democracy can still deliver for our people and for people around the world. We must prove that our model isn’t a relic of history; it’s the single best way to realize the promise of our future. And, if we work together with our democratic partners, with strength and confidence, we will meet every challenge and outpace every challenger.",
    designation: "US President"
  },
  {
    image: woodrowProfile,
    title: "Woodrow Wilson",
    biography: "No peace can last, or ought to last, which does not recognize and accept the principle that governments derive all their just powers from the consent of the governed, and that no right anywhere exists to hand peoples about from sovereignty to sovereignty as if they were property.",
    designation: "US President"
  }
];

function App() {
  return (
    <Router>
      <div>
        {/* The top header which has logo on left div, while slides on right div */}
        <div id="top-header">
          {/* left div */}
          <div id="logo-div">
          <a href="/">
            <img src={logo} alt="logo" className="logo-image" />
          </a>
            
          </div>

          <div id="trending-div">
            {/* <SliderComponent /> */}
            {/* <h1>CITIZENS FOR CONSTITUTIONAL ORDER</h1>
            
              <div id = "slogan-div">
                <p>
                Seeking peace through law
                </p>
              
              </div> */}
              
              
          </div>
        </div>

        
        <div id="topnav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/get_involved">Get Involved</Link>
          {/* <Link to="/world_const">World Constitution</Link>
          <Link to="/visionaries">Visionaries</Link> */}
          <Link to="/contact_us">Contact Us</Link>
          <Link to="/contact_us" className="split">Support Us</Link>
        </div>

        
        
        <div id="body-div"> 
          <Routes>
            <Route path="/" element={
              <div id="home">
                {/* <h1>How we are?</h1> */}

                <div id="top-img">
              <div class="half-width">
                  <img src={citizen_court} alt='citizen_court'>
                  </img>
              </div>
            </div>
        
              
                <p>
                  Citizens for Constitutional Order is exactly what it denotes: a citizens-led initiative that seeks to promote peace through law. As global citizens, we are united by principles of state-religion separation, accountable government, and autonomous sub-units of state. We derive insights from Thomas Paine’s observation that “[g]overnment is not a trade which any man or body of men has a right to set up and exercise for [personal] emolument but is altogether a trust.” We foresee a world where all states are governed under a republican constitution backed by international law. We stand for peace, justice, and equality for all citizens irrespective of color, creed, ethnicity, and territory.
                </p>

              
                  <h1>
                  <span> Our Mission
                  </span>
                  </h1>
                <div className="objectives-list">
                  <ul>
                    <li>Raise awareness and understanding of constitutional rights and responsibilities among citizens.</li>
                    <li>Support policies and initiatives that align with constitutional values.</li>
                    <li>Bring together diverse communities to work towards common goals grounded in constitutional principles.</li>
                  </ul>
                </div>
              

                <h1>
                    <span> 
                      Over Vision
                    </span>
                    
                </h1>
                <Example/>
                  <h2 className='subheading'>
                  We envision a world where:
                  </h2>
                <div className="objectives-list">
                  
                  <ul>
                    <li>Rule of law is upheld, and every citizen receives fair treatment.</li>
                    <li>Constitutional rights are protected and promoted, ensuring freedom and equality for all.</li>
                    <li> Intra and interstate conflicts are minimized, leading to a more harmonious existence.</li>
                  </ul>
                </div>
               
                <h1>
              <span> 
                Our Core Values
              </span>
              </h1>
                <div className="objectives-list">
                  
                  <ul>
                    <li><b>Integrity: </b>Commitment to honesty, transparency, and ethical conduct in all our actions.</li>
                    <li><b>Respect: </b>Upholding the dignity and rights of every individual, as guaranteed by constitution al norms.</li>
                    <li><b>Unity: </b> Fostering a sense of unity through shared values and common goals.</li>
                    <li><b>Empowerment:</b> Educating and empowering citizens to actively participate in democratic processes.</li>
                  </ul>
                </div>
                
                <h1>
                  <span>
                  What We Do
                  </span>
                
                </h1>
                <h2 className='subheading'>
                  Educational Programs
                </h2>
                <p>
                We offer a variety of programs designed to educate citizens about their constitutional rights and responsibilities. From workshops and seminars to online courses and resources, we provide tools to help everyone understand the importance of the constitution.
                </p>

                <h2 className='subheading'>
                Advocacy Initiatives
                </h2>
                <p>
                Our advocacy efforts focus on promoting policies and practices that align with constitutional principles. We work with policymakers, legal experts, and community leaders to influence positive change.
                </p>

                <h2 className='subheading'>
                Community Engagement
                </h2>
                  <p>
                  Engaging with communities is at the heart of our initiative. We organize events, discussions, and campaigns that bring people together to discuss and resolve issues through the lens of the constitution.
                  </p>

                  <h2 className='subheading'>
                  Research and Analysis
                  </h2>
                  <p>
                  Our research team conducts in-depth studies on constitutional issues, providing valuable insights and recommendations to support our mission and vision.
                  </p>

                <h1>
                  <span>
                  What Political Leaders Say
                  </span>
                  </h1>
                <SliderComponent cards={cards} slidesToShow = {3}/>
              </div>
            } />

            <Route path="/" element={<App />} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/get_involved" element={<GetInvolved />} />
            {/* <Route path="/world_const" element={<World_const />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
