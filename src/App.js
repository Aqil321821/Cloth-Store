import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';
import Signin from './routes/sign-in/Sign-in.componenet';

const Shop = () => {
  return <h1>I am Shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<Signin />} />
      </Route>
    </Routes>
  );
}
export default App;
