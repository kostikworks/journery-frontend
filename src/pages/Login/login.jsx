import Button from '../../components/Button';
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router';

function Login() {

  // const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle regular login here
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md bg-[#d4dfff4b] px-8 py-8 rounded-lg shadow-sm">
        
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Login to your account
          </h1>
          <p className="text-sm text-gray-600">
            Enter your email below to login to your account
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <div className="my-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-[#d4dfff4b] px-4 text-gray-500">Or continue with</span>
            </div>
          </div>
        </div>

      <GoogleLogin
        shape='rectangular'
        onSuccess={credentialResponse => {
          console.log('Login Successful' + credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />

        <p className='text-sm text-center text-gray-600 mt-6'>
          Don't have an account?{' '}
          <Link to='/registration' className='text-blue-600 hover:underline'>
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;