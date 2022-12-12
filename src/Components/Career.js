import React from 'react';
import sd from './sd.jpg';
import sd1 from './sd1.jpg';
import ds from './ds.jpg';
import ds2 from './ds2.png';
import ux from './ux.jpg';
import mobile from './mobile.jpg'
export default function Career() {
  return (
    <div className='container my-3'>
      <h1 align='left' style={{ fontFamily: 'Algerian', color: '#d30808' }}>Top 10 famous jobs for Computer Science majors</h1>
      <ul><h3 style={{ fontfamily: 'Calibri Light (Headings)', color: '#001a6a' }}>
        <li>Software Developer.....</li>
        <li>Data scientist.....</li>
        <li>UX Designer.....</li>
        <li>Mobile App Developer.....</li>
        <li>IT Project Manager.....</li>
        <li>Information Security Analyst.....</li>
        <li>Systems Architect.....</li>
        <li>AI Engineer.....</li>
        <li>Computer hardware engineer.....</li>
        <li>Video game developer.....</li>

      </h3></ul>

      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h2 style={{ fontFamily: 'Algerian', color: '#d30808' }}>Software Developer</h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}>Software developers conceive of, design, and build computer programs. Some develop new applications for mobile or
                desktop use, while others build underlying operating systems.
                Either way, software developers identify user needs, build programs,
                test out new software, and make improvements.</p>
              <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}> What is the work of software developer?</h4>
              <img src={sd} />
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}>A Software Developer designs and builds computer programs that power mobile devices, desktop computers, and even cars. They not only identify user needs but also create
                new applications for any given market while making improvements based on feedback from user</p>
              <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}> What is the qualification of software developer?</h4>
              <img src={sd1} />
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}>Bachelor's degree in computer
                science or related degree. Knowledge of the software development life-cycle.
                The desire to work in a fast-paced environment. Ability to develop unit testi
                of code components or complete application.Tech/Diploma without any backlogs with at least 65% marks from any university or institution. If you are interested to go for postgraduation then you have to write the entrance exam like GATE.
                You need to score at least 70% in M. Tech to be eligible to apply for your dream job.
              </p>
              <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}>What are the types of developers? </h4>
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}><ul>
                <li>Software developer. A software developer is someone who designs software and applications that helps users execute specific functions and tasks</li>
                <li>	Web developer</li>
                <li>	Back-end developer</li>
                <li>	Full-stack developer</li>
                <li>	Game developer</li>
              </ul></p>
              <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}>Highest Paying Programming Jobs</h4>
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}><ul>
                <li>Full-Stack Developer. Source: QAwithExperts</li>
                <li>Cloud Architect. Source: TechTarget</li>
                <li>Machine Learning Engineer</li>
                <li>Database Developer</li>
                <li>IT Specialist</li>
                <li>DevOps Engineer</li>
              </ul></p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h2 style={{ fontFamily: 'Algerian', color: '#d30808' }}>Data Scientist</h2>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <img src={ds} height={400} width={400} />
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}>In simple terms, a data scientist's job
                is to analyze data for actionable insights. Specific tasks include: Identifying the data-analytics
                problems that offer the greatest opportunities to
                the organizaion. Determining the correct data sets and variables.
                Earn a data science degree. Employers generally like to see some academic
                credentials to ensure you have the know-how to tackle a
                data science job, though it's not always required
                Sharpen relevant skills.Get an entry-level data analytics job.•	Prepare for data science interviews</p>
              <img src={ds2} height={400} width={400} />
              <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}> How do I start a career in data science? </h4>
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}>To get started in any data science role, earning a degree or certificate can be a great entry point. Bachelor's degree: For many, a bachelor's degree in data science, business, economics, statistics, math, information technology, or a related field can
                help you gain leverage as an application.Today, you'll find data scientists working at a range of organizations, including tech startups, government agencies, large companies and research institutions.</p>
            </div>
            <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}>What is the earning of data scientist?</h4>
            <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}>Data Scientist salary in India ranges between ₹ 4.2 Lakhs to ₹ 25.3 Lakhs with an average annual salary of ₹ 10.3 Lakhs. Salary estimates are based on 21.1k salaries received from Data Scientists.

            </p>
            <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}>What companies are hiring data scientists?</h4>
            <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}><ul>
              <li>IBM. 35,986 data employees</li>
              <li>Citigroup. 30,548 data employees</li>
              <li>	Deloitte. 29,436 data employees</li>
              <li>Infosys. 28,760 data employees</li>
              <li>JPMorgan Chase. 26,758 data employees</li>
              <li>	EY. 25,510 data employees</li>

            </ul></p>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h2 style={{ fontFamily: 'Algerian', color: '#d30808' }}>Ux designer</h2>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}>What is a UX designer?</h4>
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}>
                The UX designer role is to make a product or service usable, enjoyable, and accessible.
                While many companies design user experiences, the term is most often associated with digital design for websites and apps.
              </p>
              <img src={ux} height={400} width={400} />
              <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}>What qualifications do I need to be a UX designer?</h4>
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}>UX designer qualifications include experience with UX design,
                UX software, prototyping, user research and testing, collaboration
                and communication skills, and a demonstrated understanding of front-end technologies,
                user-centered design, and mobile-first and responsive design.

                What coding languages do UX/UI designers use? The most common markup
                languages that UX/UI designers should know are HTML & CSS. JavaScript is a
                secondary language that might be helpful. HTML is used to format the structure of a
                page, and CSS helps add styling such as font size, color, opacity, and more.
              </p>

              <h4 style={{ fontFamily: 'Algerian', color: '#d30808' }}>UX designer job market and salaries</h4>
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}> As we’ve said, good UX has become synonymous with good business, because happy users are good for business!
                The demand for UX designers has radically increased—and, as the tech industry continues to evolve, UX designers are more crucial than ever. This is especially true for UX designers who are on the cutting edge of their field, and participating in the trends that keep UX design so relevant and necessary.
                This demand is also reflected in the overall increase in average UX designer salaries.
                In other words, the outlook for a career in UX design is excellent. That said, it can be a very competitive job market! If you want to really stand out in the market, we recommend cultivating a relationship with a UX design mentor and finessing a truly job-winning UX design portfolio.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h2 style={{ fontFamily: 'Algerian', color: '#d30808' }}> Mobile app developer </h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <img src={mobile} height={400} width={400} />
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}>What does a mobile app developer do?
                A mobile app developer uses programming languages and development skills to create, test, and develop applications on mobile devices. They work in popular operating system environments like iOS and Android and often take into account UI and UX principles when creating applications
                Which mobile app developer is best?
                List of the Top Mobile App Developers
                •	Naked. Creative Development Agency. ...
                •	Goji Labs. Build It Right The First Time. ...
                •	Netguru. Building digital solutions for world changers. ...
                •	Algoworks. Go Mobile. ...
                •	KitelyTech. Mobile, Web, Software & SEO Experts. ...
                •	Mercury Development. Developing the Future. ...
                •	Sidebench. ...
                •	Appinventiv.

                What skills are needed for mobile app developer?
                8 in-demand mobile app developer skills
                •	Programming language skills. ...
                •	Back-end development skills. ...
                •	User interface (UI) design. ...
                •	Cross-platform development skills. ...
                •	User experience design (UXD) ...
                •	Cybersecurity skills. ...
                •	Computer proficiency. ...
                •	Internet of things (IoT) skills.
                How to become an app developer?
                1.	Decide how you want to develop.
                2.	Brainstorm your ideas.
                3.	Consider profit options if pursuing independent development.
                4.	Learn to code.
                5.	Pursue certifications.
                6.	Diversify your coding skills.
                7.	Create your app developer resume.
                8.	Apply for app developer positions.
              </p>
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}>JavaScript is the best programming language for mobile apps built for Android and iOS, and even PWAs (Progressive Web Applications).
                Which language is needed for app development?
                Java. Firstly Java was the official language for Android App Development (but now it was replaced by Kotlin) and consequently, it is the most used language as well. Many of the apps in the Play Store are built with Java, and it is also the most supported language by Google.02-Aug-2022
                What should I study for app development?
                Essential mobile app developer background training and skills. To be a mobile developer, one must possess software development skills and knowledge. You could develop these skills by earning an associate's or bachelor's degree in computer science or a similar discipline (management information systems, for example).
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h2 style={{ fontFamily: 'Algerian', color: '#d30808' }}>  </h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}></p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h2 style={{ fontFamily: 'Algerian', color: '#d30808' }}>  </h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}></p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h2 style={{ fontFamily: 'Algerian', color: '#d30808' }}>  </h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}></p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h2 style={{ fontFamily: 'Algerian', color: '#d30808' }}>  </h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}></p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h2 style={{ fontFamily: 'Algerian', color: '#d30808' }}>  </h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}></p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h2 style={{ fontFamily: 'Algerian', color: '#d30808' }}>  </h2>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p style={{ fontFamily: 'Lucida Calligraphy', color: '#001a6a' }}></p>
            </div>
          </div>
        </div>


      </div>





    </div>
  )
}
