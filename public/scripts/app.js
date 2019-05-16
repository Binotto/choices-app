'use strict';

console.log('App.js is running!');

//JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
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

//Templatetwo var JSX expression
var templatetwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Matheus Binotto'
    ),
    React.createElement(
        'p',
        null,
        'Age: 25'
    ),
    React.createElement(
        'p',
        null,
        'Location: Curitiba'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templatetwo, appRoot);
