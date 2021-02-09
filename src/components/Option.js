import React from 'react';

const Option = (props) => (
    <div className="option">
        {props.item}
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