import { UserType } from '@/types/api.types';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface CheckAuthProps {
  user: UserType;
  isAuthenticated: boolean;
  children: ReactNode;
}
function CheckAuth({ isAuthenticated, user, children }: CheckAuthProps) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  if (location.pathname === '/') {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    } else {
      return (
        <Navigate to={`workspace/${user.currentWorkspace?._id}`} replace />
      );
    }
  }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes('/login') ||
      location.pathname.includes('/register')
    )
  ) {
    return <Navigate to="/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes('/login') ||
      location.pathname.includes('/register'))
  ) {
    return <Navigate to={`workspace/${user.currentWorkspace?._id}`} replace />;
  }

  return <>{children}</>;
}

export default CheckAuth;
