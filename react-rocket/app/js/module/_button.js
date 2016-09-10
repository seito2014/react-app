import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(){
        console.log(this.props.text);
        // window.alert(this);
        // window.alert(e.currentTarget);
        // show($(e.currentTarget));
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.handleClick.bind(this)}>{this.props.text}</button>
        );
    }
}

export default Button;