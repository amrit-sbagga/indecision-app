import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : [] //props.options
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

// IndecisionApp.defaultProps = {
//     options : [] 
//     // "Item one", "Item two", "Item three"]
// }