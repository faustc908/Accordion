import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';

const data = [
    {
      summary: 'Section 1',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      summary: 'Section 2',
      details: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      summary: 'Section 3',
      details: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]


ReactDOM.render(<App summary = {data.summary} details = {data.details} />, document.getElementById('root'));