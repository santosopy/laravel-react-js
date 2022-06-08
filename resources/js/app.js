/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Master from './components/Master';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';

render(
    <Router>
        <div className="container" >
            <nav
                className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
            >
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button
                        className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bars"
                            className="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            ></path>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
                        <a className="text-xl text-white pr-2 font-semibold" href="/">AppDividend</a>
                        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item p-2">
                                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link text-white" : "nav-link text-white opacity-60 hover:opacity-80")}>Home</NavLink>
                            </li>
                            <li className="nav-item p-2">
                                <NavLink to="/add-item" className={({ isActive }) => (isActive ? "nav-link text-white" : "nav-link text-white opacity-60 hover:opacity-80")}>Create Item</NavLink>
                            </li>
                            <li className="nav-item p-2">
                                <NavLink to="/display-item" className={({ isActive }) => (isActive ? "nav-link text-white" : "nav-link text-white opacity-60 hover:opacity-80")}>Display Item</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <section className='pt-4'>
                <Routes>
                    <Route path="/" element={<Master />} />
                    <Route path="/add-item" element={<CreateItem />} />
                    <Route path="/display-item" element={<DisplayItem />} />
                </Routes>
            </section>
        </div >

    </Router>,
    document.getElementById('example'));