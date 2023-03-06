import Header from './components/header/Header'
import Content from './components/content/Content';
import Modal from './components/modal/Modal'

import React from 'react';
import { connect} from 'react-redux'

import ScrollArrow from './components/ScrollArrow/ScrollArrow';

function App(props) {
    return (
        <div className = "App" >
            <Header />
            <Modal />
            <Content />
           
            <ScrollArrow />
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        products: store.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)