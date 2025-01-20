
const Newsletter = () => {
  return (
    <div>
        <div className="container mx-auto max-[775px]:px-4">
            <div className="bg-black grid grid-cols-2 text-white h-[200px] items-center p-12 rounded-[25px] max-[775px]:grid-cols-1  max-[775px]:h-auto  max-[775px]:gap-4  max-[775px]:px-4">
                <div>
                    <h1 className="font-[800] font-integral text-5xl max-[1279px]:text-3xl max-[400px]:text-2xl">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <input type="text" className="w-[50%] h-[48px] rounded-[62px] px-8 text-black max-[1030px]:w-full" placeholder="Enter your email address"/>
                    <button className="w-[50%] bg-white text-black h-[46px] rounded-[62px] max-[1030px]:w-full">Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter