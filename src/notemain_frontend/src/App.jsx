import React from "react";
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Navbar from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
return (
<div className="App">
<Router>
<Navbar />
<Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='/home' element={<Home />} />
<Route path='/products' element={<Products />} />
<Route path='/welcome' element={<Welcome />} />
</Routes>
</Router>
</div>

);
}

export default App;