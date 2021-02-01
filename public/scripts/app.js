'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const obj = {
//     "name" : "honey",
//     getName(){
//         return this.name;
//     }
// }

// //const getName = obj.getName.bind(obj);
// const getMyName = obj.getName.bind({"name":"Monty"});
// console.log(getMyName());

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
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


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('componentDidMount!');
        }

        //called after state or prop value change

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log('componentDidUpdate!');
        }

        //fires when component goes away

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            console.log('handleDeleteOption', optionToRemove);
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // this.setState(() => {
            //     return {
            //         options : []
            //     }
            // })

            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            //alert(option)
            // this.setState(() => {
            //     return {
            //         options : [option]
            //     }
            // })

            this.setState(function () {
                return {
                    options: [option]
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This item already exists';
            }

            //console.log(option);
            // this.setState((prevState) => {
            //     //prevState.options.push(option);
            //     return {
            //         options : prevState.options.concat(option)
            //     }
            // })

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //const title = "Indecision Application";
            var subtitle = "Put your life in the hands of a computer";
            // const options = ["Item one", "Item two", "Item three"]
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: ["Item one", "Item two", "Item three"]
};

var Header = function Header(props) {
    var title = props.title;
    console.log(title);

    var subtitle = props.subtitle;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            title
        ),
        subtitle && React.createElement(
            'h2',
            null,
            subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision Application'
};

var HeaderOld = function (_React$Component2) {
    _inherits(HeaderOld, _React$Component2);

    function HeaderOld() {
        _classCallCheck(this, HeaderOld);

        return _possibleConstructorReturn(this, (HeaderOld.__proto__ || Object.getPrototypeOf(HeaderOld)).apply(this, arguments));
    }

    _createClass(HeaderOld, [{
        key: 'render',
        value: function render() {
            var title = this.props.title;
            console.log(title);

            var subtitle = this.props.subtitle;
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    title
                ),
                React.createElement(
                    'h2',
                    null,
                    subtitle
                )
            );
        }
    }]);

    return HeaderOld;
}(React.Component);

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick,
                disabled: !props.hasOptions },
            'What should I do'
        )
    );
};

var ActionOld = function (_React$Component3) {
    _inherits(ActionOld, _React$Component3);

    function ActionOld() {
        _classCallCheck(this, ActionOld);

        return _possibleConstructorReturn(this, (ActionOld.__proto__ || Object.getPrototypeOf(ActionOld)).apply(this, arguments));
    }

    _createClass(ActionOld, [{
        key: 'render',

        // handlePick(){
        //     alert('handlePick')
        // }

        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handlePick,
                        disabled: !this.props.hasOptions
                    },
                    'What should I do'
                )
            );
        }
    }]);

    return ActionOld;
}(React.Component);

//options -> component here

var Options = function Options(props) {
    var options = props.options;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        options.map(function (item) {
            return React.createElement(Option, {
                key: item,
                item: item,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var OptionsOld = function (_React$Component4) {
    _inherits(OptionsOld, _React$Component4);

    function OptionsOld(props) {
        _classCallCheck(this, OptionsOld);

        return _possibleConstructorReturn(this, (OptionsOld.__proto__ || Object.getPrototypeOf(OptionsOld)).call(this, props));
        // this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    // handleRemoveAll(){
    //     alert('handleRemoveAll')
    // }

    _createClass(OptionsOld, [{
        key: 'render',
        value: function render() {
            var options = this.props.options;
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteOptions },
                    'Remove All'
                ),
                options.map(function (item) {
                    return React.createElement(Option, { key: item, item: item });
                })
            );
        }
    }]);

    return OptionsOld;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this5.handleAddOption = _this5.handleAddOption.bind(_this5);
        _this5.state = {
            error: undefined
        };
        return _this5;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(event) {
            event.preventDefault();

            var option = event.target.elements.option.value.trim();

            var error = this.props.handleAddOption(option);

            // this.setState(() => {
            //     return {
            //         error
            //     }
            // })

            this.setState(function () {
                return {
                    error: error
                };
            });

            // if(option){
            //   // alert('add option', option) 
            //   this.props.handleAddOption(option)
            // }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Option = function Option(props) {
    var item = props.item;
    return React.createElement(
        'div',
        null,
        item,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(item);
                }
            },
            'Remove'
        )
    );
};

var OptionOld = function (_React$Component6) {
    _inherits(OptionOld, _React$Component6);

    function OptionOld() {
        _classCallCheck(this, OptionOld);

        return _possibleConstructorReturn(this, (OptionOld.__proto__ || Object.getPrototypeOf(OptionOld)).apply(this, arguments));
    }

    _createClass(OptionOld, [{
        key: 'render',
        value: function render() {
            var item = this.props.item;
            return React.createElement(
                'div',
                null,
                item
            );
        }
    }]);

    return OptionOld;
}(React.Component);

// const jsx = (
//     <div>
//         <h1>Title</h1>      
//     </div>
// )

//stateless function component

var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name : ',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Age : ',
            props.age
        )
    );
};

//ReactDOM.render(<User name="Amrit" age={30}/>, document.getElementById("app"))
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
