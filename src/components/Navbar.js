import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bmicalculator">Bmi Calculator</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="bg-primary rounded" onClick={()=>{props.toggleMode('primary')}} style={{width:'25px', height:'25px', cursor:'pointer', marginRight:'5px'}}></div>
                        <div className="bg-danger rounded" onClick={()=>{props.toggleMode('danger')}} style={{width:'25px', height:'25px', cursor:'pointer', marginRight:'5px'}}></div>
                        <div className="bg-success rounded" onClick={()=>{props.toggleMode('success')}} style={{width:'25px', height:'25px', cursor:'pointer', marginRight:'5px'}}></div>
                        <div className="bg-warning rounded" onClick={()=>{props.toggleMode('warning')}} style={{width:'25px', height:'25px', cursor:'pointer', marginRight:'5px'}}></div>
                        <div className="bg-light rounded" onClick={()=>{props.toggleMode('light')}} style={{width:'25px', height:'25px', cursor:'pointer', marginRight:'5px', border:'1px solid', borderColor:'black'}}></div>
                        <div className="bg-dark rounded" onClick={()=>{props.toggleMode('dark')}} style={{width:'25px', height:'25px', cursor:'pointer', marginRight:'5px', border:'1px solid', borderColor:'white'}}></div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Default title",
    aboutText: "About"
}