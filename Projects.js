import {Link} from 'react-router-dom'

import diner from './images/diner.jpg'
import movies from './images/projector.jpg'
import quiz from './images/quiz.jpeg'

const Projects = () =>{
    return(
        <>
            <div id="project-box">
                <h1>Projects</h1>
            </div>
            
            <section id="project-code">
                <div className="project-card">
                    <Link to="/restaurant"><img src={diner} alt="diner" width="500px"></img></Link>
                    <h1 id="project-des">Restaurant</h1>
                </div>
                <div>
                    <h1 style={{textDecoration: "underline"}}>Source code</h1>
                    <h1>Test</h1>
                </div>
            </section>

            <section id="project-code">
                <div className="project-card">
                    <Link to="/movies"><img src={movies} alt="movies" width="500px"></img></Link>
                    <h1 id="project-des">Movie Search</h1>
                </div>
                <div>
                    <h1 style={{textDecoration: "underline"}}>Source code</h1>
                    <h1>Test</h1>
                </div>
            </section>

            <section id="project-code">
                <div className="project-card">
                  <Link to="/quiz"><img src={quiz} alt="quiz" width="500px"></img></Link>
                    <h1 id="project-des">Quiz</h1>
                </div>
                <div>
                    <h1 style={{textDecoration: "underline"}}>Source code</h1>
                    <h1>Test</h1>
                </div>
            </section>
        </>
    )
}

export default Projects