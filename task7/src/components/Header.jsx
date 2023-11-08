import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
            
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
        </React.Fragment>
    )
}

export default Header