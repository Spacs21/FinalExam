import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Announce from "../../components/Announce"
import { useState } from "react"


const Layout = () => {
  const [open, setOpen] = useState<boolean>(true)
  
  return (
    <div>
      {
        open &&
      <Announce setOpen={setOpen}/>
      }
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout