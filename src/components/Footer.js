import React from 'react';
import './Footer.css';

export default () => (
  <div className="footer">
    <div className="footer-section">
      <div className="logo"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Phone: +1-543-123-4567</p>
      <p>example@huddle.com</p>
    </div>
    <div className="footer-section">
      <h3>NEWSLETTER</h3>
      <p>To receive tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address</p>
      <form>
        <input type="email" />
        <div className="button-primary subscribe">Subscribe</div>
      </form>
    </div>
  </div>
);