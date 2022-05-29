import React, { useState, useEffect } from "react";

import { connectWallet ,getCurrentWalletConnected } from "../../utils/interact";
import { useNavigate } from "react-router-dom";


import "./home.css"
const Home = () => {
   
    const Navigate = useNavigate();

    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");


    useEffect(()=>{
        if(!localStorage.getItem("isloggin")){
            Navigate("/")
       }
    })
       

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        console.log(walletResponse,"wallet response")
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
        NavigateToMint();
      };
    
    
      useEffect( () => {
        async function fetchData(){
          const {address, status} = await getCurrentWalletConnected();
          setWallet(address)
          setStatus(status); 
        }
        fetchData()
    }, [])


    const NavigateToMint = () => {
   
        Navigate("/Project1");
     

    
  };
    return (
        <div className="homepage">
             {status ?  ""
            
            :  <button onClick={connectWalletPressed}>
            {walletAddress ? "wallect connected" : "Connect Wallet"}
          </button> 
        }
            
        </div>
    )
  }
  
  export default Home