import React from 'react';
import {  BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/contact';
import Home from './components/Home/Home';
import { AuthProvider } from './components/Login/ِAuthContext';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Form from './components/Form/Form';
function App() {

  return (
    <Router>
      <div className="app" dir='rtl'>
      <Navbar />
<div className='content'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
                <Route path="/form" element={<Form />} />

        </Routes>
        </div>
      </div>
      </Router>
  );
}
function AppWithStore() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
export default AppWithStore;
