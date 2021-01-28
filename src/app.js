class IndecisionApp extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision Application</h1>
                <h2>React development test</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button>What should I do</button>
            </div>
        )
    }
}

//options -> component here

class Options extends React.Component{
    render(){
        return (
            <div>
                {/* <ol>
                    <li>Item one</li>
                    <li>Item two</li>
                </ol> */}
                <Option/>
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                Add option component here
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                option component here
            </div>
        )
    }
}

// const jsx = (
//     <div>
//         <h1>Title</h1>      
//     </div>
// )

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))