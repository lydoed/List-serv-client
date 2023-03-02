import React, { useState, useEffect } from "react";
import axios from "axios";
import './Styles/Styles.css'

export default function Home(){
    const [user, setUser] = useState(false)

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('user')) !== null){
        axios.post('http://localhost:3001/Auth', JSON.parse(localStorage.getItem('user'))).then((response) => {
            if(response.data.check === false){
                setUser(false)
            }else{
                setUser(true)
            } 
        })
        .catch((error) => {})}else{}
    },[])



    return (
    user? 
        <h1 className="Central">Hello {JSON.parse(localStorage.getItem('user')).nickname}!</h1>:
        <h1 className="Central">Hello anonim!</h1>
    )
}