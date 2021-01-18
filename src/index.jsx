import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import 'normalize.css';
import './styles/index.scss';
import {App} from './App';

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)
