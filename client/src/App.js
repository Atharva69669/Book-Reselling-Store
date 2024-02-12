import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Store from './Components/Store'
import Shop from './Components/Shop'
import AddBook from './Components/AddBook';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/sell' element={<Store/>}/>
        <Route path='/buy' element={<Shop/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
