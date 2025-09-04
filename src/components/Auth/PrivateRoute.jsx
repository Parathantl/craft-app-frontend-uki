import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  console.log('PrivateRoute Debug:', { isAuthenticated, loading });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('PrivateRoute: User not authenticated, redirecting to login');
    return <Navigate to="/login" />;
  }

  console.log('PrivateRoute: User authenticated, rendering children');
  return children;
};

export default PrivateRoute;
