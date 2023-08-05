import React from 'react'
import Img from '../../public/molive.jpg';
import { Container } from '@mui/material';
import '../styles/Aboutus.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Aboutus() {
  return (
 <Container maxWidth='xl'>
    <div className='container1'>
      <div className='info01'>
        <p className='text01'>ABOUT US</p>
        <p className='text02'>Lorem ipsum,dolor sit amet consecetetur adipisicing</p>
        <p className='text03'>Lorm ipsum dolor sit namet consecetetur adipisicing elit. Temporibus ipsum repellat dolorem ullm impedit, in dolorum obcaecati. </p>
        <button className='button01'>Read More</button>
        <FacebookIcon sx={{fontSize: 50}}/>
        <TwitterIcon sx={{fontSize: 50}}/>
        <InstagramIcon sx={{fontSize: 50}}/>
        

      </div>
      <div className='image01'>
        <img src={Img} width={'100%'}/>
      </div>
    </div>
    </Container>
  )
}
