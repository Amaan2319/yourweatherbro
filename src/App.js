import React from 'react';
import { Weather } from './Components/Weather';
// import { ToDo } from './Components/ToDo';
// import Repositories from './Components/Repositories';

const App = () => {

  return (
    <div >
      <h1 className="text-center my-3 mb-5">Welcome to <span className="text-warning">WhatsTheWeather</span></h1>
      <Weather />
      
    </div>
  );
};

export default App;
