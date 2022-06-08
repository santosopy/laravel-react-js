/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">AppDividend</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/add-item">Create Item</Link></li>
                        <li><Link to="/display-item">Display Item</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Master />} />
                <Route path="/add-item" element={<CreateItem />} />
                <Route path="/display-item" element={<DisplayItem />} />
            </Routes>
        </div >

    </Router>,
    document.getElementById('example'));