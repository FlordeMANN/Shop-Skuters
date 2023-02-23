import React from 'react'
import GyroIMG from './useful_info/1.jpg'
import ElecIMG from './useful_info/2.jpg'
import SygwIMG from './useful_info/3.jpg'
import ChilIMG from './useful_info/4.jpg'

function UserInfo() {
    return (
        <div className="info">
            <div className="card" style={{width: "16rem", margin: "10px auto", height: "252px !important"}}>
                <img className="card-img-top img-thumbnail" src={GyroIMG} alt={GyroIMG} title="Card image cap" />
                <p className="card-text position-absolute" style={{color: "white", bottom: 0, background: "rgb(0, 0, 0, 0.2)", padding: "0 6px"}}>Как выбрать гироскутер? Советы перед покупкой</p>
            </div>
            <div className="card" style={{width: "16rem", margin: "10px auto", height: "252px !important"}}>
                <img className="card-img-top img-thumbnail" src={ElecIMG} alt={ElecIMG} title="Card image cap" />
                <p className="card-text position-absolute" style={{color: "white", bottom: 0, background: "rgb(0, 0, 0, 0.2)", padding: "0 6px"}}>Электросамокат. Какой лучше и как выбрать?</p>
            </div>
            <div className="card" style={{width: "16rem", margin: "10px auto", height: "252px !important"}}>
                <img className="card-img-top img-thumbnail" src={SygwIMG} alt={SygwIMG} title="Card image cap" />
                <p className="card-text position-absolute" style={{color: "white", bottom: 0, background: "rgb(0, 0, 0, 0.2)", padding: "0 6px"}}>Как выбрать сигвей? На что обратить внимание?</p>
            </div>
            <div className="card" style={{width: "16rem", margin: "10px auto", height: "252px !important"}}>
                <img className="card-img-top img-thumbnail" src={ChilIMG} alt={ChilIMG} title="Card image cap" />
                <p className="card-text position-absolute" style={{color: "white", bottom: 0, background: "rgb(0, 0, 0, 0.2)", padding: "0 6px"}}>Советы по выбору гироскутера для ребенка.</p>
            </div>
        </div>
    )
}

export default UserInfo
