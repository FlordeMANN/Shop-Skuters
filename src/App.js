

import React from 'react';
import { connect} from 'react-redux'


function App(props) {
    return (
        <div className = "App" >
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