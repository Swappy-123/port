import {Link} from "react-router-dom"
import {Component} from "react"

class Navbar extends Component{
    render(){
        return(
            <>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/contact" >
                        Contact
                    </Link>
                    <Link to="/projects">
                        Projects
                    </Link>
                    <Link to="/skills">
                        Skills
                    </Link>
                </li>
            </ul>
            </>
        )
    }
}

export default Navbar