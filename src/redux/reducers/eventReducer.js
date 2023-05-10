const SET_ID_EVENT = "SET_ID_EVENT"
const SET_ID_SECTION = "SET_ID_SECTION"
const defaultState={
    id:'',
    idSection:'',
}
export default function eventReducer(state=defaultState,action){
    switch (action.type){
        case SET_ID_EVENT:
            return {
                ...state,
                id: action.payload,
            }
        case SET_ID_SECTION:
            return {
                ...state,
                idSection: action.payload,
            }
        default:
            return state;
    }
}
export const setEventId = id =>({type: SET_ID_EVENT,payload: id})
export const setIdSection = id =>({type: SET_ID_SECTION,payload: id})
