import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';

interface ProtectedRouteProps {
    redirectTo?: string; // Default is "/login"
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectTo = '/login' }) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={redirectTo} />;
    }

    return <Outlet />;
};

export default ProtectedRoute;