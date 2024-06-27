import './index.css';



const emptypeList = [
    {
        empId: 1234,
        label: "Fulltime"
    },
    {
        empId: 4567,
        label: "Parttime"
    },
    {
        empId: 8901,
        label: "Internship"
    },
    {
        empId: 5465,
        label: "Freelance"
    }
]


const FilterSection = () => {

    const api = "https://apis.ccbp.in/profile";

    const user = {
            profile_details: {
            name: "Rahul Attuluri",
            profile_image_url: "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
            short_bio: "Lead Software Developer and AI-ML expert"
        }
      }

    return (
        <>


            <ul>
                {
                    emptypeList.map(each => (
                        <li className='emptypeList'>
                            <input id={each.empId} type="checkbox" value={each.empId} />
                            <label htmlFor={each.empId}>{each.label}</label>
                        </li>
                    ))
                }
            </ul>
            <hr className='line-seperator' />
        </>



    )
}


export default FilterSection;