import {useState, useEffect} from 'react'

import burger from './images/restaurant/food-text.jpg'
import open from './images/restaurant/open-2.jpg'
import logo from './images/restaurant/dans-diner.png'

/*Images for slideshow*/
/*Landscape*/
import dinerFour from './images/restaurant/diner-4.jpg'
import burgerTwo from './images/restaurant/burger-2.jpg'
import pepsi from './images/restaurant/pepsi.jpg'
/*Portrait*/
import jukeBox from './images/restaurant/juke-box.jpg'
import sauces from './images/restaurant/sauces.jpg'
import cocaCola from './images/restaurant/coca-cola.jpg'

import crypto from './images/restaurant/crypto.jpg'
import Menu from './data/Menu'

const Restaurant = () => {
const images = [open, burger, crypto]
let [imageNumber, setImageNumber] = useState(0)

function increase(){
    setImageNumber(++imageNumber)
    if(imageNumber > images.length -1){
        setImageNumber(0)
    }
}

function decrease(){
    setImageNumber(--imageNumber)
    if(imageNumber === -1){
        setImageNumber(2)
    }
}

let aboutImages = [dinerFour, burgerTwo, pepsi]
let [aboutNumber, setAboutNumber] = useState(0)

useEffect(()=> {
    const test = setInterval(function(){
        if(aboutNumber > aboutImages.length -1){setAboutNumber(0)}
        else{setAboutNumber(aboutNumber++)}
    }, 3000)
    return () => clearInterval(test)
})

if(window.innerWidth < 1000){
    aboutImages = [jukeBox, sauces, cocaCola]
}

return(
    <section className="restaurant">
    
    <div className="diner-sidebar text-center">
    <div id="sticky">
    <img onClick={()=> window.scrollTo(0, 0)}src={logo} alt="dans-diner" width="300px"></img>
    <h1 onClick={()=> window.innerWidth < 425 ? window.scrollTo(0, 650) :  window.scrollTo(0, 850)}>Menu</h1>
    <h1 onClick={()=>  window.innerWidth < 425 ? window.scrollTo(0, 1500) : window.scrollTo(0, 1650)}>About Us</h1>
    <h1 onClick={()=>  window.innerWidth < 425 ? window.scrollTo(0, 3000) :  window.scrollTo(0, 2400)}>Location</h1>
    </div>
    </div>
    
    <div id="diner-content">
    <div className="diner-imgs">
    <img src={images[imageNumber]} alt="diner" width="100%" height="800px"></img>
    <i onClick={decrease} id="arrow-left" className="bi bi-caret-left-fill"></i>
    <i onClick={increase} id="arrow-right" className="bi bi-caret-right-fill"></i>       
    </div>

    <Menu/>
    {/*About Us*/}
    <div className="about-us" style={{backgroundImage: `url(${aboutImages[aboutNumber]})`}}>
        <h1 className='restaurant-heading text-center'>About Us</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>

        <h2><span style={{textDecoration: "underline"}}>Opening Times</span>
        <br/>
        Monday: 10am - 11pm <br/> Tuesday: 10am - 11pm <br/>Wednesday 10am - 11pm <br/> Thursday: 10am - 11pm <br/> Friday: 10am - 11pm <br/> Saturday: 10am - 11pm <br/> Sunday: 12pm - 10pm       
        </h2>
        
    </div>
    {/*Location*/}
    <div className="location">
        <h1 className="restaurant-heading text-center">Where to find us</h1>
        <div id="diner-contact">
        <div className="mapouter"><div className="gmap_canvas"><iframe title="maps" width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=se10%200dx&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>

        <div>
        <h2>Inside the O2, SE10 0DX <br/> <a href="https://www.theo2.co.uk/visit-us/getting-to-the-o2">Guide for transport</a></h2>
        <h2><span>Contact Details</span><br/>Telephone: 0203 367 8655<br/> Email: contact@dansdiner.co.uk</h2>
        </div>
        </div>
    </div>

    </div>
    

    </section>
    
)
}

export default Restaurant