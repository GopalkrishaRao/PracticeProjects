import {Link} from "react-router-dom"

function Navbar(){
    return(
        <>
    <nav >
        <ul>
            <li>

            <Link to={"/"} className="site-title">Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
        </ul>

    </nav>
        </>

    )
};

export default Navbar