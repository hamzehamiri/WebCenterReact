import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, logout } from './store';
import { RootState } from './store';

const ThemeToolbar: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <div
            style={{
                padding: '10px',
                backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <button onClick={() => dispatch(toggleTheme())}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            {isAuthenticated && (
                <button onClick={() => dispatch(logout())}>
                    Logout
                </button>
            )}
        </div>
    );
};

export default ThemeToolbar;
