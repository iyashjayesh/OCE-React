import React from 'react'
import Main from '../../asset/img/main.gif'
import Header from '../../components/Header/Header'

const Home = () => {
    return (
        <>
            <Header/>
            <div className="home container">
                {/* <h1>Yash</h1> */}
                <div className="row">
                    <div className="col text-content">
                        <h1>Online Code Editor</h1>
                        <span>A Simple Online Code Editor <br/>Just like Code Pen!</span>
                        <br/>
                        <button type="button" className="btn btn-primary mt-4">Try it!</button>
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
