import React from 'react';
import { StoreRoleNavbarData } from '../../types/Navbar/StoresRolesTypes';

interface StoreRoleDataProps extends StoreRoleNavbarData {
  toggleDropdown: () => void;
}

const StoreRoleData = ({ currentLocal, role, toggleDropdown }: StoreRoleDataProps) => {
  return (
    <div className="cursor-pointer" onClick={toggleDropdown}>
      <div className="text-lg font-semibold text-primario">{currentLocal}</div>
      <div className="text-sm text-blanco">{role}</div>
    </div>
  );
};

export default StoreRoleData;
