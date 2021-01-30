const obj = {
    "name" : "honey",
    getName(){
        return this.name;
    }
}

//const getName = obj.getName.bind(obj);
const getMyName = obj.getName.bind({"name":"Monty"});
console.log(getMyName());

class IndecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : ["Item one", "Item two", "Item three"]
        }
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options : []
            }
        })
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        //alert(option)
        this.setState(() => {
            return {
                options : [option]
            }
        })
    }

    handleAddOption(option){
        if(option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This item already exists';
        }
        //console.log(option);
        this.setState((prevState) => {
            //prevState.options.push(option);
            return {
                options : prevState.options.concat(option)
            }
        })
    }
   
    render() {
        const title = "Indecision Application";
        const subtitle = "React development test";
       // const options = ["Item one", "Item two", "Item three"]
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions = { this.state.options.length > 0 }
                    handlePick = { this.handlePick }
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption = { this.handleAddOption }/>
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
    // handlePick(){
    //     alert('handlePick')
    // }

    render(){
        return (
            <div>
                <button onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                    What should I do
                </button>
            </div>
        )
    }
}

//options -> component here

class Options extends React.Component{
    constructor(props){
        super(props);
       // this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    // handleRemoveAll(){
    //     alert('handleRemoveAll')
    // }

    render(){
        const options = this.props.options;
        return (
            <div>        
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {/* <button onClick={this.handleRemoveAll}>Remove All</button> */}
                {/* //inline binding
                <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */}
                {/* <ol>
                    <li>Item one</li>
                    <li>Item two</li>
                </ol> */}
                {/* options length = {options.length} */}
                {
                    options.map(item => <Option key={item} item={item}/>)
                }
                {/* <Option/> */}
            </div>
        )
    }
}

class AddOption extends React.Component { 

    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error : undefined
        }
    }

    handleAddOption(event){
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error
            }
        })


        // if(option){
        //   // alert('add option', option) 
        //   this.props.handleAddOption(option)
        // }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Submit</button>
                </form>
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