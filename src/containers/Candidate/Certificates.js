import React from 'react';
import Image from '../../assets/images/back.jpg';
import SmallButton from '../../components/custom-mui-comp/Button';
//import './CSS/Certificates.css';
import CERTIFICATESDATA from '../../data/CertificatesData';
import '../../assets/styles/Certificates.css';
import { Typography } from '@mui/material';


const RenderCertificate=({certificate, index})=>{
    return(
        <div className='main' key={index}> 
            <img
                  src={Image}
                  className=''
                  alt='Image not found'
            /> 
 
            
            <div className='main-item-2'>
            <h1>{certificate.course}</h1>
            <p>{certificate.description}</p> 
            <Typography variant = 'h6' fontWeight='700' id='instructor'>Instructor: {certificate.instructor}</Typography>
            </div>
             
           <div className='main-item-3'>
           <h1 id='price'>${certificate.price}</h1>
           <SmallButton
             variant = 'contained'
             style={{
                width:'100%'
                     }}
             >GET</SmallButton>
           </div>
    
            </div>
    )

}

const Certificate = ()=>{
    const Certificates = CERTIFICATESDATA;
    console.log(Certificates)

    return(
        <div style={{
            marginTop: '20px',
        }}>
         {Certificates.map((certificate, index)=> <RenderCertificate key={index} certificate={certificate}  />)}

        </div>
    );
}
export default Certificate;