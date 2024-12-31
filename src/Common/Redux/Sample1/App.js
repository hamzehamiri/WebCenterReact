import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import LoginPage from './LoginPage.js';
import ProtectedRoute from './ProtectedRoute.js';
import HomePage from './HomePage';

const App = () => (
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

export default App;