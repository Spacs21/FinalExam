import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { clearCart } from '../store/cartSlice';

const BOT_TOKEN = "7987113060:AAFIJhtC-wDMxufyQdpZYVVgysjf_RLWGnA";
const CHAT_ID = "-1002268049485";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.carts.carts);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    comments: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePurchase = () => {
    const orderDetails = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      comments: formData.comments,
      items: cartItems.map(item => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price
      })),
      totalCost: cartItems.reduce((total, item) => total + (item.quantity * item.price), 0)
    };

    const text = `
      <strong>Order:</strong>
      Full Name: ${orderDetails.fullName}
      Phone: ${orderDetails.phone}
      Email: ${orderDetails.email}
      Delivery Address: ${orderDetails.address}
      Comments: ${orderDetails.comments}
      ${orderDetails.items.map(item => `
        Products: ${item.id}
        Product Amount: ${item.quantity}
        Product Price: ${item.price} $
      `).join('\n')}
      <strong>Total Cost: ${orderDetails.totalCost} $</strong>
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}&parse_mode=html`;
    fetch(url);

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      comments: "",
    });

    alert("Your purchase information has been received!");
    dispatch(clearCart());
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <h1 className="text-[40px] font-medium text-center mb-16">Check Out</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl mb-8">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-[13px] text-gray-500 mb-2">FULL NAME</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name"
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
              />
            </div>

            <div>
              <label className="block text-[13px] text-gray-500 mb-2">PHONE NUMBER</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
              />
            </div>

            <div>
              <label className="block text-[13px] text-gray-500 mb-2">EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
              />
            </div>

            <div>
              <label className="block text-[13px] text-gray-500 mb-2">DELIVERY ADDRESS</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Delivery address"
                required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
              />
            </div>

            <div>
              <label className="block text-[13px] text-gray-500 mb-2">COMMENTS</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Comments"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-8 h-[470px] max-lg:h-auto">
          <h2 className="text-2xl mb-8">Order summary</h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                  📦
                </span>
                <span>JenkateMW</span>
              </div>
              <span className="text-emerald-500">-$25.00 [Remove]</span>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>$99.00</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>$234.00</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mt-1 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <span>I agree to the processing of my personal data</span>
            </label>
          </div>

          <button
            onClick={handlePurchase}
            disabled={!isAgreed}
            className="w-full bg-[#18181B] text-white py-4 rounded-lg mt-8 font-medium hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

