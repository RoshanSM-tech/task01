import React from 'react';
import UserLoginPage from '../page/LoginPage';
import ManagerLoginPage from '../MangerPage/Login';

function RoleLogin({ role }) {
  return (
    <div>
      {role === 'manager' ? <ManagerLoginPage /> : <UserLoginPage />}
    </div>
  );
}

export default RoleLogin;
