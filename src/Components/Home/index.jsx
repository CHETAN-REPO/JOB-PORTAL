import './index.css';
import Header from '../Header';
import { Link } from 'react-router-dom';


const Home = () => (

    <section>
        <Header />
        <div className="small-cont">
            <div className="smallhome-cont">
                <h1 className='smallhome-heading'>
                    Find The Job That Fits Your Life
                </h1>

                <div className="smallhome-descr">
                    Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential.
                </div>

                <Link className="smallhome-btn" to="/jobs">
                    <button>Find Jobs</button>
                </Link>
            </div>

            <div className="smallimg-cont"></div>
        </div>
    </section>

)

export default Home;