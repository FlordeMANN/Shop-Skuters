import React, {useState} from 'react'


function Modal() {
    const initialState = {
        phone: "",
        mail: "",
        address: ""
    }
    const [call, setCall] = useState(initialState)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setCall({...call, [name]: value });
    };
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Форма заказа</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={{flexDirection: "column", display: "flex"}}>
                    <p>Пожалуйста, введите данные и оператор с вами свяжется в ближайшее время</p>
                    <input className="form-control my-1" type="text" name="phone" placeholder="Телефон" onChange={(e) => handleChange(e)}/>
                    <input className="form-control my-1" type="email" name="mail" placeholder="Почта" onChange={(e) => handleChange(e)}/>
                    <input className="form-control my-1" type="text" name="address" placeholder="Адрес" onChange={(e) => handleChange(e)}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Отправить</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
