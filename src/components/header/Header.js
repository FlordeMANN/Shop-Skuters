import React from 'react'

import logo from './logo-white.png';
import phone from './phone.png';

function Header() {
    return (
        <div className="bg-primary">
            <nav className=" container navbar navbar-light  justify-content-between">
                <a className="navbar-brand" href="/" style={{margin: "10px auto"}}>
                    <img className="logo" src={logo} alt=""/>
                </a>
                <a className="phone" href="tel:+79811391278" style={{margin: "10px auto"}}>
                    <img style={{width: 22, marginRight: 15,}} src={phone} alt=""/>
                    8 (981) 139-12-78
                </a>
                <button type="button" className="btn btn-outline-light btn-lg" data-toggle="modal" data-target="#exampleModal" style={{margin: "10px auto"}}>
                    Сделать заказ
                </button>
            </nav>
        </div>
    )
}

export default Header
