//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'test');
ReactDOM.render(template, document.getElementById('app'));