import React, {useState} from "react";
import axios from "axios";
import './Styles/Styles.css'


export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [log, setLog] = useState(true)

    async function login(e){
        e.preventDefault();
        axios.post('http://localhost:3001/login', {
            mail: email,
            password: password
        }).then((response) => {
            if(response.data.id === false){   
                setLog(false)
            }else{
                localStorage.setItem('user', JSON.stringify(response.data))
                setLog(true)
                window.location.href = '/'
            } 
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
    <div>       
        <form onSubmit={login} className='auth-panel'>
            {log?<></>:<p>Your email or password incorect</p>}
            <input value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter your email..." name="mail"></input>
            <input value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter your password..." name="password"></input>
            <button>OK</button>
        </form>
    </div>
    )
}