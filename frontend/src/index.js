import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import configureStore from './store';

// 민석 :: Redux Store 설정
const store = configureStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,document.getElementById('root')
);
