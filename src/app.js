class IndecisionApp extends React.Component{
     render(){
        return(
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
     }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision app</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                Options components here.
                <Option />
            </div>
        );
    }
}
class Option extends React.Component {
    render(){
        return (
            <div>
                Option component here.
            </div>
        );
    }
}

class AddOption extends React.Component{
    render() {
        return (
            <div>
                <form>
                    <input type="text"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))