import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider( {children} ) {
    const [user, setUser] = useState(null);

useEffect(() => {
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

return (
    <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
);
}

export default AuthProvider;