import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import Thunk from 'redux-thunk';

import rootReducer from './modules/index';

const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(Thunk)
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
