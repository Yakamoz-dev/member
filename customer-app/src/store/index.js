import { createStore,applyMiddleware,compose} from 'redux';
 import reducer from './reducer';
 import thunk from 'redux-thunk';
 
 //添加redux工具
 const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 
 const enhancerss = compose(
     applyMiddleware(thunk),composeEnhancers
 );
 const store=createStore(reducer,enhancerss);
 
 export default store;