const SET_ID_EVENT = "SET_ID_EVENT"
const SET_ID_SECTION = "SET_ID_SECTION"
const SET_VIEW_PP = "SET_VIEW_PP"
const SET_NOT_VIEW_PP = "SET_NOT_VIEW_PP:"
const defaultState={
    id:'',
    idSection:'',
    viewPP: false,
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
        case SET_VIEW_PP:
            return{
                ...state,
                viewPP: true
            }
        case SET_NOT_VIEW_PP:
            return{
                ...state,
                viewPP: false
            }
        default:
            return state;
    }
}
export const setEventId = id =>({type: SET_ID_EVENT,payload: id})
export const setIdSection = id =>({type: SET_ID_SECTION,payload: id})
export const setViewPP = () =>({type: SET_VIEW_PP})
export const removeViewPP = () =>({type: SET_NOT_VIEW_PP})

