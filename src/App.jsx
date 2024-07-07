import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './routes/auth/login/Login';
import Register from './routes/auth/register/Register';
import Home from './routes/home/Home';
import { ToastContainer } from 'react-toastify';
import Dashboard from './routes/dashboard/Dashboard';
import 'rsuite/Loader/styles/index.css';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ToastContainer className='m-4' />
      {!pathname.includes('/login') && !pathname.includes('/register') && !pathname.includes('/dashboard') && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
