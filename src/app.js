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


let count = 0;
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
}
const reset = () => {
    console.log('reset');
}
const someId = 'myidhere'
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);