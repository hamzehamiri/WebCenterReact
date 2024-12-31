// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from './actions/authActions';
// import { RootState } from './reducers';
//
// const WebCenterLoginPage: React.FC = () => {
//     const [username, setUsername] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const dispatch = useDispatch();
//
//     // Access error state from Redux
//     const error = useSelector((state: RootState) => state.auth.error);
//
//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         if (name === 'username') setUsername(value);
//         if (name === 'password') setPassword(value);
//     };
//
//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         dispatch(login(username, password));
//     };
//
//     return (
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="Username"
//                     value={username}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={handleChange}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };
//
// export default WebCenterLoginPage;