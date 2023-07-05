import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import './components/home/Home.css'
import Layout from './components/navbar/Layout';
import Home from './components/home/Home';
import EmiPage from './components/emipage/EmiPage';
import Alert from './components/alert/Alert';
import Cart from './components/cart/Cart';
import Partners from './components/partners/Partners';
import SignIn from './components/Signin/SignIn';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='EmiPage'element={<EmiPage/>}/>
        <Route path='Alert' element={<Alert/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='Partners' element={<Partners/>}/>
        <Route path='SignIn' element={<SignIn/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
