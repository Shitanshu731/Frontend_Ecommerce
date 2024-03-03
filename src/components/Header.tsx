import React, { useState } from 'react'
import { FaSearch,FaShoppingBag,FaSign,FaUser,FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { User } from '../types/types'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import toast from 'react-hot-toast'
const user = {_id : "asdad" , role : "admin"}
interface propsType{
  user : User | null;
}
const Header = ({user}: propsType) => {
  const navigate = useNavigate();
  const [isOpen,setIsOpen] = useState(false);
  
  const logoutHandler = async() => {
    try{
      await signOut(auth);
      toast.success("Sign Out SuccessFully")
    }catch(err){
      toast.error("SignOut Failed")

    }
    setIsOpen(false)
    navigate("/login")
  }
  return (
    <nav className="header">
      <Link onClick = {() => setIsOpen(false)}  to = {"/"}>Home</Link>
      <Link onClick = {() => setIsOpen(false)} to= {"/search"}><FaSearch /></Link>
      <Link onClick = {() => setIsOpen(false)} to = {"/cart"}><FaShoppingBag /></Link>
      {
        user?._id ? (
          <>
          <button onClick = {() => setIsOpen(prev => !prev)}><FaUser /></button>
          <dialog open={isOpen}>
            <div>
              {
                user.role === 'admin' && (<Link onClick = {() => setIsOpen(false)} to ={"/admin/dashboard"}>Admin</Link>)
              }
              <Link onClick = {() => setIsOpen(false)} to ={"/orders"} >Orders</Link>
              <button onClick = {logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
          </>
        )
         : (<Link to = {"/login"}><FaSignOutAlt /></Link>)
      }
    </nav>
  )
}

export default Header
