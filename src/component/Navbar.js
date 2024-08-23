import React from 'react'
// import Login from "./page/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from "react-router-dom"


const Navbar = ({ authenticate, setAuthenticate }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [width, setWidth] = useState(0)


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
    const search = (event) => {

        if (event.key === "Enter") {
            //입력한 검색어를 읽어오기
            let keyword = event.target.value
            console.log("keyword", keyword)
            //url 바꿔준다
            navigate(`/?q=${keyword}`)
        }
    }

    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            <div className="nav-header">
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(230)} />
                </div>
            </div>

            <div>
                {authenticate ? (
                    <div className="login-button" onClick={() => setAuthenticate(false)}>
                        <FontAwesomeIcon icon={faUser} />
                        <div className="login-title">logout</div>
                    </div>

                ) : (
                    <div className="login-button" onClick={() => goToLogin()}>
                        <FontAwesomeIcon icon={faUser} />
                        <div className="login-title">login</div>
                    </div>

                )}


            </div>
            <div className="nav-logo-section">
                <Link to="/">
                    <img width={100} alt="" src="https://1000logos.net/wp-content/uploads/2017/02/HM-Logo.png" />
                </Link>
            </div>
            <div className='menu-container'>

                <ul className='menu-list'>
                    {menuList.map((item, index) => (
                        <li>{item}</li>
                    ))}
                </ul>

                <div className='search-area'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' onKeyDown={(event) => search(event)} placeholder="Search" />
                </div>
            </div>

        </div>

    );
};

export default Navbar
