import React from 'react'
import { useNavigate } from 'react-router-dom';

interface MenuOptionProps {
    icon: React.ReactElement; 
    route: string;    
    extraClass: string;
    title?: string;
}
  
const MenuOption: React.FC<MenuOptionProps> = ({ icon, route,extraClass,title }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(route)
    
    }
    return (
        <button
        className={`${extraClass} flex flex-col items-center justify-center text-center`}
        onClick={handleRedirect}
      >
        {icon}
        {title && <span className="text-sm mt-1 text-blanco font-bold">{title}</span>} 
      </button>
    )
  }

export default MenuOption