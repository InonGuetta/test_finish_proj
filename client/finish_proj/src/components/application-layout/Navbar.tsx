import { useState } from "react"
import "../pages/css/navbar.css"
import Logo from "./Logo"
import Slogen from "./Slogen"
import Button from "./Buttons"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="navbar_application_layout">
        <p className="slogen">
          <Slogen />
        </p>
        <section className="button">
          <Button />
        </section>
        <p className="logo">
          < Logo />
        </p>
        <section className="burger_menu" onClick={() => {
            setOpen(true)
            if (open === true) {
              setOpen(false)
            }}}
        >
          <i className={open ? "burger" : "open_burger"}>✖</i>
        </section>
        <section className="burger_menu"
          onClick={() => {
            setOpen(true)
            if (open === true) {
              setOpen(false)
            }}}
        >
          <i className={open ? "open_burger" : "burger"}>☰</i>
        </section>
      </section>
      <section id="side_bar" className={open ? "burger" : "open_burger"}>
        <section className="side_bar_open">
          <Button />
        </section>
      </section>
    </>
  )
}