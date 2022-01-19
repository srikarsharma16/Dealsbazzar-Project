import * as actiontype from '../Action/Action'

export default function ProfileReducer(state=[],action){
    switch(action.type){
        case actiontype.LOAD_USERS:return action.payload.users
        case actiontype.UPDATE_USERS:return state.map(user=>{
           if(user.userId==action.payload.userId){
                
                return user
            }
            else
            {
                return user
            }
        })
        default: return state
    }
}