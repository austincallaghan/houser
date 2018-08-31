import {createStore} from 'redux'; // import + destructuring

import reducer from './redux/reducer'; // import file

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // exports