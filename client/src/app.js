import React from 'react';
import { Provider } from 'react-redux';
import './app.css';

import store from './store';
import TweetsView from './components/tweets-view';
import ToggleCandidate from './components/toggle-candidate';

const App = () => {
  return (
    <Provider store={store}>
      <div className='background'>
        <div className='container'>
          <h1 className='title'>Political tweets</h1>
          <div>
            <ToggleCandidate />
          </div>
          <div className='feed_container'>
            <TweetsView handle='HillaryClinton' />
            <TweetsView handle='realDonaldTrump' />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
