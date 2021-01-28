class IndecisionApp extends React.Component{
   
    render() {
        const title = "Indecision Application";
        const subtitle = "React development test";
        const options = ["Item one", "Item two", "Item three"]
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        let title = this.props.title
        console.log(title);

        let subtitle = this.props.subtitle;
        return (
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
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
        const options = this.props.options;
        return (
            <div>
                {/* <ol>
                    <li>Item one</li>
                    <li>Item two</li>
                </ol> */}
                options length = {options.length}
                {
                    options.map(item => <Option key={item} item={item}/>)
                }
                {/* <Option/> */}
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
        const item = this.props.item;
        return (
            <div>
                {item}
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