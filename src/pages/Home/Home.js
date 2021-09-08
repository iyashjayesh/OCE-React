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
            <div className="github-wrapper">
                <a rel="noreferrer" href="https://github.com/iyashjayesh/OCE-React" target="_blank"><h3>Github</h3></a>
            </div>
            <div className="home container">
                <div className="row">
                    <div className="col text-content">
                        <div className="text-top">
                            <h1>Online Code Editor</h1>
                            <span>A Simple Online Code Editor <br/>Just like Code Pen!</span>
                            <br/>
                            <Link to="/online-code-editor">
                                <button type="button" className="btn btn-primary mt-4">Try it!</button>
                            </Link>
                        </div>
                        <div className="text-bottom">
                            <p>
                                Like many live code playgrounds, OCE is an online code editor for testing and displaying HTML, CSS, and JavaScript code snippets by users just like CodePen. It's also support Sass and SCSS (both with an optional Compass or Bourbon add-on).
                            </p> 
                            <p>
                                It's core functionality is that it allows you to write code in the browser and view the results as you go. It's an open-source learning environment where developers may generate and test their code snippets. Since it has a web-based code editor, you can change your code and see the result immediately, which allows quicker debugging. 
                            </p>
                            <p>
                                Users can also change the modes (Dark & Light). The project was built using ReactJS & Bootstrap Library. "Netlify" is used for the deployment of the project.
                            </p>
                            {/* <p>Online Code Editor is a project where user can test their HTML, CSS, JS code online. Just like CodePen! 
Online Code Editor will help the user to test their code online. Even users can switch the modes (Dark & Light). Wherein LocalStorage, React Hooks, Bootstrap Library was used to develop the project.</p> */}
                        </div>
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
