import Logo from "./Logo"
import Slogen from "./Slogen"
import "../pages/css/navbar.css"

export default function Navbar(){
    return(
        <>
        <section className="navbar_application_layout">
        <p className="slogen">
        <Slogen/>
        </p>
        <p className="logo">
        < Logo/>
        </p>
        </section>
        </>
    )
}