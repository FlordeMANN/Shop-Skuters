import React from 'react'
import SandForm from '../sandForm/SandForm'

function Footer() {
    return (
        <div className="bg-primary">
            <div className="d-flex container text-white justify-center mx-auto flex-wrap align-items-center">
                <div style={{position: "relative", overflow: "hidden", margin: "20px auto", display: "inline-flex"}}><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position: "absolute", top:"0px"}}>Москва</a><a href="https://yandex.ru/maps/213/moscow/house/naberezhnaya_ulitsa_4/Z04YcwFgSUQAQFtvfXVxc3VjZw==/?ll=37.561026%2C55.902609&source=wizgeo&utm_medium=mapframe&utm_source=maps&z=17.15" style={{color:"#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Набережная улица, 4 на карте Москвы — Яндекс.Карты</a><iframe title="map" src="https://yandex.ru/map-widget/v1/-/CCUM5ZQfdA" width="500" height="400" frameBorder="1" allowFullScreen={true} style={{position:"relative"}}></iframe></div>
                <SandForm f={true}/>
            </div>
        </div>
    )
}

export default Footer
