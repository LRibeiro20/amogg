import React from 'react';
import logo from "../img/logo.png";
import '../App.css';

const Navbar = () => {
  return (
    <div className='container'> 
      <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        {/* <svg className="bi me-2" width="40" height="32"></svg> */}
        <img src={logo} alt="" style={{width:'150px'}}/>
      </a>

      <ul className="nav nav-pills d-flex">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Inicio</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Sobre</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Publicacoes</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Noticias</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Saiba Mais</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Amog Club</a></li>
      </ul>
     </nav>

   </div>


  )
}

export default Navbar