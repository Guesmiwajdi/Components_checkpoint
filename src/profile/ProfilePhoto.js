import images from './djoko.jpg';
import './ProfilePhoto.css';
import React from 'react'

const stylePic = {
border:"10px solid black",
width: "250px",
height :"250px"

}
let picture=()=>{
    return(

<img style={stylePic} className='picture' src={images} alt="djoko.jpg"/>
    )}


export default picture;  