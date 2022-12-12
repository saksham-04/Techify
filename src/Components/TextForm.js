import React, { useState } from 'react';
import HeaderSlide from './HeaderSlide';
import nelson from './nelson.jpg';
import About from './About';

export default function TextForm(props) {
  <h2>Complaints/Queries</h2>
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleClearText = () => {
    console.log("Clear text was clicked" + text);
    let newtext = "";
    setText(newtext)
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value)

  }
  const [text, setText] = useState("");
  return (
    <div className='textform'>
      
      <img src={nelson} height={275} width={1220} alt="logo" />
            <h1 align='center' style={{ fontFamily: 'Algerian', color: '#d30808' }}>Welcome to Techify- Simply Learn</h1>
            <div className='container'>
              <HeaderSlide />
            </div>
            <div className='container my-3'>
              <About />         
                                    
            </div>


            <h1 style={{ color: '#d30808', fontFamily: 'Algerian' }}>Complaints And Queries</h1>
      <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h3>{props.heading} </h3>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" cols="30" rows="10"></textarea>

      </div>
      <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h3> Your text summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length}  minutes reads </p>
        <h2> Preview </h2>
        {text}
        </div>
        <div className="container">
        <button className="btn btn-success mx-2 my-2 " onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-2 my-2" onClick={handleClearText}> Clear text</button>
        </div>
      <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>

      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">First name</label>
          <input type="text" className="form-control" id="validationCustom01" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">Last name</label>
          <input type="text" className="form-control" id="validationCustom02" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">Email Adress</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
            <div className="invalid-feedback">
              Please enter an valid email Adress
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">City</label>
          <input type="text" className="form-control" id="validationCustom03" required />
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">State</label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value="">Choose...</option>
            <option>Rajasthan</option>
            <option>Jammu and Kashmir</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
          </select>
          <div className="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">Zip</label>
          <input type="text" className="form-control" id="validationCustom05" required />
          <div className="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-success" type="submit">Submit form</button>
        </div>
      </form>
      </div>

    </div>

  )
}
