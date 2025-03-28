import React, { useState } from 'react';
import LogoNavbar from './LogoNavbar';
import { Store, StoreRoleNavbarData } from '../../types/Navbar/StoresRolesTypes';
import StoreRoleData from './StoreRoleData';
import AssignedStoresMenu from './AssignedStoresMenu';

interface StoreRoleNavbarDataProps extends StoreRoleNavbarData {
  otherAssignedLocals: Store[];
}

const Navbar = ({ currentLocal, role, otherAssignedLocals }: StoreRoleNavbarDataProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-oscuro_1">
      <LogoNavbar />
      <div className="relative">
        <StoreRoleData 
          currentLocal={currentLocal} 
          role={role} 
          toggleDropdown={toggleDropdown} 
        />
        {dropdownOpen && (
          <AssignedStoresMenu otherAssignedLocals={otherAssignedLocals} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
