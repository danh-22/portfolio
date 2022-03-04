import {useState, useRef, useEffect} from 'react'
import projector from './images/projector.jpg'
import diner from './images/diner.jpg'
import quiz from './images/quiz.jpeg'
import {Link} from 'react-router-dom'

const Home = (props) => {
    const [display, setDisplay] = useState({about: false, work: false, qualifications: false, interests: false})
    /* CV Buttons */
    function aboutFunction(){
       if(!display.about){
        setDisplay({...display, about: true})
       }else{
        setDisplay({...display, about: false})
       }
    }

       function workFunction(){
       if(!display.work){
        setDisplay({...display, work: true})
       }else{
        setDisplay({...display, work: false})
       }
    }

       function qualFunction(){
       if(!display.qualifications){
        setDisplay({...display, qualifications: true})
       }else{
        setDisplay({...display, qualifications: false})
       }
    }

       function interestsFunction(){
       if(!display.interests){
        setDisplay({...display, interests: true})
       }else{
        setDisplay({...display, interests: false})
        }
    }

    const test = useRef()
    
    
    return (
        <>
        <div id="code-bg">
        <button className="button"type="button" onClick={()=> window.scrollTo(0, 2000)}>CV</button>
        </div>

        <div className="custom-container">
            {/* Project Cards */}
            <h1 className="text-center display-1">Projects</h1>
            <div id="projects-home">
            <div className="custom-card">
                <Link to="/restaurant"><img src={diner} alt="diner" width="100%" height="90%"/></Link>
                <h1>Restaurant</h1>
            </div>
            <div className="custom-card">
                <Link to="/movies"><img src={projector} alt="projector" width="100%" height="90%"/></Link>
                <h1>Movie Search</h1>
                </div>
            <div className="custom-card">
                <Link to="/quiz"><img src={quiz} alt="quiz" width="100%" height="90%"/></Link>
                <h1>Quiz</h1>
                </div>
            </div>

            {/* CV */ }
            <section className="section">
            <h1 className="text-center display-1">CV</h1>
            <div className="cv">
                <h1 className="display-4">About Me <i onClick={aboutFunction} className={display.about ? "bi bi-dash-square" : "bi bi-plus-square"}></i></h1>
                {display.about && 
                <p ref={test}>A hardworking and motivated individual who has a passion for web development, I have just over a year's experience learning mostly front end languages such as vanilla Javascript, React, HTML and CSS with some backend experience using PHP. Here is a link to my portfolio with some projects showcasing my skills. I am looking for a role that would enable me to use these skills whilst also learning new things to strengthen my knowledge in web development. I am a keen learner and will always be open to learning new technologies or tips to be more efficient in my role. I strive to complete every task to a high standard, enjoy challenges and work well to deadlines. I feel that I would be a good addition for this particular role due to the skills that I can offer.</p>}
                
                <h1 className="display-4">Work Experience <i onClick={workFunction} className={display.work ? "bi bi-dash-square" : "bi bi-plus-square"}></i></h1>
                {display.work && 
                <p>General Assistant Sainsbury's - July 2017 to Present
                This role involved putting out stock ready for the next day whilst providing good customer service to customers in open hours helping with general enquiries
                <br/>
                <br/>
                Electricians Mate
                Air Cool Engineering - London
                June 2014 to August 2014
                and August 2015
                With Air Cool Engineering I was a helping hand to the electricians helping with carrying items such as tools and ladders also assisting in completing tasks such as fire alarm tests and lighting repairs.</p>
                }
                
                <h1 className="display-4">Qualifications <i onClick={qualFunction} className={display.qualifications ? "bi bi-dash-square" : "bi bi-plus-square"}></i></h1>
                {display.qualifications && 
                <p className={display.qualifications && "animation"} >Bachelor Degree in Business with Marketing, University of Greenwich - London
                September 2016 to June 2019
                <br/>
                <br/>
                Trinity School - London, A Level in Business - B, Psychology - C, Graphic Art - C
                September 2014 to June 2016
                <br/>
                <br/>
                GCSE in 11 A*- C including B in Maths and English, Trinity School - London
                September 2012 to June 2014</p>
                }
                
                <h1 className="display-4">Interests <i onClick={interestsFunction}className={display.interests ? "bi bi-dash-square" : "bi bi-plus-square"}></i></h1>
                {display.interests && 
                <p>
                INTERESTS AND HOBBIES: During my spare time I enjoy gaming and going out with family and friends, I also have an interest in sports such as Football playing for various teams in the past, MMA and Darts.
                </p>}
            </div>
            </section>
        </div>
        </>
        

    )
}

export default Home