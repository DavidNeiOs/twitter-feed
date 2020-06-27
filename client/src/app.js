import React, { useEffect } from 'react';
import './app.css';

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
    <div className='background'>
      <div className='container'>
        <h1 className='title'>Political tweets</h1>
        <div className='feed_container'>
          <div className='candidate_feed'>Hillary Clinton tweets</div>
          <div className='candidate_feed'>Donald Trum tweets</div>
        </div>
      </div>
    </div>
  );
};

export default App;
