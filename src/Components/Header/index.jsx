import "./index.css";
import { Link } from "react-router-dom"


const Header = () => {

    return (

        <header>
            <div className="forbig-devices">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <img className="bigdevice-logo" src="../IMAGES/LOGO.png" alt="logo"/>
                            </Link>
                        </li>

                        <li className="bigdevice-content">
                            <Link className="bigNav-link" to="/">
                                Home
                            </Link>

                            <Link className="bigNav-link" to="/jobs">
                                Jobs
                            </Link>
                        </li>

                        <li><button className="btn btn-primary text-white bigBtn">Logout</button></li>
                    </ul>
                </nav>
            </div>

            <div className="forsmall-devices">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <img className="smalldevice-logo" src="../IMAGES/LOGO.png" alt="logo" />
                            </Link>
                        </li>

                        <li className="smalldevice-content">
                            <Link className="nav-link" to="/">
                                {/* Home */}
                                <i className="fa-solid fa-house"></i>
                            </Link>

                            <Link className="nav-link" to="/jobs">
                                {/* Jobs */}
                                <i className="fa-solid fa-briefcase"></i>
                            </Link>
                        </li>

                        <li><button className="btn text-white"><i className="fa-solid fa-right-from-bracket"></i></button></li>
                    </ul>
                </nav>
            </div>

        </header>
    )


}


export default Header;

