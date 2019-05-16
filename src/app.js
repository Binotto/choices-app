console.log('App.js is running!');

//JSX - Javascript XML
var template =( 
<div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>);


//Templatetwo var JSX expression
var templatetwo =( 
    <div>
        <h1>Matheus Binotto</h1>
        <p>Age: 25</p>
        <p>Location: Curitiba</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templatetwo, appRoot);