import img from "../assets/banner.jpg"
const Banner = () => {
  return (
    <div className="bg-[#F2F0F1]">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 max-[1316px]:grid-cols-1">
              <div className="flex flex-col justify-center gap-4 max-[1316px]:items-center max-[1316px]:text-center max-[1316px]:p-4">
                <h1 className="font-[800] text-[64px] leading-[64px] font-integral w-[700px] max-[1316px]:w-full max-[1316px]:text-4xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-[#00000099]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="w-[200px] h-[51px] bg-black text-white rounded-[62px]">Shop Now</button>
                <div className="flex gap-4 flex-wrap max-[541px]:justify-center">
                  <div>
                    <h1 className="font-integral font-bold text-[40px]">200+</h1>
                    <p className="text-[#00000099]">International Brands</p>
                  </div>
                  <div className="border-x-2 px-4 max-[541px]:border-r-0 max-[379px]:border-none">
                    <h1 className="font-integral font-bold text-[40px]">2,000+</h1>
                    <p className="text-[#00000099]">High-Quality Products</p>
                  </div>
                  <div>
                    <h1 className="font-integral font-bold text-[40px]">30,000+</h1>
                    <p className="text-[#00000099]">Happy Customers</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <img src={img} className="h-[888px] max-[1316px]:h-[700px] max-[467px]:h-[450px] w-full object-contain"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner