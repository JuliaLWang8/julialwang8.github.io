import './home.scss'
import Photo from '../../media/me.png'

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="left"> 
                <div className="img-container">
                    <img src={Photo} alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey! Ich heiße </h2>
                    <h1>JULIA L. WANG</h1>
                    <h3>I'm a <span>Engineering Student</span></h3>
                </div>
                <a href="#portfolio" className="arrow-container">
                    <div className="arrow-down"></div>
                </a>
            </div>
        </div>
    )
}
