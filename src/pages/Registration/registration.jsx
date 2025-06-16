import { useState } from 'react';
import Button from '../../components/Button';
import { useGoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router';
import Header from '../../components/Header';
import { useAuth } from '../../context/AuthContext';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [emailSignUp, setEmailSignUp] = useState(false);
    
    const { login } = useAuth();

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        
        // Clear any previous errors
        setErrors({});
        
        // Simulate API call
        console.log("User registered:", {
            name: formData.name,
            email: formData.email,
            password: formData.password
        });

        // Save token in context (normally returned by API)
        login("fake-token-registered-123");

        // Reset the form
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Google Sign up
    const googleSignup = useGoogleLogin({
        onSuccess: credentialResponse => {
            console.log('Signup Successful', credentialResponse);
            // Handle successful Google signup here
            login("fake-google-token-123");
        },
        onError: () => {
            console.log('Signup Failed');
        },
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className='flex-1 flex justify-center items-center px-4 my-[8px]'>
                <div className='w-full max-w-sm bg-[#d4dfff4b] px-6 py-8 rounded-lg shadow-sm'> 
                    <div className="mb-6">
                        <h1 className="text-xl font-semibold text-gray-900 mb-2">
                            Register an account
                        </h1>
                        <p className="text-sm text-gray-600">
                            Enter your email or sign up with Google
                        </p>
                    </div>

                    <div className='space-y-4'>
                        <Button
                            onClick={() => setEmailSignUp(prev => !prev)}
                            variant={emailSignUp ? "active" : "primary"}
                            className="w-full text-center h-[38px]"
                            type='button'
                            disabled={emailSignUp}
                        >
                            Sign up with Email
                        </Button>

                        {emailSignUp && (
                            <>
                                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                                    <div>
                                        <label htmlFor="name" className="mt-[14px] block text-sm font-medium text-gray-700 mb-1">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 max-h-[38px] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 max-h-[38px] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="name@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 max-h-[38px] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter password"
                                        />
                                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                            Confirm password
                                        </label>
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 max-h-[38px] border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Confirm password"
                                        />
                                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                    </div>

                                    <Button
                                        className='min-h-[38px] mt-[8px]'
                                        type='submit'
                                    >
                                        Create account
                                    </Button>
                                </form>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-[#d4dfff4b] px-4 text-gray-500">or continue</span>
                                    </div>
                                </div>
                            </>
                        )}
                    
                        <Button 
                            type='button'
                            onClick={() => googleSignup()}
                            className="w-full bg-white border border-gray-300 !text-gray-700 hover:bg-gray-50 hover:!text-gray-700 flex items-center text-left relative"
                        >
                            {/* Google Logo SVG */}
                            <svg className="w-5 h-5 absolute left-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span className="pl-4 w-full text-center">Sign up with Google</span>
                        </Button>
                    </div>

                    <p className='text-sm text-left text-gray-600 mt-6'>
                        Already have an account?{' '}
                        <Link to='/login' className='text-blue-600 hover:underline'>
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;