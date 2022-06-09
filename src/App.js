import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Foto from './components/Foto';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path={"/maqueta"} element={<Foto/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
