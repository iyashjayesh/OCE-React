/**
FILE NAME: Home.js
DESCRIPTION: Simple home page with bootstrap banner and header component 

DATE MODIFIED ON: <07-09-2021>
VERSION: v1
AUTHOR: <Yash Chauhan, iyashjayesh@gmail.com>
Last Updated By: <Yash Chauhan, iyashjayesh@gmail.com>
**/

import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../../asset/img/main.gif'

const Home = () => {
    return (
        <>
            <div className="home container">
                <div className="row">
                    <div className="col text-content">
                        <h1>Online Code Editor</h1>
                        <span>A Simple Online Code Editor <br/>Just like Code Pen!</span>
                        <br/>
                        <Link to="/online-code-editor">
                            <button type="button" className="btn btn-primary mt-4 bon">Try it!</button>
                        </Link>
                    </div>
                    <div className="col img-section">
                        <img className="img-size" src={Main} alt="main-img"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
