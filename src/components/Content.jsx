import React from 'react'
import '../styles/Content.css'
import Img from '../../public/content-img.avif'

export default function Content() {
    return (
        <div className='navbarcontainer'>
            <div className='info'>
                <p className='text1'> The video host with the most</p>
                <p className='text2'> It is the default name used to establish a connection with your computer using the loopback address network.</p>
                <button className='button1'> Try for free</button>
                <button className='button2'> Explore our plan</button>
            </div>
            <div className='image'>
                <img src={Img} width={'100%'}/>
            </div>
        </div>
    )
}
