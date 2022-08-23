import React, {Suspense} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {Routes, Route} from 'react-router-dom';
import SideNav from './components/personal/SideNav';
import Main from './components/personal/Main';

const Flekin = React.lazy(() => import('./components/flekin/Flekin'));

const App = () => {
  const welcome = <React.Fragment><SideNav /><Main /></React.Fragment >

  return (
    <Provider store={store}>
      <Suspense >
        <Routes >
          <Route path="/" element={welcome} />
          <Route path="/flekin/*" element={<Flekin />} />
          <Route path="/*" element={welcome} />
        </Routes>
      </Suspense>
    </Provider>
  )
}

export default App;