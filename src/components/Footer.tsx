import { NavLink } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import bank from "../assets/bank.png"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid max-[350px]:grid-cols-1 max-[1200px]:grid-cols-4 max-[800px]:grid-cols-3 max-[500px]:grid-cols-2 px-4 grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold mb-5">SHOP.CO</h2>
            <p className="text-gray-600 text-lg mb-6">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-5">
              <NavLink to="/" className="text-gray-600 hover:text-black">
                <TwitterIcon />
              </NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">
                <FacebookIcon />
              </NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">
                <InstagramIcon />
              </NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">
                <GitHubIcon />
              </NavLink>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5">COMPANY</h3>
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className="text-gray-600 hover:text-black">About</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Features</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Works</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Career</NavLink>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5">HELP</h3>
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className="text-gray-600 hover:text-black">Customer Support</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Delivery Details</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Terms & Conditions</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Privacy Policy</NavLink>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5">FAQ</h3>
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className="text-gray-600 hover:text-black">Account</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Manage Deliveries</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Orders</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Payments</NavLink>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-5">RESOURCES</h3>
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className="text-gray-600 hover:text-black">Free eBooks</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Development Tutorial</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">How to - Blog</NavLink>
              <NavLink to="/" className="text-gray-600 hover:text-black">Youtube Playlist</NavLink>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-lg mb-4 md:mb-0">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <img src={bank} className="h-14 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
