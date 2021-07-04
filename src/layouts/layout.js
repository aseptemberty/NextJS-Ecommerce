import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import MenuComponent from '../components/menuComponents/menuComponent'
import Modal  from "../components/ui/notifications/Modal"
import React from "react"
import { TYPES } from "../../types/constants"


function Layout({ children}) {
  
  return (
    <div>
      <HeaderComponent/>
      <Modal/>
      <MenuComponent />
      <div className="px-md-10 px-sm-4 px-3 "  >
        <main className="w-full">{children}</main>
      </div>
      <FooterComponent/>
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default Layout