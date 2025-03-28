import React from 'react';
import OpcionMenuLocalesAsignados from './AssignedStoresOptionMenu';
import { Store } from '../../types/Navbar/StoresRolesTypes';
import AssignedStoresOptionMenu from './AssignedStoresOptionMenu';

interface AssignedStoresMenuProps {
  otherAssignedLocals: Store[];
}

const AssignedStoresMenu = ({ otherAssignedLocals }: AssignedStoresMenuProps) => {
  return (
    <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
      {otherAssignedLocals.length === 0 ? (
        <li className="px-4 py-2 text-center">¡No hay locales asignados!</li>
      ) : otherAssignedLocals.length === 1 ? (
        <AssignedStoresOptionMenu local={otherAssignedLocals[0]} />
      ) : (
        otherAssignedLocals.map((local) => (
          <AssignedStoresOptionMenu key={local.id} local={local} />
        ))
      )}
    </ul>
  );
};

export default AssignedStoresMenu;
