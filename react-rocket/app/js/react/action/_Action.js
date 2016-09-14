import Dispatcher from '../dispatcher/_Dispatcher';
import Data from '../constants/_Data';

module.exports = {

    draw: function (num) {
        Dispatcher.dispatch({
            actionType: 'progress',
            value: Data[num]
        });
    }
};
