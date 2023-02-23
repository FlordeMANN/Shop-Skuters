import React from 'react'

import GalinaPhoto from './consultantsPhoto/Галина Петрова менеджер по продажам.jpg'
import IvanPhoto from './consultantsPhoto/Иван Алексеев менеджер по продажам.jpg'
import SvetlanaPhoto from './consultantsPhoto/Светлана Астахова менеджер по продажам.jpg'

function Consultants() {
    return (
        <div style={{textAlign: "center", marginBottom: "40px"}}>
            <h2 style={{marginBottom: "20px"}}>Наши менеджеры по продажам</h2>
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                <div className="border border-primary rounded mx-auto" style={{position: "relative", height: 110, width: "100%", maxWidth: 220, display: "flex", alignItems:"flex-end", justifyContent: "center", marginTop: "55px"}}>
                    <img src={GalinaPhoto} style={{position: "absolute", top: "-50px"}} alt={GalinaPhoto} height="120px" title="Галина Петрова" className="consultant"/>
                    <span className="text text-primary" style={{fontSize: 30}}>Галина</span>
                </div>
                <div className="border border-primary rounded mx-auto" style={{position: "relative", height: 110, width: "100%", maxWidth: 220, display: "flex", alignItems:"flex-end", justifyContent: "center",marginTop: "55px"}}>
                    <img src={IvanPhoto} style={{position: "absolute", top: "-50px"}} alt={IvanPhoto} height="120px" title="Иван Алексеев" className="consultant text-promary"/>
                    <span className="text text-primary" style={{fontSize: 30}}>Иван</span>
                </div> 
                <div className="border border-primary rounded mx-auto" style={{position: "relative", height: 110, width: "100%", maxWidth: 220, display: "flex", alignItems:"flex-end", justifyContent: "center",marginTop: "55px"}}>
                    <img src={SvetlanaPhoto} style={{position: "absolute", top: "-50px"}} alt={SvetlanaPhoto} height="120px" title="Светлана Астахова" className="consultant"/>
                    <span className="text text-primary" style={{fontSize: 30}}>Светлана</span>
                </div>
            </div>
        </div>
    )
}

export default Consultants
