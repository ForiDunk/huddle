import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Button from './Button';
import './Body.css';

export default () => (
  <div>
    <Section1 />
    <Section2 />
    <Section3 />
    <div className='section4'>
      <h3>Ready To Build Your Community?</h3>
      <Button text={'Get Started For Free'} />
    </div>
  </div>
);