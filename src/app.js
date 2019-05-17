console.log('App.js is running!');

var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer.',
};

//JSX - Javascript XML
var template =( 
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>);

var user = {
    name: 'Matheus',
    age: '25',
    location: 'Philadelphia'
};
var userName = 'Matheus';
var userAge = 25;
var userLocation = 'Location: Curitiba';

//Template two var JSX expression
var templateTwo =( 
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>{user.location}</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);