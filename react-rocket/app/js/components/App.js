import React, {Component, PropTypes} from 'react';
import ButtonList from './ButtonList'

class App extends Component {

    render() {

        const {rootValue, onButtonListClick} = this.props;

        return (
            <div>
                <ButtonList
                    value={rootValue}
                    onButtonClick={onButtonListClick}
                />
            </div>
        )
    }
}

App.propTypes = {
    rootValue: PropTypes.number.isRequired,
    onButtonListClick: PropTypes.func.isRequired
};

export default App;