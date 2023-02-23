import React from 'react'

function SandForm({f}) {
    return (
        <div className="card p-3 sand-form" style={f? {margin: "20px auto", width: "100%", maxWidth:"500px", height: "100%"} : {}} >
            <form>
                <div className="form-group">
                    <label htmlFor="email" style={{color: 'black'}}>Подписка на рассылку новостей</label>
                    <small id="emailHelp" className="form-text text-muted">Будем рады отправлять вам новости</small>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Почта для писем" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Ваше имя" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="address" placeholder="Адрес" />
                </div>
                <button type="submit" className="btn btn-primary">Подписаться</button>
            </form>
        </div>
    )
}

export default SandForm
