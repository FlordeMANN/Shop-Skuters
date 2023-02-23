import React, {useState} from 'react'
import { connect } from 'react-redux'

import { getProducts, changeProducts } from '../../../redux/actionCreater/productsActions'

function Catalog({ getProducts, changeProducts, products}) {
    const [data] = useState(products.products)

    const onClickGyro = () => {
        const newData = data.filter(e => e.type === "Гироскутер")
        changeProducts(newData);
    }
    const onClickElec = () => {
        const newData = data.filter(e => e.type === "Электросамокат")
        changeProducts(newData);
    }
    const onClickSegway = () => {
        const newData = data.filter(e => e.type === "Сигвей")
        changeProducts(newData);
    }
    const onClickProducts = () => {
        getProducts()
    }


    return (
        <div>
            <div className="filter">
                <button style={{margin: "10px 5px"}} type="button" className="btn btn-outline-primary" onClick={() => onClickProducts()}>Всё</button>
                <button style={{margin: "10px 5px"}} type="button" className="btn btn-outline-primary" onClick={() => onClickGyro()}>Гироскутеры</button>
                <button style={{margin: "10px 5px"}} type="button" className="btn btn-outline-primary" onClick={() => onClickSegway()}>Сигвеи</button>
                <button style={{margin: "10px 5px"}} type="button" className="btn btn-outline-primary" onClick={() => onClickElec()}>Электросамокаты</button>
            </div>
            <div className="info">
                {products.products.map(item => {
                    return (
                        <div key={item._id} className="card" style={{width: "16rem", margin: "10px auto"}}>
                            <img className="card-img-top" src={item.img} alt={item.img} height="254px" width="100%" />
                            <div className="card-body">
                                <h5 className="card-title">{item.type}</h5>
                                <p className="card-text">{item.title}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{item.price} рублей</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        products: store.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getProducts: products => dispatch(getProducts()),
        changeProducts: products => dispatch(changeProducts(products)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog)
