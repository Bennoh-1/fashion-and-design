import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home.js'
import Seller from './components/Seller.js'
import Buyer from './components/Buyer.js'
import AddSeller from './components/AddSeller.js';
import Commodity from './components/Commodity.js'
import About from './components/About.js'
import Navbar from './components/Navbar.js'

function App(){
  return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}  />
          <Route exact path='/seller' element={<Seller />} />
          <Route exact path='/buyer' element={<Buyer />} />
          <Route exact path='/addseller' element={<AddSeller />} />
          <Route exact path='/commodities' element={<Commodity />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
 
      </div>
    
  )
}

export default App;
