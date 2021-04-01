import React from 'react'
import Hero from '../global/Hero'
import homeImg from '../../images/homeBcg.jpeg'
import Banner from '../global/Banner'
import {PrimaryBtn} from '../global/Buttons'



const Header = () => {
    return (
        <Hero img={homeImg}>
            <Banner greeting="Welcome to" 
            title="beachwalk resort"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel corporis omnis dicta? Cupiditate, aspernatur!"
            >
                <PrimaryBtn t="1rem">View Details</PrimaryBtn>
            </Banner>
            
        </Hero>
    )
}

export default Header
