import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Jobs from "./Components/Jobs";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";




const App = () =>{


  return( 

    <Routes>

        <Route path="/" element = {<Home/>} ></Route>

        <Route path="/jobs" element = {<Jobs/>} ></Route>

        <Route path="/login" element = {<Login/>} ></Route>

        <Route path="/*" element = {<NotFound/>} ></Route>


    </Routes>

  )
}


export default App;




