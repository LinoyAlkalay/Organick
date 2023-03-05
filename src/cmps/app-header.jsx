import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imgs/logo.svg'

export function AppHeader() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    function onToggleMenu() {
        setIsOpenMenu(!isOpenMenu)
    }

    return <header className="full main-layout app-header">
        <main>
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/entity">Pages</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/news">News</Link>
            </nav>
            <button className="fa-solid bars menu-toggle-btn"
                onClick={() => onToggleMenu()}></button>
            {isOpenMenu && <div className="main-screen" onClick={() => onToggleMenu()}>
                <div className="mobile-menu"></div>
            </div>}
        </main>
    </header>
}