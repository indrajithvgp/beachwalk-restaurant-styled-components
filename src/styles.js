
import {css} from 'styled-components'
import homeImg from '././images/homeBcg.jpeg'

export const setColor = {
    primaryColor:'#af9a7d',
    mainWhite:'#fff',
    mainBlack:'#222',
    mainGray:"#ececec",
    lightGray:"#f7f7f7",
}

export const setFont = {
    main: "font-family: 'Caveat Brush', cursive;",
}

export const setFlex=({x="center", y="center"}={}) => {
    return `display:flex;align-items:${y};justify-content:${x}`;
}

export const setBackGround=({img = homeImg, color="rgba(0,0,0,0)"}={}) => {
    return `background:linear-gradient(${color},${color}),url(${img}) center/cover fixed no-repeat;`;
}

export const setRem = (number=16)=>{
    return `${number/16}rem`
} 

export const setLetterSpacing = (number=2)=>{
    return `letter-spacing:${number}px`
}
export const setBorder = ({width = "2px", style="solid", color="black"}={})=>{
    return `border:${width} ${style} ${color}`
}

const sizes = {
    large:1200,
    desktop:992,
    tablet:768,
    phone:576
}

export const media = Object.keys(sizes).reduce((acc, label)=>{
    acc[label] = (...args) =>css`
    @media(min-width:${sizes[label]/16}em){
        ${css(...args)}
    }
    `
    return acc
},{})

export const setTransition = ({property="all", time="0.3s", timing="ease-in-out"}={})=>{
    return `transition:${property} ${time} ${timing}`
}

export const setShadow = {
    light:'box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);',
    dark:'box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);',
    darkest:'box-shadow: 16px 10px 5px 0px rgba(0,0,0,0.75);',
}