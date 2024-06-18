import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'


const Jobs = ()=>{

    const token = Cookies.get("jwtToken");

    const navigate = useNavigate();


    useEffect(()=>{
        if(token === undefined){

            navigate("/login");

        }

    },[])



    return(
        <>
            <h1>Jobs Section</h1>
        </>
    )
}


export default Jobs;