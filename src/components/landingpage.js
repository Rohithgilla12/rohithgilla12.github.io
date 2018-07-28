import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <img
            src="https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png"
            alt="avatar"
            className="avatar-img"
            />
            <div className="banner-text">
                <h1>Python Developer</h1>
                <hr/>
                <p>| Python | C/C++ | Java | Django | Kotlin | Vue | React | HTML/CSS | JS | Node | Bootstrap |</p>
                <div className="socailLinks">
            <a href="https://github.com/Rohithgilla12" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/rohithgilla" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/gillarohith1" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="http://twitter.com/gillarohith/" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            </div>
                </div>
            </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;