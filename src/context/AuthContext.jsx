import { useContext, createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
    
    // create user state
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('AuthProvider mounted')
        const storedToken = localStorage.getItem('token');

        if (storedToken) {
            // In a real app, you'd validate the token with your backend
            setUser( { name: 'Kostik Test', token: storedToken });
            setIsLoggedIn(true);
        } else {
            setUser(null);
            setIsLoggedIn(false);
        }
        setIsLoading(false);
    }, [])

    const login = async (token, userData = { name: 'Test User' }) => {
        try {
            // In a real app, you'd make an API call here
            localStorage.setItem('token', token);
            setUser({ ...userData, token})
            setIsLoggedIn(true);
            console.log('login successful');
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }

    const logout = () => {
        try {
            localStorage.removeItem('token');
            setUser(null);
            setIsLoggedIn(false);
            console.log('Logged out');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }
    
    return (
        <AuthContext.Provider value={{
            user,
            isLoggedIn,
            isLoading,
            setIsLoggedIn,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { AuthProvider, useAuth };