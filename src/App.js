import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { DataContextProvider } from './Context/DataContext';
import { CartContextProvider } from './Context/CartContext';
import NavBar from './Components/NavBar/NavBar';
import CopyrightFooter from './Components/CopyrightFooter/CopyrightFooter';
// import Cart from './Components/Cart/Cart';



function App() {
  return (
    <div>
      <DataContextProvider>
        <CartContextProvider>
          <NavBar href='#' altIcon='icon-bowl' altPhoneIcon='phone-icon' carBuyName='carBuy' />
          {/* <Cart /> */}
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <CopyrightFooter href='#' />
        </CartContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
