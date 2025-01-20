import { useState } from "react"
import Banner from "../components/Banner"
import Brands from "../components/Brands"
import Products from "../components/Products"
import Browse from "../components/Browse"
import Reviews from "../components/reviews/Reviews"
import Newsletter from "../components/Newsletter"

const Home = () => {
  const [isSelling] = useState<boolean>(false)
  return (
    <div>
      <Banner/>
      <Brands/>
      <Products title="NEW ARRIVALS" isSelling={isSelling}/>
      <div className="w-full border-b container mx-auto mt-5"></div>
      <Products title="TOP SELLING" isSelling={!isSelling}/>
      <Browse/>
      <Reviews/>
      <Newsletter/>
    </div>
  )
}

export default Home