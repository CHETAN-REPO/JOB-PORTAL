import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css'


const Home = () => {

    const token = Cookies.get("jwtToken");

    const navigate = useNavigate();

    useEffect(()=>{

        if(token === undefined){

            navigate("/login");

        }

    },[])


    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <img src="/IMAGES/LOGO.png" alt="Logo-img" className='Logo-Img ' />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Jobs</a>
                    </li>
                </ul>
                <button className="btn btn-primary my-2 my-sm-0 logout-btn" type="submit">Logout</button>

            </div>
        </nav>
    )
}


export default Home;