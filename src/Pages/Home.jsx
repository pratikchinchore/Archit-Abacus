import React from 'react'
import Carousal from './Home/Carousal'
import Navbarr from './Navbarr'
import AbacusInfo from './Home/AbacusInfo'
import Footer from './Footer'
import Acitivities from './Home/Acitivities'
import Counter from './Home/Counter'
import TeacherInfo from './Home/TeacherInfo'
import Testimonials from './Home/Testimonials'
const Home = () => {
    return (
        <div>
            <Navbarr />
            <Carousal />
            <AbacusInfo />
            <Acitivities />
            <Counter />
            <TeacherInfo />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home
