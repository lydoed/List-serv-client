import React,{ useState}  from "react";
import './Styles/Styles.css'
import axios from "axios";




export default function List(){
    const [users, setUsers] = useState(null)
    const token = JSON.parse(localStorage.getItem('user'))


    async function generate(e){
        axios.post('http://localhost:3001/list', token).then((response) => {
            setUsers(response.data)
        }).catch((error) => {})
    }


    async function add(e){
        axios.post('http://localhost:3001/list/add', {about:{mail: token.mail, password:token.password}, boss: token.id, user: e}).then((response) => {
        setUsers(response.data)
        }).catch((error) => {})
    }

    async function rem(e){
        axios.post('http://localhost:3001/list/delete', {about:{mail: token.mail, password:token.password}, user: e}).then((response) => {
        setUsers(response.data)
        }).catch((error) => {})
    }


    return (
    <div>
        {users === null?<button onClick={generate} className="Butto">Generate List</button>:
        <ul>
        {token.role === 'user'?<li className="list" key={token.id}>{token.mail}   {token.nickname}</li>:
        token.role === 'boss'?    
        <><li className="list" key={token.id}>{token.mail}   {token.nickname} <p>You</p></li>
        {users.map((e)=>
        <li className="list" key={e.id}>{e.mail}   {e.nickname}  
        {e.subordin === token.id?<button onClick={()=>{rem(e.id)}} className='list-Butto'>Delete</button>:
        e.subordin === ''?<button onClick={()=>{add(e.id)}} className='list-Butto'>Add</button>:
        <p>Other boss subordin</p>}</li>)}
        </>:
        users.map((e)=>
        <li className="list" key={e.id}> {e.mail}   {e.nickname}</li>)}
        </ul>}
    </div>     
    )
}