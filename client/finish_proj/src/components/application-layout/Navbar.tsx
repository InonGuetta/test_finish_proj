import Logo from "./Logo"
import Slogen from "./Slogen"
import "../pages/css/navbar.css"
import Button from "./Buttons"

export default function Navbar(){
    return(
        <>
        <section className="navbar_application_layout">
        <p className="slogen">
        <Slogen/>
        </p>
        <section className="button">
          <Button/>  
        </section>
        <p className="logo">
        < Logo/>
        </p>
        </section>
        </>
    )
}