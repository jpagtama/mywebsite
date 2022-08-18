import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SideNav from './components/personal/SideNav';
import Main from './components/personal/Main';

const App = () => {
  return (
    <Provider store={store}>
      <SideNav />
      <Main />
    </Provider>
  )
}

export default App;