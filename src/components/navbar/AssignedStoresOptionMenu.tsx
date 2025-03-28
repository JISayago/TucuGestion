import React from 'react';
import { Store } from '../../types/Navbar/StoresRolesTypes';

interface AssignedStoresOptionMenuProps {
  local: Store;
}

const AssignedStoresOptionMenu = ({ local }: AssignedStoresOptionMenuProps) => {
  return (
    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
      {local.nombre}
    </li>
  );
};

export default AssignedStoresOptionMenu;
