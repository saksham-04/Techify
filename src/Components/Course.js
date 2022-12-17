import React from 'react'
import Card from './Card'
import p1 from './course/p1.jpg';
import p2 from './course/p2.jpg';
import p3 from './course/p3.jpg';
import p4 from './course/p4.jpg';
import r1 from './course/r1.jpg';
import r2 from './course/r2.jpg';
import r3 from './course/r3.jpg';
import r4 from './course/r4.jpg';
import j1 from './course/j1.jpg';
import j2 from './course/j2.jpg';
import j3 from './course/j3.jpg';
import j4 from './course/j4.jpg';
import s1 from './course/s1.jpg';
import s2 from './course/s2.jpg';
import s3 from './course/s3.jpg';
import s4 from './course/s4.jpg';
import js1 from './course/js1.jpg';
import js2 from './course/js2.jpg';
import js3 from './course/js3.jpg';
import js4 from './course/js4.jpg';
import t1 from './course/t1.jpg';
import t2 from './course/t2.jpg';
import t3 from './course/t3.jpg';
import t4 from './course/t4.jpg';


export default function Course() {
  return (
    <div className='container'>
      <h1 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>Disclaimer</h1>
      <p style={{ fontFamily: 'Copperplate Gothic Light', color: '#001a6a' }}>These all study material are collected from free resoures.
      we'll be updating soon the study material as per the requirements received. Till yet this is the model structure of the Website</p>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>Python Tutorial for Beginners | Mr. Satish Gupta</h4>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>React Js Tutorials </h4>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className='row col-md-3 ' style={{ width: "18rem" }}>
                <Card pic={r1} title="Introduction to React Js + Installation" url="https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=1" />
                <Card pic={r2} title="Creating our first react app using create-react-app " url="https://www.youtube.com/watch?v=hnVOvvbQrwA&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=2" />
                <Card pic={r3} title="JavaScript Refresher" url="https://www.youtube.com/watch?v=kFe-RRaOy48&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=3" />
                <Card pic={r4} title="Understanding JSX" url="https://www.youtube.com/watch?v=JvC7aA24m4Q&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=4" />
                <Card pic={r1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" />
              </div>

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>Core Java</h4>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className='row col-md-3 ' style={{ width: "18rem" }}>
                <Card pic={j1} title="Core Java in Hindi Tutorials" url="https://www.youtube.com/watch?v=GvBTu50qSDQ&list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy&index=1" />
                <Card pic={j2} title=" Object Oriented Programming (OOPs) in Java Session-1 " url="https://www.youtube.com/watch?v=TA1Kpn-0vCY&list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy&index=2" />
                <Card pic={j3} title="Object Oriented Programming (OOPs) in Java Session-2" url="https://www.youtube.com/watch?v=ylcJJR8EdmY&list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy&index=3" />
                <Card pic={j4} title="Object Oriented Programming (OOPs) in Java Session-2" url="https://www.youtube.com/watch?v=BLR5GdxUYx4&list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy&index=4" />
                <Card pic={j1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy" />
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>SQL Server</h4>
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="accordion-body">
                <div className='row col-md-3 ' style={{ width: "18rem" }}>
                  <Card pic={s1} title="Introduction of SQL Server " url="https://www.youtube.com/watch?v=eSUG8zZ7DfQ&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=1" />
                  <Card pic={s2} title=" How to Work with SQL Server and Introduction to SSMS Part-1  " url="https://www.youtube.com/watch?v=x5f7JqkJfKo&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=2" />
                  <Card pic={s3} title="SQL Server Management Studio - SSMS Part-2" url="https://www.youtube.com/watch?v=QOcKU07Wvws&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=3" />
                  <Card pic={s4} title="SQL Server Management Studio - SSMS Part-3" url="https://www.youtube.com/watch?v=whH1WcFXHLI&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=4" />
                  <Card pic={s1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>Tailwind CSS</h4>
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className='row col-md-3 ' style={{ width: "18rem" }}>
                <Card pic={t1} title="Introduction to Tailwind CSS & Utility first Workflow" url="https://www.youtube.com/watch?v=L4_jarMnB0c&list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O&index=1" />
                <Card pic={t2} title="Our First Tailwind CSS Website: Tailwind Tutorial #2" url="https://www.youtube.com/watch?v=p0Q8SQSCoZg&list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O&index=2" />
                <Card pic={t3} title="Why use Tailwind CSS?" url="https://www.youtube.com/watch?v=aUunolbb1xU&list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O&index=3" />
                <Card pic={t4} title="Fonts & Sizing" url="https://www.youtube.com/watch?v=YmkKCdCDpwM&list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O&index=4" />
                <Card pic={t1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy" />
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>JavaScript</h4>
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className='row col-md-3 ' style={{ width: "18rem" }}>
                <Card pic={js1} title="Introduction to JavaScript + Setup " url="https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=1&t=728s" />
                <Card pic={js2} title="Variables in JavaScript " url="https://www.youtube.com/watch?v=Q4p8vRQX8uY&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=2" />
                <Card pic={js3} title="const, let and var in JavaScript" url="https://www.youtube.com/watch?v=Icev9Oxf0WA&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=3" />
                <Card pic={js4} title="Primitives and Objects in JavaScript" url="https://www.youtube.com/watch?v=qpU3WIqRz9I&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=4" />
                <Card pic={js1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy" />
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>BootStrap and Github</h4>
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse " aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="accordion-body">
                <div className='row col-md-3 ' style={{ width: "18rem" }}>
                  <Card pic={s1} title="Introduction of SQL Server " url="https://www.youtube.com/watch?v=eSUG8zZ7DfQ&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=1" />
                  <Card pic={s2} title=" How to Work with SQL Server and Introduction to SSMS Part-1  " url="https://www.youtube.com/watch?v=x5f7JqkJfKo&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=2" />
                  <Card pic={s3} title="SQL Server Management Studio - SSMS Part-2" url="https://www.youtube.com/watch?v=QOcKU07Wvws&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=3" />
                  <Card pic={s4} title="SQL Server Management Studio - SSMS Part-3" url="https://www.youtube.com/watch?v=whH1WcFXHLI&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=4" />
                  <Card pic={s1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingEight">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>HTML</h4>
            </button>
          </h2>
          <div id="collapseEight" class="accordion-collapse collapse " aria-labelledby="headingEight" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="accordion-body">
                <div className='row col-md-3 ' style={{ width: "18rem" }}>
                  <Card pic={s1} title="Introduction of SQL Server " url="https://www.youtube.com/watch?v=eSUG8zZ7DfQ&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=1" />
                  <Card pic={s2} title=" How to Work with SQL Server and Introduction to SSMS Part-1  " url="https://www.youtube.com/watch?v=x5f7JqkJfKo&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=2" />
                  <Card pic={s3} title="SQL Server Management Studio - SSMS Part-2" url="https://www.youtube.com/watch?v=QOcKU07Wvws&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=3" />
                  <Card pic={s4} title="SQL Server Management Studio - SSMS Part-3" url="https://www.youtube.com/watch?v=whH1WcFXHLI&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=4" />
                  <Card pic={s1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingNine">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>PHP </h4>
            </button>
          </h2>
          <div id="collapseNine" class="accordion-collapse collapse " aria-labelledby="headingNine" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="accordion-body">
                <div className='row col-md-3 ' style={{ width: "18rem" }}>
                  <Card pic={s1} title="Introduction of SQL Server " url="https://www.youtube.com/watch?v=eSUG8zZ7DfQ&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=1" />
                  <Card pic={s2} title=" How to Work with SQL Server and Introduction to SSMS Part-1  " url="https://www.youtube.com/watch?v=x5f7JqkJfKo&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=2" />
                  <Card pic={s3} title="SQL Server Management Studio - SSMS Part-2" url="https://www.youtube.com/watch?v=QOcKU07Wvws&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=3" />
                  <Card pic={s4} title="SQL Server Management Studio - SSMS Part-3" url="https://www.youtube.com/watch?v=whH1WcFXHLI&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=4" />
                  <Card pic={s1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTen">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>Machine Learning</h4>
            </button>
          </h2>
          <div id="collapseTen" class="accordion-collapse collapse " aria-labelledby="headingTen" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="accordion-body">
                <div className='row col-md-3 ' style={{ width: "18rem" }}>
                  <Card pic={s1} title="Introduction of SQL Server " url="https://www.youtube.com/watch?v=eSUG8zZ7DfQ&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=1" />
                  <Card pic={s2} title=" How to Work with SQL Server and Introduction to SSMS Part-1  " url="https://www.youtube.com/watch?v=x5f7JqkJfKo&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=2" />
                  <Card pic={s3} title="SQL Server Management Studio - SSMS Part-2" url="https://www.youtube.com/watch?v=QOcKU07Wvws&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=3" />
                  <Card pic={s4} title="SQL Server Management Studio - SSMS Part-3" url="https://www.youtube.com/watch?v=whH1WcFXHLI&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=4" />
                  <Card pic={s1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingEleven">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>C++</h4>
            </button>
          </h2>
          <div id="collapseEleven" class="accordion-collapse collapse " aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="accordion-body">
                <div className='row col-md-3 ' style={{ width: "18rem" }}>
                  <Card pic={s1} title="Introduction of SQL Server " url="https://www.youtube.com/watch?v=eSUG8zZ7DfQ&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=1" />
                  <Card pic={s2} title=" How to Work with SQL Server and Introduction to SSMS Part-1  " url="https://www.youtube.com/watch?v=x5f7JqkJfKo&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=2" />
                  <Card pic={s3} title="SQL Server Management Studio - SSMS Part-2" url="https://www.youtube.com/watch?v=QOcKU07Wvws&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=3" />
                  <Card pic={s4} title="SQL Server Management Studio - SSMS Part-3" url="https://www.youtube.com/watch?v=whH1WcFXHLI&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=4" />
                  <Card pic={s1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwelve">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              <h4 style={{ fontFamily: 'Copperplate Gothic Bold', color: '#02289f' }}>Telnet</h4>
            </button>
          </h2>
          <div id="collapseTwelve" class="accordion-collapse collapse " aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div class="accordion-body">
                <div className='row col-md-3 ' style={{ width: "18rem" }}>
                  <Card pic={s1} title="Introduction of SQL Server " url="https://www.youtube.com/watch?v=eSUG8zZ7DfQ&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=1" />
                  <Card pic={s2} title=" How to Work with SQL Server and Introduction to SSMS Part-1  " url="https://www.youtube.com/watch?v=x5f7JqkJfKo&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=2" />
                  <Card pic={s3} title="SQL Server Management Studio - SSMS Part-2" url="https://www.youtube.com/watch?v=QOcKU07Wvws&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=3" />
                  <Card pic={s4} title="SQL Server Management Studio - SSMS Part-3" url="https://www.youtube.com/watch?v=whH1WcFXHLI&list=PLVlQHNRLflP8WFEvFvANnUsD2y8HJIJh1&index=4" />
                  <Card pic={s1} title="Playlist" desc="Click below to access full playlist" url="https://www.youtube.com/playlist?list=PLVlQHNRLflP8kPvCvEM7ZopbRB93joJXy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>)
}
