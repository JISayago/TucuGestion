import React from 'react'
import MenuOption from '../bottomMenu/MenuOption'
import IconSales from '../menuIcons/IconSales'
import IconDebts from '../menuIcons/IconDebts'
import IconProducts from '../menuIcons/IconProducts'
import IconUsers from '../menuIcons/IconUsers'
import IconProviders from '../menuIcons/IconProviders'
import IconClients from '../menuIcons/IconClients'
import IconStore from '../menuIcons/IconStore'
import IconDiscountOffer from '../menuIcons/IconDiscountOffer'
import IconBalance from '../menuIcons/IconBalance'
import IconCategories from '../menuIcons/IconCategories'
import IconOrder from '../menuIcons/IconOrder'

const MenuOptions = () => {
  return (
    <div className='p-6 grid grid-cols-3 gap-x-2 bg-oscuro_2 min-h-screen'>
    <MenuOption icon={<IconProducts />} route="/" title="Productos" extraClass="aspect-square text-blanco text-7xl" />
    <MenuOption icon={<IconSales />} route="/" title="Ventas" extraClass="aspect-square text-blanco text-7xl" />
    <MenuOption icon={<IconDebts />} route="/" title="Deudas" extraClass="aspect-square text-blanco text-7xl" />
    <MenuOption icon={<IconUsers />} route="/" title="Empleados" extraClass="aspect-square text-blanco text-7xl" />
    <MenuOption icon={<IconProviders />} route="/" title="Proveedores" extraClass="aspect-square text-blanco text-7xl" />
    <MenuOption icon={<IconClients />} route="/" title="Clientes" extraClass="aspect-square text-blanco text-7xl" />
    <MenuOption icon={<IconOrder />} route="/" title="Pedidos" extraClass="aspect-square text-blanco text-7xl" />
    <MenuOption icon={<IconStore />} route="/" title="Locales" extraClass="aspect-square text-blanco text-7xl" />
    <MenuOption icon={<IconDiscountOffer />} route="/" title="Ofertas" extraClass="aspect-square text-blanco text-7xl" />
    <MenuOption icon={<IconBalance />} route="/" title="Balances" extraClass="aspect-square text-blanco text-7xl" />
    <MenuOption icon={<IconCategories />} route="/" title="Categorías" extraClass="aspect-square text-blanco text-7xl" />
  </div>
  )
}

export default MenuOptions