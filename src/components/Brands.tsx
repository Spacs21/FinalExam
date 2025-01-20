import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"

const Brands = () => {
  return (
    <div className="bg-black">
        <div className="container mx-auto">
            <div className="flex flex-wrap h-[122px] justify-between items-center max-[1000px]:justify-center max-[1000px]:gap-x-16">
                <div>
                    <img src={img1} className="h-[43px] object-contain max-[800px]:h-[30px] max-[439px]:h-[25px]"/>
                </div>
                <div>
                    <img src={img2} className="h-[43px] object-contain max-[800px]:h-[30px] max-[439px]:h-[25px]"/>
                </div>
                <div>
                    <img src={img3} className="h-[43px] object-contain max-[800px]:h-[30px] max-[439px]:h-[25px]"/>
                </div>
                <div className="max-[439px]:hidden">
                    <img src={img4} className="h-[43px] object-contain max-[800px]:h-[30px] max-[439px]:h-[25px]"/>
                </div>
                <div>
                    <img src={img5} className="h-[43px] object-contain max-[800px]:h-[30px] max-[439px]:h-[25px]"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brands