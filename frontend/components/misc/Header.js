import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>Why learn web3 the web2 way?</h1>
                    <h2>Learning tokens allows to paint a comprehensive picture of any given individual</h2>
                    <Link to="/">Scroll to learn more</Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;