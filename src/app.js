console.log('App.js is running!');

const app = {
    title: 'Indecision app',
    subtitle: 'informations',
    options: ['One, Two']
};

//JSX - Javascript XML
const template =( 
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are you options:' : 'No Options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>);

const user = {
    name: 'Matheus',
    age: '25',
    location: 'Texas'
};

function getlocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }else{
        return undefined
    }
} 

//Template two var JSX expression
const templateTwo =( 
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p> }
        {getlocation(user.location)}
    </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);