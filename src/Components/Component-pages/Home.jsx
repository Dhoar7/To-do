import React from "react";
import { CgCalculator } from "react-icons/cg";
import { FcTodoList } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import './Home.css'

const Home = ()=>{

    const navigate = useNavigate();

    return(
        <div>
            <FcTodoList className="tod" onClick={()=>navigate('/todo')} />
            <CgCalculator className="cal" onClick={()=>navigate('/calculator')} />
        </div>
    )
}

export default Home;