import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(){
        window.alert('hi');
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.onClick}>Copy</button>
        );
    }
}

export default Button;