import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SelectRole from "./role/SelectRole";
import LoginPage from "./role/RoleLogin";
import RegisterPage from "./role/RoleRegister";
import Dashboard from "./MangerPage/Dashboard";
import SideTask from "./MangerPage/SideTask";
import MonitarTask from "./MangerPage/MonitarTask";
import NewTasks from './page/NewTasks';
import DashboardE from "./page/DashboardE.jsx";
import DoneTask from "./page/DoneTask.jsx";
import User from "./component/User";

// Private Route wrapper
const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = true; // Add your authentication logic here
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<SelectRole />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/manager-login" element={<LoginPage role="manager" />} />
          <Route path="/register" element={<RegisterPage role="manager" />} />

          {/* Manager Dashboard & Sub Routes (Protected) */}
          <Route path="manager/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="sidetask" element={<PrivateRoute element={<SideTask />} />} />
          <Route path="monitortask" element={<PrivateRoute element={<MonitarTask />} />} />

          {/* Employee Routes */}
          <Route path="page/dashboard" element={<DashboardE />} />
          <Route path="newtask" element={<NewTasks />} />
          <Route path="donetask" element={<DoneTask />} />

          {/* Other Routes */}
          <Route path="/user" element={<User />} />

          {/* Fallback Route */}
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
