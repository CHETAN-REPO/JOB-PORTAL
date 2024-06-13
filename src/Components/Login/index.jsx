import './index.css'


const Login = () => {


    const onSubmitUserDetails = async (event) => {

        event.preventDefault();

        const api = "https://apis.ccbp.in/login";

        const userDetails = {
            username: "rahul",
            password: "rahul@2021"
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }


        const response = await fetch(api, options);

        const  fetchData = await response.json()

        console.log(fetchData.jwt_token);
    }


    return (

        <div className='my-form-cont '>
            <form className='w-25 my-form' onSubmit={onSubmitUserDetails}>
                <div className="logo-container">
                    <img src="/IMAGES/Main-logo.png" alt="Logo" className="Logo-img" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>

    )
}


export default Login;