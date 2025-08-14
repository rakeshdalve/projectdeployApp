import { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Registration from './component/Auth/Registration';
import Login from './component/Auth/Login';
import Dashboard from './UserView/Dashboard';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './Account/Account';
import PrivateRoute from './component/Auth/PrivateRoute';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} /> {/* 👈 default redirect */}
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        {/* 🧭 Dashboard layout with nested routes */}
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index element={<Home />} /> {/* Default tab: Home */}
          <Route path="Home" element={<Home />} />
          <Route path="Service" element={<Service />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          {/* <Route path='Account' element={<Account/>}/> */}
          <Route path='Account' element={<PrivateRoute>
            <Account/>
          </PrivateRoute>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
