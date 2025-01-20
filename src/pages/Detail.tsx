import { useEffect, useState } from 'react'
import { ChevronRight, Minus, Plus } from 'lucide-react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Rating from '@mui/material/Rating';
import Loading from '../components/Loading';
import { ProductType } from '../types/index';
import Comments from '../components/Comments'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../store/cartSlice'
import { RootState } from '../store/store'

const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const [selectedColor, setSelectedColor] = useState('olive');
    const [selectedSize, setSelectedSize] = useState('Large');
    const [isSelling] = useState<boolean>(false)
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.carts.carts);
    const [isAdded, setIsAdded] = useState(false);
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    const { data: product, isLoading } = useQuery<ProductType>({
        queryKey: ['product', id],
        queryFn: () =>
            axios.get(`https://6787c598c4a42c9161082dbc.mockapi.io/blogs/${id}`).then(res => res.data)
    });
    const colors = [
        { name: 'olive', class: 'bg-[#4A5043]' },
        { name: 'forest', class: 'bg-[#2F4F4F]' },
        { name: 'navy', class: 'bg-[#1B1B2F]' }
    ];

    const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

    const handleAddToCart = () => {
        if (product) {
            dispatch(addItem({ id: product.id, quantity, price: product.price, product }));
            setIsAdded(true);
        }
    };

    const handleRemoveFromCart = () => {
        if (product) {
            dispatch(removeItem(product.id));
            setIsAdded(false);
            setQuantity(1);
        }
    };

    useEffect(() => {
        if (product) {
            const itemInCart = cartItems.find(item => item.id === product.id);
            if (itemInCart) {
                setQuantity(itemInCart.quantity);
                setIsAdded(true);
            } else {
                setIsAdded(false);
            }
        }
    }, [cartItems, product]);

    if (isLoading) return <Loading />;

    if (!product) return <div>Product not found</div>;

    return (
        <>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
                <NavLink to="/" className="hover:text-gray-900">Home</NavLink>
                <ChevronRight className="w-4 h-4" />
                <NavLink to="/" className="hover:text-gray-900">Shop</NavLink>
                <ChevronRight className="w-4 h-4" />
                <NavLink to="/" className="hover:text-gray-900">Men</NavLink>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900">T-shirts</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4">
                        {product.images.map((url, index) => (
                            <div
                                key={index}
                                className="w-32 h-32 max-xl:w-20 max-xl:h-20 border rounded-lg overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={url}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 bg-[#F5F5F5] rounded-lg overflow-hidden">
                        <img
                            src={product.images[0]}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight">{product.title}</h1>
                    <div className="flex items-center gap-2">
                        <Rating name="read-only" value={product.star} readOnly />
                        <span className="text-sm text-gray-500">{product.star}/5</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold">${product.price}</span>
                        <span className="text-2xl text-gray-400 line-through">$300</span>
                        <span className="px-2 py-1 text-sm font-semibold text-red-500 bg-red-100 rounded">-40%</span>
                    </div>
                    <p className="text-gray-600">
                        {product.desc}
                    </p>
                    <div className="space-y-4">
                        <h3 className="font-medium">Select Colors</h3>
                        <div className="flex gap-3">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    className={`w-8 h-8 rounded-full ${color.class} ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-medium">Choose Size</h3>
                        <div className="flex flex-wrap gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 text-sm rounded-full ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        {!isAdded && (
                            <div className="flex items-center">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-2 border rounded-l hover:bg-gray-50"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-16 border-y h-[33px] text-center input-no-spin"
                                />
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-2 border rounded-r hover:bg-gray-50"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                        <button
                            onClick={isAdded ? handleRemoveFromCart : handleAddToCart}
                            className={`flex-1 px-6 py-3 text-white rounded-full transition-colors ${isAdded ? 'bg-green-500' : 'bg-black hover:bg-gray-800'}`}
                        >
                            {isAdded ? 'Added' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Comments/>
        <Products title="YOU MIGHT ALSO LIKE" isSelling={isSelling}/>
        <Newsletter/>
        </>
    )
}

export default Detail