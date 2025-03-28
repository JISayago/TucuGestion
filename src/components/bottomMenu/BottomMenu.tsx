import React from 'react'
import IconSales from '../menuIcons/IconSales'
import IconDebts from '../menuIcons/IconDebts'
import IconHome from '../menuIcons/IconHome'
import IconBalance from '../menuIcons/IconBalance'
import IconUserProfile from '../menuIcons/IconUserProfile'
import MenuOption from './MenuOption'

const BottomMenu = () => {

  return (
    <div className="flex w-full h-20 sticky bottom-0 items-center bg-oscuro_1 p-2">
      <MenuOption icon={<IconSales/>} route={"/"} title="Ventas" extraClass='w-full h-full text-4xl text-primario '/>
      <MenuOption icon={<IconDebts/>} route={"/"} title="Deudas" extraClass='w-full h-full text-4xl text-primario '/>
      <MenuOption icon={<IconHome/>} route={"/"} title="Inicio" extraClass='w-full h-full text-4xl text-primario '/>
      <MenuOption icon={<IconBalance/>} route={"/"} title="Balance" extraClass='w-full h-full text-4xl text-primario '/>
      <MenuOption icon={<IconUserProfile/>} route={"/"} title="Perfil" extraClass='w-full h-full text-4xl text-primario '/>
      </div>
  )
}

export default BottomMenu