import React from 'react';
import Option from './Option';

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
