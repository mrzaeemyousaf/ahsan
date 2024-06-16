import React from 'react';
import Map from '../assets/img/map.png';

const ContactUs = () => {
  return (
    <div style={{ borderRadius: '5px', backgroundColor: '#f2f2f2', padding: '10px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <p>Have questions or want to learn more? Get in touch with us!</p>
      </div>
      <div className="row" style={{ content: '', display: 'table', clear: 'both' }}>
        <div className="column" style={{ float: 'left', width: '50%', marginTop: '6px', padding: '20px' }}>
          <img src={Map} alt="Map" style={{ width: '100%' }} />
        </div>
        <div className="column" style={{ float: 'left', width: '50%', marginTop: '6px', padding: '20px', textAlign: 'left' }}>
          <form action="/action_page.php">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." style={{ width: '100%', padding: '12px', border: '1px solid #ccc', marginTop: '6px', marginBottom: '16px', resize: 'vertical' }} />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." style={{ width: '100%', padding: '12px', border: '1px solid #ccc', marginTop: '6px', marginBottom: '16px', resize: 'vertical' }} />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email_add" placeholder="enter your email..." style={{ width: '100%', padding: '12px', border: '1px solid #ccc', marginTop: '6px', marginBottom: '16px', resize: 'vertical' }} />
            

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ width: '100%', height: '170px', padding: '12px', border: '1px solid #ccc', marginTop: '6px', marginBottom: '16px', resize: 'vertical' }}></textarea>
            <input type="submit" value="Submit" style={{ backgroundColor: '#363748', color: '#edd5a2', padding: '12px 20px', border: 'none', cursor: 'pointer', fontWeight: '500' }} />
          </form>
        </div>
      </div>
      {/* <div style={{ marginTop: '20px' }}>
        <h3 style={{ textAlign: 'center' }}>Contact Details</h3>
        <p style={{ textAlign: 'center' }}>
          Email: <a href="mailto:info@constitutionalorder.org">info@constitutionalorder.org</a><br />
          Phone: (123) 456-7890<br />
          Address: 123 Freedom Avenue, Justice City, Country
        </p>
      </div> */}
    </div>
  );
};

export default ContactUs;
