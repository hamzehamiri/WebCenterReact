import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Auth state
interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
    error: string | null;
}

const loadThemeState = () => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? (storedTheme as 'light' | 'dark') : 'light';
};

const saveThemeState = (theme: 'light' | 'dark') => {
    localStorage.setItem('theme', theme);
};


// Theme slice
const themeSlice = createSlice({
    name: 'theme',
    initialState: { theme: loadThemeState() },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            saveThemeState(state.theme); // Save to localStorage
        },
    },
});

const saveAuthState = (state: AuthState) => {
    localStorage.setItem('auth', JSON.stringify(state));
};

const loadAuthState = () => {
    const storedState = localStorage.getItem('auth');
    return storedState ? JSON.parse(storedState) : { isAuthenticated: false, user: null, error: null };
};

// Auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState: loadAuthState(),
    reducers: {
        login: (state, action: PayloadAction<{ username: string; password: string }>) => {
            const { username, password } = action.payload;
            if (username === 'admin' && password === 'password') {
                state.isAuthenticated = true;
                state.user = username;
                state.error = null;
                saveAuthState(state); // Save to localStorage
            } else {
                state.error = 'Invalid username or password';
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
            saveAuthState(state); // Save to localStorage
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

// Export actions
export const { toggleTheme } = themeSlice.actions;
export const { login, logout, clearError } = authSlice.actions;

// Configure store
const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        auth: authSlice.reducer,
    },
});

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
