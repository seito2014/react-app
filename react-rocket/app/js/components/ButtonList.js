// import React, {Component, PropTypes} from 'react';
// import Data from '../constants/Data';
// import Button from './Button';
// import { createStore } from 'redux';
// import counter from '../reducers';
//
// const store = createStore(counter);
//
// class ButtonList extends Component {
//
//     render() {
//
//         // const {value, onButtonClick} = this.props;
//
//         const buttonArray = () => {
//             let array = [];
//
//             for (let i = 0; i < 4; i++) {
//                 array.push(
//                     <li className="l-grid-item js-button">
//                         <Button
//                             text={Data.viewData[store.getState()].SELECT[i]}
//                             onClick={() => store.dispatch({ type: 'INCREMENT' })}
//                         />
//                     </li>
//                 );
//             }
//
//             return array;
//         };
//
//         return (
//             <div className="l-quiz-buttons">
//                 <div className="button-list l-grid l-grid-col2">
//                     <ul className="button-list-inner l-grid-inner">
//                         {buttonArray}
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }
// //
// // ButtonList.propTypes = {
// //     value: PropTypes.number.isRequired,
// //     onButtonClick: PropTypes.func.isRequired
// // };
//
// export default ButtonList;



import React, {Component, PropTypes} from 'react';
import Data from '../constants/Data';

class ButtonList extends Component {

    render() {

        const {value, onButtonClick} = this.props;

        const buttonArray = (counter) => {
            let array = [];

            for (let i = 0; i < 4; i++) {
                array.push(
                    <li className="l-grid-item js-button">
                        <button className="button" onClick={onButtonClick}>
                            {Data.viewData[counter].SELECT[i]} | {counter}
                        </button>
                    </li>
                );
            }

            return array;
        };

        return (
            <div className="l-quiz-buttons">
                <div className="button-list l-grid l-grid-col2">
                    <ul className="button-list-inner l-grid-inner">
                        {buttonArray(value)}
                    </ul>
                </div>
            </div>
        )
    }
}

ButtonList.propTypes = {
    value: PropTypes.number.isRequired,
    onButtonClick: PropTypes.func.isRequired
};

export default ButtonList;