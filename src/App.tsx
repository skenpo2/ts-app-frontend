import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layouts/authLayout';
import RegisterPage from './pages/auth/register';
import LoginPage from './pages/auth/login';
import NotFound from './pages/not-found/notFound';
import CheckAuth from './pages/checkAuth/checkAuth';
import AppLayout from './layouts/appLayout';
import WorkspaceDashboard from './pages/workspace/Dashboard';
import Tasks from './pages/workspace/Tasks';
import Members from './pages/workspace/Members';
import Settings from './pages/workspace/Settings';
import ProjectDetails from './pages/workspace/ProjectDetails';

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
      <Route element={<AppLayout />}>
        <Route
          path="/workspace/:workspaceId"
          element={<WorkspaceDashboard />}
        />
        {/* <Route path="/workspace/:workspaceId/tasks" element={<Tasks />} /> */}
        {/* <Route path="/workspace/:workspaceId/members" element={<Members />} /> */}
        {/* <Route path="/workspace/:workspaceId/settings" element={<Settings />} /> */}
        {/* <Route
          path="/workspace/:workspaceId/project/:projectId"
          element={<ProjectDetails />}
        /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
