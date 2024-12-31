import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import LoginPage from './LoginPage';
import ProtectedRoute from './ProtectedRoute';
import HomePage from './HomePage';

const AppRouter: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <HomePage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </Provider>
    );
};

export default AppRouter;