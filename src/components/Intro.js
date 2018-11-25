import React from 'react';
import './Intro.css';
import Button from './Button';

export default () => (
  <div className="intro">
    <h2>Build The Community Your Fans Will Love</h2>
    <p className="description">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in geniune discussion.</p>
    <Button text={'Get Started For Free'} />
    <div className="screen-mockups"></div>
    <div className="stats">
      <div className="community">
        <div className="community-icon"></div>
        <p className="stats-heading">1.4k+</p>
        <p className="stats-description">Communities Formed</p>
      </div>
      <div className="messages">
        <div className="messages-icon"></div>
        <p className="stats-heading">2.7m+</p>
        <p className="stats-description">Messages Sent</p>
      </div>
    </div>

  </div>
);