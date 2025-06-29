import { Link, useNavigate } from 'react-router';

// Import Button component
import Button from './Button'

// Header for Landing page
function Header() {
const navigate = useNavigate();


  return (
    <header className='sticky top-0 w-full min-w-full text-md border-b border-gray-200 bg-white z-50'>
      {/* Content container */}
      <div className='px-4 sm:px-8 lg:px-12 py-3 max-w-[1675px] mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center justify-center cursor-pointer'
          role='button'
          tabIndex={0}
          aria-label='Go to homepage'
        > 
          <span className='text-[25px] font-bold text-[#0C090A]'>Journery</span>
        </Link>
        {/* Nav Buttons */}
        <nav className='flex gap-3 pl-6'>
          <Button
          onClick={() => navigate('/login')}
          variant="light" 
          aria-label="Login to your account"
          >
            Login
          </Button>

          <Button
          onClick={() => navigate('/registration')}
          aria-label='Get started for free'
          >
            <span className="block sm:hidden">Join</span>
            <span className="hidden sm:block">Get started for free</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;