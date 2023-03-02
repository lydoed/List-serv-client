import React, { useState } from "react";
import axios from "axios";
import './Styles/Styles.css'

export default function Register(){
    const [res, setRes] = useState(true)
    const [answ, setAnsw] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nick, setNick] = useState('')

    
    async function register(e){
        e.preventDefault();
        if(email !== '' && password !== '' && nick !== ''){
        await axios.post('http://localhost:3001/register', { mail:email, password:password, nickname:nick }).then((response) => {
            if(response.data.check === false){
                setAnsw(false)
            }else{
                setRes(true)
                setAnsw(true)
                localStorage.setItem('user', JSON.stringify(response.data))
                window.location.href = '/'
            }}).catch((error) => {})
        }else{setRes(false)}      
    } 
 
    return (
    <div>
        <form onSubmit={register} className='register-panel'>
            {res?<></>:<p>You don`t enter mail/nick/password!</p>}
            {answ?<></>:<p>You have an account!</p>}
            <input value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter your email..." name="mail"></input>
            <input value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter your password..." name="password"></input>
            <input value={nick} onChange={event => setNick(event.target.value)} placeholder="Enter your name..." name="name"></input>
            <button type="submit">OK</button>
        </form>
    </div>
    )
}