import React from 'react'
import Main from '../../asset/img/main.gif'

const Home = () => {
    return (
        <div className="home container">
            {/* <h1>Yash</h1> */}
            <div className="row">
                <div className="col text-content">
                    <h1>Online Code Editor</h1>
                    <br/>
                    <span>A simple online code editor. <br/>Just like Code Pen!</span>
                </div>
                <div className="col img-section">
                    <h1>test 2</h1>
                    <img className="img-size" src={Main} alt="main-img"/>
                </div>
            </div>
        </div>
    )
}

export default Home
