import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider( {children} ) {
    const [user, setUser] = useState(null);

useEffect(() => {
    console.log("AuthProvider mounted and checking token");
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
        setUser({ name: 'Test User', token: storedToken });
    }
}, []);

const login = (token) => {
    localStorage.setItem('token', token);
    setUser({ name: 'Test User', token });
}

const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
};

// Provide values to children
return (
    <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
);
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };