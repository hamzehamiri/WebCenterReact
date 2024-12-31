export const login = (username, password) => async (dispatch) => {
    try {
        const response = await fetch('https://your-api.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) throw new Error('Login failed');

        const data = await response.json();
        const { token } = data;

        // Save token in localStorage
        localStorage.setItem('authToken', token);

        dispatch({ type: 'LOGIN_SUCCESS', payload: token });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
};

export const logout = () => {
    localStorage.removeItem('authToken');
    return { type: 'LOGOUT' };
};