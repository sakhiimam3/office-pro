import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Project1 = () => {

    const Navigate=useNavigate()

    const [data,setData]=useState([])


useEffect(()=>{
    if(!localStorage.getItem("isloggin")){
        Navigate("/")
   }
})


// api data 
const getData=async()=>{
      const res= await axios.get("https://my-json-server.typicode.com/sakhiimam3/mockdata/posts")
    
      setData(res.data)
}


useEffect(()=>{
      
    getData()     
},[])
   
  return (
    <>
                 <div className="container">
                     <div className="row">
                     {data.map((item)=>{
                    return <React.Fragment  key={item.id}>
                        <div className="col-md-4">
                               <div className="card">
                                   <div className="card-title">{item.title}</div>
                                   <div className="card-body">
                                              {item.name}
                                   </div>
                               </div>
                         </div>
                    
                     </React.Fragment>
              })}    
                        
                     </div>
                 </div>
             
    </>
  )
}

export default Project1