import React from 'react'

export default function (props) {
    return (
        <div>
            <div className="card my-3">
            <img src={props.pic} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title" style={{ fontfamily: 'Calibri Light (Headings)', color: '#001a6a' }}>{props.title}</h5>
                <p className="card-text"style={{ fontfamily: 'Calibri Light (Headings)', color: '#001a6a' }}>{props.desc}</p>
                <a href={props.url} className="btn btn-primary">Know More</a>
            </div>
        </div>


        </div>
    )
}
