import React from 'react'
// import Login from "./page/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const menuList = [
        'Woman',
        'Man',
        'Baby',
        'Kids',
        'Home',
        'Beauty'
    ]

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/login")
    }
    return (
        <div>
            <div>
                <div className="login-button" onClick={()=>goToLogin()}>
                    <FontAwesomeIcon icon={faUser} />
                    <div className="login-title">Login</div>
                </div>

            </div>
            <div className="nav-logo-section">
               <a href="./"><img width={100} src="https://1000logos.net/wp-content/uploads/2017/02/HM-Logo.png" /></a> 
            </div>
            <div className='menu-container'>
                
                    <ul className='menu-list'>
                        {menuList.map((menu) => ( 
                            <li>{menu}</li>
                        ))}
                    </ul>
                
                <div className='search-area'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type='text' />
                </div>
            </div>

        </div>
    )
}

export default Navbar
