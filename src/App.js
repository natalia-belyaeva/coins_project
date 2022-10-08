import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListOfCoins from './pages/ListOfCoins/ListOfCoins';
// import CoinDescription from './pages/CoinDescription/CoinDescription';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} exact/>
      <Route path='/listofcoins' element={<ListOfCoins />} exact/>
      {/* <Route path='/coindescription' element={<CoinDescription />} exact/> */}
    </Routes>
  );
}

export default App;
