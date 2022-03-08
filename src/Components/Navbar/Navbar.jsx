import react from 'react';
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className='topnav'>
            <a className='active'>Home</a>
            <a className='#news'>News</a>
            <a className='#contact'>Contact</a>
            <a className='#about'>About</a>
        <span className="Header">Fiversity</span>
        </div>
    )
}

export default Navbar;


