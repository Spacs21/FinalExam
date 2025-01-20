import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { removeItem, clearCart } from '../store/cartSlice'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Loading from '../components/Loading'
import { ProductType } from '../types/index'
import { NavLink, useNavigate } from 'react-router-dom'
import Newsletter from '../components/Newsletter'

const Carts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.carts.carts);
  const navigate = useNavigate();

  const { data: products, isLoading } = useQuery<ProductType[]>({
    queryKey: ['cartItems', cartItems],
    queryFn: () => Promise.all(
      cartItems.map(item => 
        axios.get(`https://6787c598c4a42c9161082dbc.mockapi.io/blogs/${item.id}`).then(res => res.data)
      )
    ),
    enabled: cartItems.length > 0,
  });
  
  if (isLoading) return <Loading />;

  return (
    <>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex items-center gap-2 text-sm mb-8">
        <NavLink to="/" className="text-gray-500 hover:text-gray-700">Home</NavLink>
        <span className="text-gray-500">&gt;</span>
        <span className="font-medium">Cart</span>
      </nav>
      <h1 className="text-4xl font-bold mb-10">YOUR CART</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {products?.map((product, index) => {
            const item = cartItems.find(item => item.id === product.id);
            return (
              <div key={index} className="flex gap-6 p-6 bg-white rounded-lg border border-gray-200">
                <img 
                  src={product.images[0]} 
                  className="w-24 h-24 object-contain bg-gray-50 rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                  <div className="space-y-1 text-sm text-gray-500">
                    <p>Size: Large</p>
                    <p>Color: White</p>
                    <p className="text-lg font-semibold text-black mt-2">${product.price}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => dispatch(removeItem(product.id))}
                    className="text-gray-400 hover:text-red-500"
                  >
                  </button>
                  <div className="flex items-center gap-4 bg-gray-100 rounded-lg">
                    <button className="p-2 text-gray-600 hover:text-gray-900">-</button>
                    <span className="w-8 text-center">{item?.quantity}</span>
                    <button className="p-2 text-gray-600 hover:text-gray-900">+</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">$565</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (-20%)</span>
                <span>-$113</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-semibold">$15</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$467</span>
              </div>
              
              <div className="relative mt-6">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg pr-24"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-black text-white text-sm rounded-md">
                  Apply
                </button>
              </div>

              <button
                onClick={() => dispatch(clearCart())}
                className="w-full bg-black text-white rounded-lg py-4 font-medium hover:bg-gray-900 transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-black text-white rounded-lg py-4 font-medium hover:bg-gray-900 transition-colors mt-6"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Newsletter/>
    </>
  )
}

export default Carts