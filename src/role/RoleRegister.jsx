import React from 'react';
import RegisterPage from '../page/Register';
import ManagerRegisterPage from '../MangerPage/Register';

function RolePage({ role }) {
  return (
    <div>
      {role === 'manager' ? (
        <ManagerRegisterPage />
      ) : (
        <RegisterPage />
      )}
    </div>
  );
}

export default RolePage;
