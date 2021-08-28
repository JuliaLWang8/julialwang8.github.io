import './home.scss'
import Photo from '../../media/me.png'
import {init} from 'ityped';
import {useEffect, useRef} from "react";

export default function Home() {

    const textRef = useRef();
    useEffect(()=>{
      init(textRef.current, {
        strings: ["n Engineering Student", " Machine Learning Enthusiast", " Software Developer"],
        backDelay: 1000, //1second before backspacing
        backSpeed: 60, //backspacing speed
        showCursor: true,
      })
      //console.log(textRef)
    }, [])

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
                    <h3>I'm a<span ref={textRef}></span></h3>
                </div>
                <a href="#about" className="arrow-container">
                    <div className="arrow-down"></div>
                </a>
            </div>
        </div>
    )
}
