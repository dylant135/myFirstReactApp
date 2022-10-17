import React from 'react'
import Header from './Header'
import Buttons from './Buttons'
import Info from './Info'
import Footer from './Footer'

function App() {
    return (
        <div className='card'>
            <img src='/IMG_3651.jpeg' alt='cool colors' />
            <Header />
            <Buttons />
            <Info />
            <Footer />
        </div>
    )
}

export default App