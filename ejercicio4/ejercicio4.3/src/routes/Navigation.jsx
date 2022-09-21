import React from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import AboutMe from '../components/AboutMe/AboutMe';
import Detail from '../components/Detail/Detail';
import User from '../components/User/User';
import logo from '../globallogic-logo.svg';

export default function Navigation() {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo" />

                    <hr />

                    <ul>
                        <li>
                            <NavLink
                                to="aboutMe"
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                About me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="user"
                                className={({ isActive }) => (isActive ? "nav-active" : "")}
                            >
                                User
                            </NavLink>
                        </li>
                    </ul>
                </nav>


                <div className='routes'>
                    <Routes>
                        <Route path="aboutMe" element={<AboutMe />} />

                        <Route path="user" element={<User name={'Lucas'} age={22} dni={'42.301.106'}/>} />

                        <Route path="detail/:dni/:name/:age" element={<Detail />} />

                        <Route path="/*" element={<Navigate to="aboutMe" replace />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
