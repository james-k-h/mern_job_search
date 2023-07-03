import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { Navigate } from 'react-router-dom';
import React from "react";

const Landing = () => {
  const {user} = useAppContext()
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
    <Wrapper>
      <nav>
    <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Search </span>App
          </h1>
          <p>Helping you to organize your job search, one application at a time</p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
    </React.Fragment>
  );
};


export default Landing;
