import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { RootState } from './reducers'; // RootState is exported from reducers/index.ts

// Enhance the middleware with Redux Thunk and any other middlewares
const middleware = [thunk as ThunkMiddleware<RootState>];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

// Define types for the store, dispatch, and state
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;