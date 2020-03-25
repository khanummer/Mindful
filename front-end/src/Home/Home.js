import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div className='Home'>
                <div>home</div>
                <div>breathwork</div>
                <Link to="/quoteoftheday"><div>quote of the day</div></Link>
                <div>habit tracker</div>

            </div>
        )
    }
};

export default Home;