import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './routes/auth/login/Login';
import Register from './routes/auth/register/Register';
import Home from './routes/home/Home';
// import Auth from './routes/auth/Auth';

function App() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      {!pathname.includes('/login') && !pathname.includes('/register') && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/auth" element={<Auth />}> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
