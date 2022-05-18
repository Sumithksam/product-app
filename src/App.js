import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Productentry from './component/Productentry';
import Productsearch1 from './component/Productsearch1';
import Viewproduct from './component/Viewproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path="/" exact element={<Productentry/>}/>
    <Route path="/search" exact element={<Productsearch1/>}/>
    <Route path="/view" exact element={<Viewproduct/>}/>
    
      </Routes>
      </BrowserRouter>
      </div>
      
  );
}

export default App;
