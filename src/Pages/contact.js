import React, { useState, useEffect } from 'react';
import '../contact.css';
import Header from '../header.js';

function Contact() {
return (
    <body>
      <Header />
      <section class="contact-info">
        <div class="contact-info-item">
            <img src="https://icon-library.com/images/email-icon-white-png/email-icon-white-png-25.jpg" alt="Email Photo"/>
            <p>Personal Email: <a href="mailto:owenhalvie@gmail.com">owenhalvie@gmail.com</a></p>
            <p>School Email: <a href="mailto:ohalv049@uottawa.ca">ohalv049@uottawa.ca</a></p>
        </div>
        <div class="contact-info-item">
            <img src="https://th.bing.com/th/id/OIP.ci_za2qZOESK4_QIx1qUcwHaHu?pid=ImgDet&rs=1" alt="Phone Photo"/>
            <p>Phone: <a href="tel:+123456789">+1 416-729-6929</a></p>
        </div>
        <div class="contact-info-item">
            <img src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/09/LinkedIN1.png" alt="LinkedIn Photo"/>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/owen-halvorson-5ba201236" target="_blank">Owen Halvorson LinkedIn Profile</a></p>
        </div>
    </section>
    </body>
  );
}

export default Contact;