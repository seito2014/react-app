import Data from '../constants/Data';

const initialState = Data.index;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {index: state + 1}
        }
        default:
            return state
    }
};

export default reducer;