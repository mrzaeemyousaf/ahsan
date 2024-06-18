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
	  <div id="footer-logo-div">
    <a href="/">
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
          </a>
		
        </div>
	
	<div id="footer-non-logo-div">
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/about">
              Who we are?
            </FooterLink>
            {/* <FooterLink href="#">
              Vision
            </FooterLink>
            <FooterLink href="#">
              Testimonials
            </FooterLink> */}
          </Column>
          
          <Column>
            <Heading>Get Involved</Heading>
            <FooterLink href="/get_involved">
              Participate
            </FooterLink>
            {/* <FooterLink href="#">
              Internships
            </FooterLink>
            <FooterLink href="#">
              Coding
            </FooterLink>
            <FooterLink href="#">
              Teaching
            </FooterLink> */}
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="/contact_us">
              Get Help
            </FooterLink>
            {/* <FooterLink href="#">
              Ahemdabad
            </FooterLink>
            <FooterLink href="#">
              Indore
            </FooterLink>
            <FooterLink href="#">
              Mumbai
            </FooterLink> */}
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
                    <FaFacebook size={25} color="white" />
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
                    <BsTwitterX size={25} color="white" />
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
                    <FaYoutube size={25} color="white" />
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
		color: 'white',
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
