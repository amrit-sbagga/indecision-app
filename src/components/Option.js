import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.item}</p>
        
        <button 
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.item)
            }}
        >
            Remove
        </button>
    </div>
)


export default Option;

// class OptionOld extends React.Component{
//     render(){
//         const item = this.props.item;
//         return (
//             <div>
//                 {item}
//             </div>
//         )
//     }
// }