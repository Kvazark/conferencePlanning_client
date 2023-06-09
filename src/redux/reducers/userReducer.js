const SET_USER ="SET_USER"
const LOGOUT = "LOGOUT"
const SET_ROLE = "SET_ROLE"
const SET_ID = "SET_ID"
const defaultState={
    currentUser:{},
    isAuth: false,
    role:'',
    id:'',
}
export default function userReducer(state=defaultState,action){
    switch (action.type){
        case SET_USER:
            return{
                ...state,
                currentUser: action.payload,

                isAuth: true,
            }
        case SET_ROLE:
            return{
                ...state,
                role: action.payload,
                isAuth: true,
            }
        case SET_ID:
            return {
                ...state,
                id: action.payload,
                isAuth: true,
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state;
    }
}
export const setUser = user =>({type: SET_USER,payload: user})
export const setRole = role =>({type: SET_ROLE,payload: role})
export const setId = id =>({type: SET_ID,payload: id})
export const logout = () => ({type: LOGOUT})