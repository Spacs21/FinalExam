import { useState } from 'react'
import { NavLink } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20">
        <div className="flex items-center justify-between h-full">
          <NavLink to="/" className="text-2xl sm:text-4xl font-black tracking-tighter">
            SHOP.CO
          </NavLink>
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-12 ml-8 lg:ml-16">
            <li>
              <NavLink 
                to="/" 
                className="flex items-center text-base lg:text-[17px] hover:text-gray-600"
              >
                Shop
                <KeyboardArrowDownIcon className="ml-0.5 w-4 h-4 lg:w-5 lg:h-5" />
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/" 
                className="text-base lg:text-[17px] hover:text-gray-600"
              >
                On Sale
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/" 
                className="text-base lg:text-[17px] hover:text-gray-600"
              >
                New Arrivals
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/" 
                className="text-base lg:text-[17px] hover:text-gray-600"
              >
                Brands
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center space-x-4 sm:space-x-6 ml-auto">
            <div className="relative hidden sm:block">
            <input
            type="text"
            placeholder="Search for products..."
            className="w-[700px] max-w-xs  max-[1316px]:w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-9 sm:h-11 pl-10 sm:pl-12 pr-4 bg-[#F0F0F0] rounded-xl sm:rounded-2xl text-sm sm:text-base placeholder-gray-500 focus:outline-none"
            />
              <SearchIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <button className="hover:text-gray-600">
              <NavLink to={"/carts"}>
                <ShoppingCartIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </NavLink>
            </button>
            <button className="hover:text-gray-600">
              <PersonIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button className="md:hidden hover:text-gray-600" onClick={() => setOpen(true)}>
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <NavLink to="/" className="text-2xl font-black tracking-tighter" onClick={() => setOpen(false)}>
            SHOP.CO
          </NavLink>
          <button onClick={() => setOpen(false)}>
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full h-10 pl-10 pr-4 bg-[#F0F0F0] rounded-xl text-sm placeholder-gray-500 focus:outline-none"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <ul className="space-y-4">
            <li>
              <NavLink 
                to="/" 
                className="flex items-center text-lg"
                onClick={() => setOpen(false)}
              >
                Shop
                <KeyboardArrowDownIcon className="ml-0.5 w-5 h-5" />
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/" 
                className="block text-lg"
                onClick={() => setOpen(false)}
              >
                On Sale
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/" 
                className="block text-lg"
                onClick={() => setOpen(false)}
              >
                New Arrivals
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/" 
                className="block text-lg"
                onClick={() => setOpen(false)}
              >
                Brands
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

