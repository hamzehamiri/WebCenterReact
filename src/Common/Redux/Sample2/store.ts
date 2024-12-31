import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Theme state
interface ThemeState {
    theme: 'light' | 'dark';
}

// Auth state
interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
    error: string | null;
}

// Initial states
const initialThemeState: ThemeState = {
    theme: 'light',
};

const initialAuthState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

// Theme slice
const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

// Auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string; password: string }>) => {
            const { username, password } = action.payload;
            if (username === 'admin' && password === 'password') {
                state.isAuthenticated = true;
                state.user = username;
                state.error = null;
            } else {
                state.error = 'Invalid username or password';
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
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
