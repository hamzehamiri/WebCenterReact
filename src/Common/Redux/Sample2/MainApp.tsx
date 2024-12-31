import {Provider} from "react-redux";
import store from "./store.ts";
import App from "./App.tsx";

const MainApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>)
}

export default MainApp;