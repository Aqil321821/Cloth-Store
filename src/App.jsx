import { Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/Nav.compt';

import Home from './routes/home/Home.compt';

const Shop = () => {
  return <h1>I am Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
