import React from 'react'
import Logo from '../../assets/Logo.webp';

const LogoNavbar = () => {
  return (
    <div className="flex items-center">
    <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
      {/* Reemplazar "/logo.png" por la ruta de tu imagen */}
      <img src={Logo} alt="Logo de la aplicación" className="w-full h-full object-cover" />
    </div>
  </div>
  )
}

export default LogoNavbar