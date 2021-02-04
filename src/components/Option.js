import React from 'react';

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