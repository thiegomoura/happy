import React, { Component } from 'react'

import { FiArrowRightCircle } from 'react-icons/fi';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';
export default class Landing extends Component {
    render() {
        return (
            <div id="page-landing">
                <div className="content-wrapper">

                    <img src={logoImg} alt="Happy" />
                    <main>
                        <h1>Leve felicidade para o mundo</h1>
                        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                    </main>

                    <div className="location">
                        <strong>Barra do Bugres</strong>
                        <span>Mato Grosso</span>
                    </div>

                    <a href="" className="enter-app">
                        <FiArrowRightCircle size={26} color="rgba(0,0,0, 0.6)" />
                    </a>
                </div>
            </div>
        )
    }
}
