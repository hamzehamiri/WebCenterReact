const initialState = {
    token: localStorage.getItem('authToken') || null,
    isAuthenticated: !!localStorage.getItem('authToken'),
    error: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: null,
            };
        default:
            return state;
    }
}