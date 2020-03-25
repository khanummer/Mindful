import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return(
            <div className='Landing'>
                <div>hey there, hope you're okay</div>
                <Link to='/home'><button className='Landing-Button'>continue</button></Link>
            </div>
        )
    }
}

export default Landing;