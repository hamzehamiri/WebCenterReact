import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const HomePage: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome, {user}!</h1>
        </div>
    );
};

export default HomePage;