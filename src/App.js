import {Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './componets/home/home';
import Login from './componets/login/login';
import Project1 from './componets/project/project1';
import Header from './componets/header/header';
import Error from "./componets/error";

function App() {
  return (
   <>
     
     <Header />
    <div className='App'>
 
     <Routes>
       
       <Route  path="/"  element={<Login />}/>
       <Route  path="/home"  element={<Home />}/>
       <Route  path="/project1"  element={<Project1 />}/>
       <Route  path="*"  element={<Error />}/>

       

     </Routes>


    
    </div>
    
   </>
  );
}

export default App;
