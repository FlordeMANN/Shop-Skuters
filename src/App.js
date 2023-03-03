import Header from './components/header/Header'
import Content from './components/content/Content';
import Modal from './components/modal/Modal'

import React from 'react';
import { connect} from 'react-redux'
import Footer from './components/footer/Footer';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';

function App(props) {
    return (
        <div className = "App" >
            <Header />
            <Modal />
            <Content />
            <Footer />
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