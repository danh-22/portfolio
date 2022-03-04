import {useState} from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
    const [display, setDisplay] = useState(false)
    return (
        <>
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to='/projects'>Projects <i onMouseEnter={()=> setDisplay(true)} style={{fontSize: "20px"}}className="bi bi-caret-down-square-fill"></i></Link> 
            {display && 
            <div className="dropdown" onMouseLeave={()=> setDisplay(false)}>
                <Link to='./restaurant'>Restaurant</Link>
                <Link to='./movies'>Movie Search</Link>
                <Link to='./quiz'>Quiz</Link>
            </div>}
            
            <a href="test">Contact</a>
        </div>
        <Outlet/>
        </>

    )
    }

export default Navbar