import './Header.css'
import React from 'react'
import logo from '../imgs/logo.png'
import face from '../imgs/face.png'
import insta from '../imgs/insta.png'
import whats from '../imgs/whats.png'



export default props =>
    <header class='cabecalho'>
        <div class='texto1'>
            <a>(99) 99999-9999</a>
        </div>
        <div class="logo">
            <img src={logo} class='imagem'></img>
        </div>
        <div class='menu'>
        <div class='redes'>
            <a href='https://pt-br.facebook.com/'>
                <img src={face} class='face'></img>
            </a>
            <a href='https://www.instagram.com/'>
            <img src={insta} class='insta'></img>
            </a>
            <a href='https://web.whatsapp.com/'>
            <img src={whats} class='whats'></img>
            </a>
        </div>
        </div>
    </header>


