import "./header.css"
import STAND_LOGO from "../../assets/standshow.png"
import MENU_MOBILE from "../../assets/menu-mobile.png"
import { useState } from "react"

export default function Header() {

    const [open, setOpen] = useState(false)

    return (
        <div className="container-header">
            <header>
                <nav>
                    <div className="container-std-logo">
                        <div className="std-logo">
                            <a href="#">
                                <img src={STAND_LOGO} alt="stand_logo" />
                            </a>
                        </div>
                    </div>
                    <div className="navbar-std">
                        <ul>
                            <li>
                                <a href="#home">home</a>
                            </li>
                            <li>
                                <a href="#serviços">eventos</a>
                            </li>
                            <li>
                                <a href="#sobre">sobre nós</a>
                            </li>
                            <li>
                                <a href="#clientes">clientes</a>
                            </li>
                            <li>
                                <a href="#portfolio">portfólio</a>
                            </li>
                            <li>
                                <a href="#contato">contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-mobile">
                        <img src={MENU_MOBILE} alt="" onClick={() => setOpen(!open)} />
                        {
                            open &&
                            <ul>
                                <li>
                                    <a href="#home" onClick={() => setOpen(!open)}>home</a>
                                </li>
                                <li>
                                    <a href="#sobre" onClick={() => setOpen(!open)}>sobre nós</a>
                                </li>
                                <li>
                                    <a href="#serviços" onClick={() => setOpen(!open)}>serviços</a>
                                </li>
                                <li>
                                    <a href="#clientes" onClick={() => setOpen(!open)}>clientes</a>
                                </li>
                                <li>
                                    <a href="#portfolio" onClick={() => setOpen(!open)}>portfólio</a>
                                </li>
                                <li>
                                    <a href="#contato" onClick={() => setOpen(!open)}>contato</a>
                                </li>
                            </ul>
                        }
                    </div>
                </nav>
            </header>
        </div>
    )
}