import React from 'react'
import Card from './Card'
import p1 from './course/p1.jpg';
import p2 from './course/p2.jpg';
import p3 from './course/p3.jpg';
import p4 from './course/p4.jpg';
import r1 from './course/r1.jpg';


export default function Course() {
  return (
    <div className='container'>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}>Python Tutorial for Beginners | Mr. Satish Gupta</h4>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              
                <div className='row col-md-3 ' style={{ width: "18rem" }}>
                  <Card pic={p1} title="Python Introduction" url="https://www.youtube.com/watch?v=dZkw_S9xLyw&list=PLVlQHNRLflP_7_EVsJvOnyEhpfvDIJ73z&index=2" />
                  <Card pic={p2} title="What is Python? and Python Features" url="https://www.youtube.com/watch?v=3QOvLZdjlII&list=PLVlQHNRLflP_7_EVsJvOnyEhpfvDIJ73z&index=2" />
                  <Card pic={p3} title="Python Applications" url="https://www.youtube.com/watch?v=Ufuvwov6Wfw&list=PLVlQHNRLflP_7_EVsJvOnyEhpfvDIJ73z&index=3" />
                  <Card pic={p4} title="Python Datatypes" url="https://www.youtube.com/watch?v=W90wpYQIgVw&list=PLVlQHNRLflP_7_EVsJvOnyEhpfvDIJ73z&index=4" />
                  <Card pic={p1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP_7_EVsJvOnyEhpfvDIJ73z" />
                  </div>
              
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}>React Js Tutorials </h4>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <div className='row col-md-3 ' style={{ width: "18rem" }}>
                  <Card pic={r1} title="Introduction to React Js + Installation" url="https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=1" />
                  <Card pic={p2} title="What is Python? and Python Features" url="https://www.youtube.com/watch?v=3QOvLZdjlII&list=PLVlQHNRLflP_7_EVsJvOnyEhpfvDIJ73z&index=2" />
                  <Card pic={p3} title="Python Applications" url="https://www.youtube.com/watch?v=Ufuvwov6Wfw&list=PLVlQHNRLflP_7_EVsJvOnyEhpfvDIJ73z&index=3" />
                  <Card pic={p4} title="Python Datatypes" url="https://www.youtube.com/watch?v=W90wpYQIgVw&list=PLVlQHNRLflP_7_EVsJvOnyEhpfvDIJ73z&index=4" />
                  <Card pic={p1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP_7_EVsJvOnyEhpfvDIJ73z" />
                  </div>
              
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

    </div>)
}
