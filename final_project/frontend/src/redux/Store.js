import {createStore} from'redux'
import rootReducers from './reducer/Index';
    


const Store=createStore(rootReducers);


export default Store;