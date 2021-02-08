import React from 'react';
//import ReactDOM from 'react-dom';

export default class AddOption extends React.Component { 

    state = {
        error : undefined
    }

    constructor(props){
        super(props);
        //this.handleAddOption = this.handleAddOption.bind(this)
        // this.state = {
        //     error : undefined
        // }
    }

    //handleAddOption(event){
    handleAddOption = (event) => {
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
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}