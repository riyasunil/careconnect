import React from "react"; 
import { useState } from "react"
import './Home.css'
import SearchIcon from './Search.svg'

const Home = () => {
    //const [service,setService]= useState([])
const [searchTerm, setSearchTerm] = useState('')
    return(
<div className="home">
    <h3>care connect</h3>
    <div className="search">
                    <input
                        placeholder="Search for services"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />

                    <img
                        src={SearchIcon}
                        alt="Search"
                        //onClick={() }
                    />   
                </div>
        
    
</div>
    )
}

export default Home