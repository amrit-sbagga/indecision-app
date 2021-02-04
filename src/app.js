import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));


//stateless function component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name : {props.name}</p>
//             <p>Age : {props.age}</p>
//         </div>
//     );
// };

//ReactDOM.render(<User name="Amrit" age={30}/>, document.getElementById("app"))
