import React from 'react';
import CV1 from '../../assets/images/cv1.jpg'

import SmallButton from '../../components/custom-mui-comp/Button';
import '../../assets/styles/Cv_Builder.css';
const Cv_Builder=()=>{
    return (
        <div className='cv-main'>
            <div className='cv-main-items'>
                <img className='cvImg' src={CV1} alt='CV Photo' />
                <SmallButton
             variant = 'contained'
             style={{
                width:'315px',
                height: '65px',
                marginTop: '22.5px'
                     }}
             >GET</SmallButton>
            </div>

            <div className='cv-main-items'>
                <img className='cvImg' src={CV1} alt='CV Photo' />
                <SmallButton
             variant = 'contained'
             style={{
                width:'315px',
                height: '65px',
                marginTop: '22.5px'
                     }}
             >GET</SmallButton>
            </div>

            <div className='cv-main-items'> 
                <img className='cvImg' src={CV1} alt='CV Photo' />
                <SmallButton
             variant = 'contained'
             style={{
                width:'315px',
                height: '65px',
                marginTop: '22.5px'
                     }}
             >GET</SmallButton>
            </div>

        </div>
    );
}
export default Cv_Builder;