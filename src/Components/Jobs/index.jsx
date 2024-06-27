import './index.css';
import Header from '../Header';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import FilterSection from '../FilterSection';
import DisplayAllJobs from '../DisplayAllJobs';

// {
//     "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
//     "title": "Devops Engineer",
//     "rating": 4,
//     "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//     "location": "Delhi",
//     "job_description": "We are looking htmlFor a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
//     "employment_type": "Internship",
//     "package_per_annum": "10 LPA"
//   }


const Jobs = ()=>{

        const token = Cookies.get("jwtToken");

        const [allValues, setValues] = useState({

            jobsList: []
        });

        useEffect(()=>{
            
            const fetchJobsData = async ()=>{

                const api = "https://apis.ccbp.in/jobs";
    
                const options = {
                    method: 'GET',
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }

            const response = await fetch(api,options);

            const fetchData = await response.json();

            if(response.ok === true){

                setValues({...allValues, jobsList : fetchData.jobs})
            }

        }

        fetchJobsData();

    },[])


    return(
        <>
            <div>
                <Header/>
            </div>


            <div className='filter-alljobs-container'>

                <div className="filter-section-cont">
                    <FilterSection/>
                </div>


                <div className="all-jobs-cont">
                    <ul>
                        {
                            allValues.jobsList.map( each => <DisplayAllJobs key={each.id} jobsItem ={each}/>)
                        }
                    </ul>
                    
                </div>

            </div>
        </>
    )
}


export default Jobs;


{/* <div className='jobCont'>
                <div className="heroContainer">
                    <div className="sidebar">
                        <div className="hero-card">
                            <div className="profile"></div>
                            <h3>Santosh Kumar</h3>
                            <p>Lead Software Developer and AI-ML expert</p>
                        </div>
                        <hr className="seperator" />

                        <div className="Employ-type">
                            <h5>Type of Employment</h5>
                                <li><input type="checkbox" className="checkbox-input" id="FULLTIME"></input>
                                <label htmlhtmlFor="FULLTIME" className="filter-label">Full Time</label></li>
                                <li><input type="checkbox" className="checkbox-input" id="FULLTIME"></input>
                                <label htmlFor="FULLTIME" className="filter-label">Part Time</label></li>
                                <li><input type="checkbox" className="checkbox-input" id="FULLTIME"></input>
                                <label htmlFor="FULLTIME" className="filter-label">Freelance</label></li>
                                <li><input type="checkbox" className="checkbox-input" id="FULLTIME"></input>
                                <label htmlFor="FULLTIME" className="filter-label">Internship</label></li>
                        </div>
                        <hr className="seperator" />

                        <div className="salaryrange">
                            <h5>Salary Range</h5>
                            <li><input name="salrang" type="radio" className="checkbox-input" value="1000000"></input>
                            <label htmlFor="1000000" className="filter-label">10 LPA and above</label></li>

                            <li><input name="salrang" type="radio" className="checkbox-input" value="2000000"></input>
                            <label htmlFor="2000000" className="filter-label">20 LPA and above</label></li>

                            <li><input name="salrang" type="radio" className="checkbox-input" value="3000000"></input>
                            <label htmlFor="3000000" className="filter-label">30 LPA and above</label></li>

                            <li><input name="salrang" type="radio" className="checkbox-input" value="4000000"></input>
                            <label htmlFor="4000000" className="filter-label">40 LPA and above</label></li>
                        </div>

                    </div>
                </div>
                <div className="jobsContainer"></div>
            </div> */}