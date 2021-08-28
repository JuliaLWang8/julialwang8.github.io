import React, {useState, useEffect} from 'react';
import './navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 750){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> */}
                    <a href="#home">
                        <p>Julia L. Wang</p>
                    </a>    
                    {/* </Link> */}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href="#home" >
                                <div className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </div>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#about">
                                <div className='nav-links' onClick={closeMobileMenu}>
                                    About
                                </div>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#resume">
                                <div className='nav-links' onClick={closeMobileMenu}>
                                    Resume
                                </div>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#projects">
                                <div className='nav-links' onClick={closeMobileMenu}>
                                    Projects
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
