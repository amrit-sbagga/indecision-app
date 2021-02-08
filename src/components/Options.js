import React from 'react';
import Option from './Option';

const Options = (props) => {
    //console.log(props);
    //const options = props.options;
   // console.log(options.length);
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
    return (
        <div>      
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>  
                <button 
                    className="button button--link"
                    onClick={props.handleDeleteOptions}>
                        Remove All
                    </button>
                {
                    props.options.map(item => (
                        <Option 
                        key = {item}
                        item = {item}
                        handleDeleteOption = {props.handleDeleteOption}
                        />
                    ))
                }
            </div>  
        </div>
    )
};

export default Options;

// class OptionsOld extends React.Component{
//     constructor(props){
//         super(props);
//        // this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     }

//     // handleRemoveAll(){
//     //     alert('handleRemoveAll')
//     // }

//     render(){
//         const options = this.props.options;
//         return (
//             <div>        
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {/* <button onClick={this.handleRemoveAll}>Remove All</button> */}
//                 {/* //inline binding
//                 <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */}
//                 {/* <ol>
//                     <li>Item one</li>
//                     <li>Item two</li>
//                 </ol> */}
//                 {/* options length = {options.length} */}
//                 {
//                     options.map(item => <Option key={item} item={item}/>)
//                 }
//                 {/* <Option/> */}
//             </div>
//         )
//     }
// }
