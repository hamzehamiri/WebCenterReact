import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearError, login, RootState} from './store';
import {Navigate} from "react-router-dom";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((state: RootState) => state.auth.error);

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    // If the user is already authenticated, redirect them to the home page
    if (isAuthenticated) {
        return <Navigate to="/"/>;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({username, password}));
    };

    const clearErrorMessage = () => {
        if (error) dispatch(clearError());
    };

    return (
        <form onSubmit={handleSubmit} style={{maxWidth: '300px', margin: 'auto'}}>
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={clearErrorMessage}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={clearErrorMessage}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
