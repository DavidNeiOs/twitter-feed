import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './app.css';

import store from './store';
import TweetsView from './components/tweets-view';

const App = () => {
  // Having an error with webpack when using arrow function here
  function pingServer() {
    fetch('http://localhost:3000/api/hello')
      .then((result) => result.json())
      .then((res) => console.log(res));
  }

  useEffect(() => {
    pingServer();
  }, []);

  return (
    <Provider store={store}>
      <div className='background'>
        <div className='container'>
          <h1 className='title'>Political tweets</h1>
          <div className='feed_container'>
            <TweetsView />
            <div className='candidate_feed'>Donald Trum tweets</div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
