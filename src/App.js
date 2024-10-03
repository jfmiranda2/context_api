import React, { useState } from 'react';
import Context from './Context';
import Counter from './Counter';

function App() {
  const [total, setTotal] = useState(0);
  return (
    <div className="App">
      <h1>Teste</h1>
      <Context.Provider value={[total, setTotal]}>
        <div>
          <p>App.js: { total }</p>
          <p>jfghjklç</p>
          <Counter/>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
