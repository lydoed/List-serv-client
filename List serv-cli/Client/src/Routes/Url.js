import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {publick_routes, logRoute, unLogroutes} from "./Routes.js"
import { useEffect, useState } from "react";
import axios from "axios";



export default function Urls(){
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
    <BrowserRouter> 
        <Routes>
          {publick_routes.map((e)=>
            <Route key={e.path} path ={e.path} element={<e.component/>}  />
          )}
          {user?logRoute.map((e)=>
            <Route key={e.path} path ={e.path} element={<e.component/>}  />
          ):
          unLogroutes.map((e)=>
            <Route key={e.path} path ={e.path} element={<e.component/>}  />
          )}
          <Route path="*" element={<h1>Error</h1>}/>
        </Routes>
    </BrowserRouter>
    )
}