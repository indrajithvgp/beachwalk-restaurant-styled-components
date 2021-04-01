import React from 'react'
import {Section} from '../global/Section'
import Title from '../global/Title'
import aboutImg from '../../images/aboutBcg.jpeg'
import {setRem, setBorder, setLetterSpacing, media, setColor} from "../../styles"
import {PrimaryBtn} from '../global/Buttons'
import styled from 'styled-components'

function About() {
    return (
        <Section>
        <AboutCenter>
        <div className="about-img">
            <img src={aboutImg} alt="about-image"/>
        </div>
        <div className="about-info">
        <Title title="About Us"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, a. Quidem optio animi dolor corrupti harum laudantium! Odio porro quas perspiciatis iure modi, corporis deserunt suscipit beatae provident? Voluptas veniam in at itaque repellendus officia, expedita exercitationem dolorem dicta impedit.</p>
        <PrimaryBtn>Read More</PrimaryBtn>
        </div>
            </AboutCenter>
        </Section>
    )
}

const AboutCenter = styled.div`
.about-img, .about-info{
    padding:${setRem(30)};
}
.about-img{
    img{
        width:100%;
        display:block;
        ${setBorder({width:setRem(6),color:setColor.primaryColor})};
    }
}

.about-info{
    p{
        {$setLetterSpacing(3)};
    }
}
width:90vw;
margin:0 auto;
${media.desktop`
width:97vw;
max-width:1170px;
display:grid;
grid-template-columns:1fr 1fr;
grid-column-gap:${setRem(32)};

.about-img{
    align-self: center;
}

.about-info{
    p{
        width:80;
    }
}

`}

`

export default About

