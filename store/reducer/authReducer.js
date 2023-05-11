
let init = {
    user: {},
    isAuthenticated: false,
    enrollment: null
}

const authReducer = (state = init, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        case "UPDATE_USER":
            return {
                ...state,
                user: {...state.user,...action.payload},
                
            }
        case "LOGOUT":
            return {
                user: {},
                isAuthenticated: false,
            }

        default:
            return state;
    }
}

export default authReducer