class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    // create 3 methods for +1, -1 and reset
    // use console log to print method name
    // wire up onclick and bind in the constructor

    handleAddOne() {
        console.log('handleAddOne');
    }

    handleMinusOne () {
        console.log('handleMinusOne');
    }

    handleReset(){
        console.log('handleReset');
    }
 
    render(){
        return (
            <div>
                <h1>Count : 123</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"))