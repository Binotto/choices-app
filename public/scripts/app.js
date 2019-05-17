'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer.'
};

//JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Matheus',
    age: '25',
    location: 'Philadelphia'
};
var userName = 'Matheus';
var userAge = 25;
var userLocation = 'Location: Curitiba';

//Template two var JSX expression
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        user.age
    ),
    React.createElement(
        'p',
        null,
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
