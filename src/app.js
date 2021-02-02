// const obj = {
//     "name" : "honey",
//     getName(){
//         return this.name;
//     }
// }

// //const getName = obj.getName.bind(obj);
// const getMyName = obj.getName.bind({"name":"Monty"});
// console.log(getMyName());

class IndecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : props.options
        }
    }

    //Stateless functional components do not have lifecycle methods
    //Lifecycle components
    // 1 - Mounting
    //        - constructor()
    //        - componentWillMount()
    //        - render()
    //        - componentDidMount() 

    // 2 - Updating
    //        - componentWillReceiveProps()
    //        - shouldComponentUpdate()
    //        - componentWillUpdate()
    //        - render()
    //        - componentDidUpdate()

    // 3 - Unmounting
    //        - componentWillUnmount()

    //called once when component is mounted
    //not associated with stateless component
    componentDidMount(){
        try{
            console.log('componentDidMount!');
            console.log("fetching data");
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options){
                this.setState(() => ({
                    options
                }))
            }
        }catch(e){
            //do nothing
        }     
    }

    //called after state or prop value change
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate!');
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data..!!');
        }
    }

    //fires when component goes away
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleDeleteOption(optionToRemove){
        console.log('handleDeleteOption', optionToRemove);
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    handleDeleteOptions(){
        // this.setState(() => {
        //     return {
        //         options : []
        //     }
        // })

        this.setState(() => ({
            options : []
        }))
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        //alert(option)
        // this.setState(() => {
        //     return {
        //         options : [option]
        //     }
        // })

        this.setState(() => ({
            options : [option]
        }))
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This item already exists';
        }

        //console.log(option);
        // this.setState((prevState) => {
        //     //prevState.options.push(option);
        //     return {
        //         options : prevState.options.concat(option)
        //     }
        // })

        this.setState((prevState) => ({
            options : prevState.options.concat(option)
        }))
    }
   
    render() {
        //const title = "Indecision Application";
        const subtitle = "Put your life in the hands of a computer";
       // const options = ["Item one", "Item two", "Item three"]
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions = { this.state.options.length > 0 }
                    handlePick = { this.handlePick }
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = { this.handleAddOption }/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options : [] 
    // "Item one", "Item two", "Item three"]
}

const Header = (props) => {
    let title = props.title
    console.log(title);

    let subtitle = props.subtitle;
    return (
        <div>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
        </div>
    )
};

Header.defaultProps = {
    title : 'Indecision Application'
}

class HeaderOld extends React.Component {
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


const Action = (props) => {
    return (

        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOptions} >
                What should I do
            </button>
        </div>
    )
}

class ActionOld extends React.Component {
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

const Options = (props) => {
    //console.log(props);
    const options = props.options;
   // console.log(options.length);
    {options.length === 0 && <p>Please add an option to get started</p>}
    return (
        <div>        
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                options.map(item => (
                    <Option 
                       key = {item}
                       item = {item}
                       handleDeleteOption = {props.handleDeleteOption}
                    />
                ))
            }  
        </div>
    )
}

class OptionsOld extends React.Component{
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

        // this.setState(() => {
        //     return {
        //         error
        //     }
        // })

        this.setState(() => ({
            error
        }))

        if(!error){
            event.target.elements.option.value = "";
        }

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

const Option = (props) => {
    const item = props.item;
    return (
        <div>
            {item}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(item)
                }}
            >
                Remove
            </button>
        </div>
    )
}

class OptionOld extends React.Component{
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

//stateless function component

const User = (props) => {
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
        </div>
    );
};

//ReactDOM.render(<User name="Amrit" age={30}/>, document.getElementById("app"))
ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))