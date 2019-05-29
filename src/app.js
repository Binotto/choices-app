import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


const Layout = (props) => {
    return(
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
}

const template = (
    <div>
        <div>Title</div>
        <p>This is my page</p>
    </div>
);

ReactDOM.render((
    <Layout>
        <p>This is inline</p>
    </Layout>
), document.getElementById('app'))