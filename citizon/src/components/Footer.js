import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {FaFacebook} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
// import {FaInstagram} from 'react-icons/fa'


import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import logo from '../logos/logo_img.png'; // Ensure you have the correct path

const Footer = () => {
  return (
    <Box>
      <h3 style={{
		marginTop: "0",
		color: 'var(--golden_color)',
		fontFamily: 'Garamond',
		fontSize: '1.5rem',
		textAlign: 'center',
		wordBreak: 'normal',
		fontWeight: 'bold',
		lineHeight: '3.5rem',
		overflowWrap: 'anywhere',
	  }}>
       CITIZENS FOR CONSTITUTIONAL ORDER
      </h3>
	  <div id="footer-logo-div">
		<img
            src={logo}
            alt="Logo"
            style={{
				float: "left",
				paddingLeft: "1px",
              width: "100px",
              height: "100px",
            }}
          />
        </div>
	
	<div id="footer-non-logo-div">
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">
              Aim
            </FooterLink>
            <FooterLink href="#">
              Vision
            </FooterLink>
            <FooterLink href="#">
              Testimonials
            </FooterLink>
          </Column>
          
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">
              Writing
            </FooterLink>
            <FooterLink href="#">
              Internships
            </FooterLink>
            <FooterLink href="#">
              Coding
            </FooterLink>
            <FooterLink href="#">
              Teaching
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">
              Uttar Pradesh
            </FooterLink>
            <FooterLink href="#">
              Ahemdabad
            </FooterLink>
            <FooterLink href="#">
              Indore
            </FooterLink>
            <FooterLink href="#">
              Mumbai
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <a href="https://www.facebook.com/ccnorder/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} color="var(--golden_color)" />
                </a>
                </span>
              </i>
            </FooterLink>
            {/* <FooterLink href="#">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <FaInstagram/>
                </span>
              </i>
            </FooterLink> */}
            <FooterLink href="https://x.com/ccnorder">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <a href="https://x.com/ccnorder" target="_blank" rel="noopener noreferrer">
                    <BsTwitterX size={30} color="var(--golden_color)" />
                  </a>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                
                <a href="https://x.com/ccnorder" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={30} color="var(--golden_color)" />
                </a>
                
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        {/* Add the logo here */}
      </FooterContainer>
	  </div>
	  <p style={{
		marginTop: "0",
		color: 'var(--golden_color)',
		fontFamily: 'Garamond',
		fontSize: '1rem',
		textAlign: 'center',
		wordBreak: 'normal',
		lineHeight: '3.5rem',
		overflowWrap: 'anywhere'
	  }}>
		&copy; Citizens for Constitutional Order inc.
	  </p>
    </Box>
  );
};
export default Footer;
