import React, {useState} from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';

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
    
    const handleSend = () => {
        // Инициализация приложения Firebase
        const firebaseConfig = {   
        apiKey: "AIzaSyCQamvcZ6WMStzCyLHkw1fSJ5IOYB2g0vE",
        authDomain: "shops-e24b4.firebaseapp.com", 
        databaseURL: "https://shops-e24b4-default-rtdb.firebaseio.com",
        projectId: "shops-e24b4", 
        storageBucket: "shops-e24b4.appspot.com", 
        messagingSenderId: "766763700730",
        appId: "1:766763700730:web:d85f9fd90dc87e0783d443",
        measurementId: "G-QDG3JX5KMS"
        };
        firebase.initializeApp(firebaseConfig);
        
        // Ссылка на коллекцию в Firestore
        const db = firebase.firestore();
        const collectionRef = db.collection("feedback");
        
        // Добавление документа в коллекцию с данными из формы
        collectionRef.add({
            phone: call.phone,
            mail: call.mail,
            address: call.address,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            console.log("Заявка отправлена");
            setCall(initialState); // Сброс формы после отправки
        })
        .catch((error) => {
            console.error("Ошибка отправки заявки: ", error);
        });
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
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">З
