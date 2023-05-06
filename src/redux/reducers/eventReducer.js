const SET_ID_EVENT = "SET_ID_EVENT"
const defaultState={
    identity:'',
}
export default function eventReducer(state=defaultState,action){
    switch (action.type){
        case SET_ID_EVENT:
            return {
                ...state,
                identity: action.payload,
            }
        default:
            return state;
    }
}
export const setEventId = identity =>({type: SET_ID_EVENT,payload: identity})
