import {Link} from 'react-router-dom'
const Footer = () => {
    return(
        <section className="footer">
            <div onClick={()=> window.scrollTo(0, 0)}>
                <p id="b2t">Back to top</p>
            </div>

            <div id="footer-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </section>
    )
}

export default Footer