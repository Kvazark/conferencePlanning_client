const SET_ID_EVENT = "SET_ID_EVENT"
const defaultState={
    id:'',
}
export default function eventReducer(state=defaultState,action){
    switch (action.type){
        case SET_ID_EVENT:
            return {
                ...state,
                id: action.payload,
            }
        default:
            return state;
    }
}
export const setEventId = id =>({type: SET_ID_EVENT,payload: id})
