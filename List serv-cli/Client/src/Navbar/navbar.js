import { observer } from "mobx-react-lite";
import React, {useState, useEffect} from "react";
import axios from "axios";
import './Styles/Styles.css'


const Navbar = observer( ()=>{
    const [user, setUser] = useState(false)
    
    useEffect(() => {
      if(localStorage.getItem('user')){
        axios.post('http://localhost:3001/Auth', JSON.parse(localStorage.getItem('user'))).then((response) => {
          if(response.data.check === false){
            setUser(false)
          }else{
            setUser(true)
          } 
        }).catch((error) => {})}else{}
    },[])

    return (
    <div className="navbar">
      <ul className="navv">
      <li className="left-panel"><a  href="/" className="nav-buttom">Home</a></li>
      {user?
      <>
      <li className="left-panel"><a  href="/list" className="nav-buttom">List</a></li>
      <li className="right-panel" ><a onClick={e =>{e.preventDefault();localStorage.removeItem('user');setUser(false);window.location.href = '/'}} href="/" className="nav-buttom" >Exit</a></li>
      </>
      :<>
      <li className="right-panel"><a href="/login" className="nav-buttom">Login</a></li>
      <li className="right-panel"><a href="/register" className="nav-buttom">Register</a></li></>
      }
      </ul>
    </div>
  )
});


export default Navbar