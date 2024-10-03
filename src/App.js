import { useState, useContext } from 'react';
import {TemaContex, NumeroContex} from './Context';
import Page_one from './Page_one';
import Page_two from './Page_two';

function App() {
  const [theme, time] = useContext(TemaContex);
  const numero = useContext(NumeroContex);
  return (
    <div className="App">
      <p>{numero}</p>
      <p>{theme}</p>
      <Page_one/>
      <Page_two/>
    </div>
  );
}

export default App;


// function App() {
//   const [total, setTotal] = useState(1);
//   return (
//     <div className="App">
//       <h1>Teste</h1>
//       <TemaContext.Provider value={[total, setTotal]}>
//         <div>
//           <p>Teste: { total }</p>
//           <Page_one/>
//           <Page_two/>
//         </div>
//       </TemaContext.Provider>
//     </div>
//   );
// }

// export default App;
