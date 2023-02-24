import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from "../pages/Authentication/Signup";
import Login from "../pages/Authentication/Login"
import Dashboard from "../pages/Dashboard/Dashboard";
import PageNotFound from "../pages/PageNotFound"

const Routers = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          
          <Route   path="*" element={<PageNotFound />} />
       </Routes>
      </Router>
    );
  }
  
  export default Routers;