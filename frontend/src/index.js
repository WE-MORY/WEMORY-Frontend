import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import configureStore from './store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// 민석 :: Redux Store 설정
const theme = createMuiTheme({
  typography: {
    fontFamily: "Spoqa-Regular",
  },
}
)

  

const store = configureStore(reducer);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  ,document.getElementById('root')
);
