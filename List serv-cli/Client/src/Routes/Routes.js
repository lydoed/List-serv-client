import List from "../Elements/List/List.js"
import Home from "../Elements/Home/Home.js"
import Login from "../Elements/Login/Login.js"
import Register from "../Elements/Register/Register.js"




const publick_routes = [
    {path:"/", component: Home},
    {path:"/list", component: List}
]

const unLogroutes = [
    {path:"/login", component: Login},
    {path:"/register", component: Register}
]


const logRoute = [{path:"/list", component: List}]



export {publick_routes, unLogroutes, logRoute}