import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./login.css"
const Login = () => {
    const Navigate =useNavigate()
    const [err,setErr]=useState()
    const [message,setMessage]=useState()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    localStorage.clear()
  

//   login 
//  "email": "eve.holt@reqres.in",
//  "password": "cityslicka"


    const Login = () => {
        const {  email, password  } = user
        if( email && password){
          
            axios.post("https://reqres.in/api/login", user)
            .then( res => {
             if(res.data.token){
                 localStorage.setItem("isloggin",res.data.token)
                  setMessage("user succesfully created")
                 Navigate("/home")
                 
             }
           
              
            })
            .catch((err)=>{
                  setErr(err.message)
            })
        } else {
            alert("invalid input")
        }
        
    }
    return (
        <div className="login">
           <h6>{ err}</h6> 
           <h5 className="text-success">{message}</h5>
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
        <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
        <div className="button" onClick={Login} >Login</div>
        <div>or</div>
        <div className="button"  >Register</div>
    </div>
    )
  }
  
  export default Login