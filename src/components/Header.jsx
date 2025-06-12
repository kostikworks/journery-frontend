// Free SVG icon of a book that I found online
import journeryIcon from '../assets/book-square-svgrepo-com.svg';

// Import Button component
import Button from './Button'

// Header for Landing page
function Header() {
  return (
    <header className='sticky top-0 w-full min-w-full text-sm border-b border-gray-200 bg-white z-50'>
      {/* Content container */}
      <div className='px-4 sm:px-8 lg:px-12 py-3 max-w-[1675px] mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div 
          className='flex items-center justify-center cursor-pointer'
          role='button'
          tabIndex={0}
          aria-label='Go to homepage'
        > 
          <img 
            className='mr-2 w-8 h-8 opacity-90 hover:-rotate-6 transition-transform duration-200'
            src={journeryIcon} 
            alt='Journery logo' 
          />
          <span className='text-lg font-medium'>Journery</span>
        </div>
        {/* Nav Buttons */}
        <nav className='flex gap-3 pl-6'>
          <Button 
          variant="light" 
          aria-label="Login to your account"
          >
            Login
          </Button>

          <Button
          aria-label='Get started for free'
          >
            Get started for free
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;