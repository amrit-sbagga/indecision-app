import React from 'react'

const Header = (props) => {
    let title = props.title
    console.log(title);

    let subtitle = props.subtitle;
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{title}</h1>
                {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
            </div>
        </div>
    )
};

Header.defaultProps = {
    title : 'Indecision Application'
};

export default Header;

// class HeaderOld extends React.Component {
//     render() {
//         let title = this.props.title
//         console.log(title);

//         let subtitle = this.props.subtitle;
//         return (
//             <div>
//                 <h1>{title}</h1>
//                 <h2>{subtitle}</h2>
//             </div>
//         )
//     }
// }