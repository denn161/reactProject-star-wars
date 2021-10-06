import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvaider from '@context/ThemeProvaider';
import { Provider } from 'react-redux';
import App from '@containers/App';
import store from '@store/store';
import './styles/index.css'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvaider>
       <App />
    </ThemeProvaider>
    </Provider>
 </React.StrictMode>,
  document.getElementById('root')
);

