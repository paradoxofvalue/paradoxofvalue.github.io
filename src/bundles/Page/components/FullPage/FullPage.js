/**
 * Created by pow on 13.06.17.
 */

import React, { Component } from 'react';
import { UsersList } from '../../../Users/components/UsersList';
import Header from '../Header/Header';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";


export default class FullPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}