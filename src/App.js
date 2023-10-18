import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Help from './Pages/Help';
import Customers from './Pages/Customers';
import Income from './Pages/Income';
import Product from './Pages/Product';
import Promote from './Pages/Promote';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <div className='line-separator'>
          <header>
            <Navbar></Navbar>
          </header>
          <div className='main-content'>
            <Routes>
              <Route exact path='/' Component={Dashboard} />
              <Route path='/help' Component={Help} />
              <Route path='/customers' Component={Customers} />
              <Route path='/income' Component={Income} />
              <Route path='/product' Component={Product} />
              <Route path='/promote' Component={Promote} />
            </Routes>
          </div>
        </div>
      </Router >
    </div >
  );
}

export default App;
