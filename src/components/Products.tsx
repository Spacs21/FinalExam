import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { ProductType } from "../types/index"
import Rating from '@mui/material/Rating';
import Loading from "./Loading";
import { NavLink } from "react-router-dom";

const Products:React.FC<{title: string, isSelling: boolean}> = ({title, isSelling}) => {
    const {data, isLoading} = useQuery<ProductType[]>({
        queryKey: ['products'],
        queryFn: ()=> {
            return axios.get("https://6787c598c4a42c9161082dbc.mockapi.io/blogs").then(res => res.data)
        }
     })
     const [count, setCount] = useState<number>(5)
     const [isDisabled, setDisabled] = useState<boolean>(false)
     const handleLimit = ()=>{
        setCount(p => p + 5)
        setDisabled(true)
     }

     const slicedData = isSelling ? data?.slice(5, count + 5) : data?.slice(0, count)

  return (
    <div>
        <div className="container mx-auto py-6">
            <div className="py-20">
                <h1 className="text-black font-[800] font-integral text-[48px] text-center">{title}</h1>
            </div>
            <div className="flex flex-wrap gap-2 px-2 justify-between max-[629px]:flex-col max-[629px]:justify-center max-[629px]:items-center">
                {
                    isLoading ? <Loading/> : 
                    slicedData?.map(item=>(
                        <div key={item.id} className="w-[295px]">
                            <div className="bg-[#f8f8f8] rounded-lg">
                                <NavLink to={`product/${item.id}`}><img src={item.url} className="h-[300px] object-contain transition-transform duration-300 hover:scale-110 p-4 "/></NavLink>
                            </div>
                            <h1 className="font-semibold text-[20px]">{item.title}</h1>
                            <div>
                                <Rating name="read-only" value={item.star} readOnly />
                            </div>
                            <h2 className="font-bold text-[24px]">${item.price}</h2>
                        </div>
                    ))
                }
              
                <div className="flex justify-center items-center w-full mt-3">
                    <button 
                    onClick={handleLimit} 
                    disabled={isDisabled} 
                    className={`px-16 rounded-3xl border py-3 font-semibold text-black transition-all duration-300 ${
                        isDisabled ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-white hover:bg-slate-300 active:bg-blue-700'
                    }`}
                    >
                    View All
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products