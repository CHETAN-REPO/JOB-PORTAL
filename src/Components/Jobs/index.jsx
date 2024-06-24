import './index.css';
import Header from '../Header';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

// {
//     "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
//     "title": "Devops Engineer",
//     "rating": 4,
//     "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
//     "location": "Delhi",
//     "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
//     "employment_type": "Internship",
//     "package_per_annum": "10 LPA"
//   }


const Jobs = ()=>{

    useEffect (()=>{

        const token = Cookies.get("jwtToken");

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

            console.log(fetchData.jobs);

        }

        fetchJobsData();

    },[])


    return(
        <>
            <Header/>
            <h1>Jobs Section</h1>
        </>
    )
}


export default Jobs;