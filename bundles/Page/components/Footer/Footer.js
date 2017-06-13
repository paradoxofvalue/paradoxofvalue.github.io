/**
 * Created by pow on 13.06.17.
 */
import React, { Component } from 'react';

import './assets/style.css';
import img from './assets/images/test.png'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={img} alt=""/>
                info
            </footer>
        )
    }
}