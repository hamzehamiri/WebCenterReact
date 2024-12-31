interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    error: string | null;
}

interface AuthAction {
    type: string;
    payload?: string;
}

const initialState: AuthState = {
    token: localStorage.getItem('authToken') || null,
    isAuthenticated: !!localStorage.getItem('authToken'),
    error: null,
};

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload || null,
                isAuthenticated: true,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                error: action.payload || 'Unknown error',
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