import React from 'react'
import {SmallBtn} from '../../components/global/Buttons'
import styled from 'styled-components'
import {setRem, setLetterSpacing, setTransition, setColor, setShadow, setBorder} from '../../styles'
import PropTypes from 'prop-types'


const Room = ({className, room}) => {
    const {img, title, info, price} = room
    return (
        <article className={className}>
            <div className="img-contain">
                <img src={img} alt="single room"/>
                <div className="price">${price}</div>
            </div>
            <div className="room-info">
                <h4>{title}</h4>
                <p>{info}</p>
                <SmallBtn>Click Here</SmallBtn>
            </div>
        </article>
    )
}



export default styled(Room)`
background:${setColor.mainWhite};
margin:${setRem(32)} 0;
.img-contain{
    background:${setColor.mainBlack};
    position:relative;
    img{
        width:100%;
        display:block;
        ${setTransition};
    }
    &:hover img{
        opacity:0.5;
    }
    .price{
        position:absolute;
        top:75%;
        bottom:50%;
        transform:translate(112%,-50%);
        color:${setColor.mainWhite};
        ${setLetterSpacing(5)};
        font-size:${setRem(22)};
        padding:${setRem(40)} ${setRem(33)} ;
        ${setBorder({color:setColor.mainWhite})};
        opacity:0;
        ${setTransition()};
    }
    &:hover .price{
        opacity:1;
    }    
}

.room-info{
        padding:${setRem()};
        h4{
            text-transform:capitalize;
            ${setLetterSpacing()};
        }
        p{
            ${setLetterSpacing()};
        }
        ${setShadow.light};
        ${setTransition()};
        &:hover{
            ${setShadow.dark};
        }
    }
`

Room.propTypes = {
    room:PropTypes.shape({
        img:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        info:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
    })
}
