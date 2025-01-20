import { useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import Carts from "../pages/Carts"
import Layout from "../pages/layout/Layout"
import Detail from "../pages/Detail"
import Checkout from "../pages/Checkout"

const Routers = () => {
  return (
    <>
        {
            useRoutes([
                {
                    path: "/",
                    element: <Layout/>,
                    children: [
                        {
                            path: "/",
                            element: <Home/>
                        },
                        {
                            path: "/carts",
                            element: <Carts/>
                        },
                        {
                            path: "product/:id",
                            element: <Detail/>
                        },
                        {
                            path: "/checkout",
                            element: <Checkout/>
                        }
                    ]
                }
            ])
        }
    </>
  )
}

export default Routers