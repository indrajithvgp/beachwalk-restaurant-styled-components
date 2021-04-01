import styled from 'styled-components'
import {setFlex, setBackGround} from '../../styles'



const Hero = styled.header`
min-height:100vh;
${props => setBackGround({img:props.img, color:'rgba(0,0,0,0.5)'})}
${setFlex({x:"center", y:"center"})};

`

export default Hero