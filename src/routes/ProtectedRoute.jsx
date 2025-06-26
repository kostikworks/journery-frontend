import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
    const { isLoggedIn, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6f79d9]"></div>
            </div>
        );
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute; 