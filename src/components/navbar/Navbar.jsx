import { Link } from 'react-router-dom';
import Container from '../container/Container';

const Navbar = () => {
  return (
    <div className='bg-[#333]'>
      <Container>
        <nav className='flex justify-between items-center h-20'>
          <Link to='/' className='text-2xl text-white'>Ai.Dev</Link>
          <div className='flex gap-4'>
            <Link to='/login' className='text-[18px] text-white bg-cyan-600 transition cyan-600 px-6 py-1 rounded hover:bg-transparent border-cyan-600 border-2'>Login</Link>
            <Link to='/register' className='text-[18px] text-white bg-cyan-600 transition cyan-600 px-6 py-1 rounded hover:bg-transparent border-cyan-600 border-2'>Register</Link>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
