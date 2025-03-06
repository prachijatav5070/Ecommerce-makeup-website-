
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css' 
import './css/style2.css'
import {Provider} from "react-redux";
import store from './Store.jsx';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
