import {combineReducers, createStore} from 'redux'
import ProductReducer from './Reducer/ProductReducer'
import ProductIdReducer from './Reducer/ProductIdReducer'
import UserReducer from './Reducer/UserReducer'
import CategoryReducer from './Reducer/CategoryReducer'

var store=createStore(combineReducers({
    products:ProductReducer,
    product:ProductIdReducer,
    categories:CategoryReducer,
    user : UserReducer
}),{
    products:[],
    product:{},
    categories:[],
    user : { loginstatus : false, token : undefined , username : undefined, userdetails : undefined}
})

export default store;