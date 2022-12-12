import React from 'react'

export default function (props) {
    return (
        <div>
            <div class="card my-3">
            <img src={props.pic} class="card-img-top" alt="..." />

            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <a href={props.url} class="btn btn-primary">Play Now</a>
            </div>
        </div>


        </div>
    )
}
