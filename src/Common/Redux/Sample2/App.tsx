import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ThemeToolbar from './ThemeToolbar';
import LoginPage from './LoginForm';
import HomePage from './HomePage';
import ProtectedRoute from './ProtectedRoute';

const App: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.theme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <Router>
            <ThemeToolbar />
            <Routes>
                {/* Protected Route for HomePage */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<HomePage />} />
                </Route>

                {/* Login Route */}
                <Route path="/login" element={<LoginPage />} />

                {/* Redirect any unknown route to login */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;