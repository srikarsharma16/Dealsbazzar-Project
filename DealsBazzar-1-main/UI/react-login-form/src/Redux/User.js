import {combineReducers, createUser} from 'redux'
import ProfileReducer from './Reducer/ProfileReducer'


var user=createUser(combineReducers({
    user:ProfileReducer,
}),{
    user:[]
})

export default user;