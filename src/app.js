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

const appRoot = document.getElementById('app');

