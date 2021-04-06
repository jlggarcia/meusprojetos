import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/templates/Header'
import Slide from '../components/templates/Slide'
import Content from '../components/templates/Content'
import Forms from '../components/templates/Forms'
import Footer from '../components/templates/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Header/>
            <Slide/>
            <Content/>
            <Forms/>
            <Footer/>
        </div>
    </BrowserRouter>