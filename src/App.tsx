import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layouts/authLayout';
import RegisterPage from './pages/auth/register';
import LoginPage from './pages/auth/login';
import NotFound from './pages/not-found/notFound';
import CheckAuth from './pages/checkAuth/checkAuth';

const mydata = {
  _id: '12346',
  name: 'Micheal',
  email: 'micheal@gmail.com',
  profilePicture: 'string',
  isActive: true,
  lastLogin: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
  currentWorkspace: {
    _id: '12345',
    name: 'my work',
    owner: 'micheal',
    inviteCode: 'inviteCode',
  },
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CheckAuth isAuthenticated={false} user={mydata}>
            <BaseLayout />
          </CheckAuth>
        }
      >
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
