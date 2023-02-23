import React from 'react'

import Slider from '../slider/Slider'
import About from './about/About'
import Brends from './brends/Brends'
import Catalog from './catalog/Catalog'
import Consultants from './consultants/Consultants'
import Text from './text/Text'
import UserInfo from './userInfo/UserInfo'

function Content() {
    return (
        <div className="container">
            <div className="top">
                <Slider />
                <UserInfo />
                <Catalog />
                <Brends />
                <About />
                <Consultants />
                <Text />
            </div>
        </div>
    )
}

export default Content
