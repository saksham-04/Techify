import React from 'react';

import pic from './techify.jpg';
import search from './search.png';

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <img src={pic} width={175} height={100} alt='Simmi Foundation' />
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><h1 style={{ color: '#02289f' }}><i><b>{props.title} </b></i></h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Career"><b>Career options</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Course"><b>Courses Available</b></a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="/textform"><b>News updates</b></a>
              </li>
              

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit"><img src={search} height={20} width={25}/> </button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}
