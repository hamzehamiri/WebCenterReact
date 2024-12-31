import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ThemeToolbar from './ThemeToolbar';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const App: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <Router>
            <ThemeToolbar />
            <Routes>
                <Route
                    path="/"
                    element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
                />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;
