class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count : 0
        }
    }

    // create 3 methods for +1, -1 and reset
    // use console log to print method name
    // wire up onclick and bind in the constructor

    handleAddOne() {
       // console.log('handleAddOne');
       // this.state.count = this.state.count + 1;
       // console.log(this.state.count);
       this.setState((prevState) => {
           return {
            count : prevState.count + 1
           }
       })
    }

    handleMinusOne () {
        //console.log('handleMinusOne');
       
        this.setState((prevState) => {
            console.log(prevState.count);
            return {
                count : prevState.count - 1
            }
        })
    }

    handleReset(){
       // console.log('handleReset');
       
        this.setState((prevState) => {
            return {
                count : 0
            }
        })
    }
 
    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"))