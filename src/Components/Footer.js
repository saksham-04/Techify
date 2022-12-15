import React from 'react'

export default function Footer() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-{white} bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Techify 2022-23</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">All copyrights reserved.</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><p> Contacts- +91 9413XXXXXX
                Email id:- info@techify.com
             </p></a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
