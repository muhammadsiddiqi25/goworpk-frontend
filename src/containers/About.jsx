import { Typography } from '@mui/material'
import React from 'react'
import '../assets/styles/About.css'
import who_we_are from '../assets/images/about/who_we_are.jpg'
import time from '../assets/images/about/time.jpg'
import fast_hiring from '../assets/images/about/fast_hiring.jpg'
import strong_profile from '../assets/images/about/strong_profile.jpg'
import easy from '../assets/images/about/easy.jpg'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CardMedia from "@mui/material/CardMedia";
import pablo from '../assets/images/about/pablo.jpg'
import usman from '../assets/images/about/usman.jpg'
import moyez from '../assets/images/about/moyez.jpg'
import bilal from '../assets/images/about/bilal.jpg'
import Footer from '../components/Footer'
const About = () => {

    const items = [
        {
            name: 'Pablo Henrique',
            post: 'Marketing Manager -- California, US',
            description: "At Gowork, I consistently witness a genuine desire to build a team dedicated to solving problems. Each day, I’m inspired by the applicants and their motivation to go the extra mile. I'm recommending every business out there reach out to the talent which needs to be in the spotlight.",
            pic: pablo
        },
        {
            name: 'Moyez Ur Rehman',
            post: 'CEO',
            description: "Individual commitment to a group effort–that is what makes a teamwork, a company work, a society work, a civilization work. At GoWork we are genuinely committed to resolving the problem faced by many employers and candidates around the world. We have designed our system in such a way in which employers are able to find the cheapest human resource for their business and candidates can find their dream employment.",
            pic: moyez
        },
        {
            name: 'Usman Ubaid',
            post: 'Senior Director',
            description: "Gowork is an ever-changing workplace, continuously striving to innovate by bringing employers and candidates together. We are dedicated to improving the lives of our stakeholders.",
            pic: usman
        },
        {
            name: 'Muhammad Bilal',
            post: 'Managing Director',
            description: "Interdependent people combine their own effort with the efforts of others to achieve their greatest success. At GoWork each member of the team from operation to tactical gives 100% to their task and duties to put the best work on the table. ",
            pic: bilal
        }
    ]
    return (
        <div>
            <div className='about-main'>
                <div className='about-heading'>
                    <h1  fontWeight={900}>We help <span>employers</span> and <span>candidates</span> in finding what they need.</h1>
                </div>
            </div>
            <div className='who-we-are'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Gowork is a global leader in connecting people and jobs that fits perfectly for each other. Ever since its inception, we aim to make every workplace happier and more productive by transforming the way employers and candidates find each other and fit perfectly. For the past many years, Gowork has worked to evolve the recruiting industry and make it easier for everyone. Every day, we connect millions of people to new opportunities and people.
                        Today, we leverage advanced technology using intelligent digital, social and mobile solutions, including the flagship website gowork.pk, go works mobile app, certification and a vast array of products and services.
                    </p>
                </div>
                <img src={who_we_are}  />
            </div>
            <div className='why-us-black why-us'>
                <img src={time} alt="" width='300px' />
                <div>
                    <h1>Save Time</h1>
                    <p>We are saving time for both candidates and employers. Employers do not have to wait for a couple of days to get the volume of CVs they needed.</p>
                </div>
            </div>
            <div className='why-us-white why-us'>

                <div>
                    <h1>Easy</h1>
                    <p>Through GoWork Employers can get the candidates of their selection with just a few clicks .</p>
                </div>
                <img src={easy} alt="" width='300px' />
            </div>
            <div className='why-us-black why-us'>
                <img src={fast_hiring} alt="" width='300px' />
                <div>
                    <h1>Fast Hiring</h1>
                    <p>Candidates do not have to waste their time in applying to all companies, if their profile is strong, they would get offers from their dream companies.</p>
                </div>
            </div>
            <div className='why-us-white why-us'>

                <div>
                    <h1>Strong Profile</h1>
                    <p>Candidates can build their profiles strong by obtaining certification from GoWork.</p>
                </div>
                <img src={strong_profile} alt="" width='300px' />
            </div>
            <Carousel
            animation='fade'
            sx={{
                height:'100%'
            }}
            >
            <div className='about-profiles'>
            <img src={pablo} className = 'about-profiles-picture' />
            <div className='about-profile'>
                <h1 className='we-are-gowork'>We are GoWork</h1>
                <div className='about-profile-name-line'></div>
                <p className='we-are-gowork-desc'>
                    At Gowork, I consistently witness a genuine desire to build a team dedicated to solving problems. Each day, I’m inspired by the applicants and their motivation to go the extra mile. I'm recommending every business out there reach out to the talent which needs to be in the spotlight.
                </p>
                <h1 className='we-are-gowork-name'>Pablo Henrique</h1>
                <h2 className='we-are-gowork-app'>Marketing Manager -- California, US</h2>
            </div>
        </div>
        <div className='about-profiles'>
            <img src={usman} width='600px' height='600px' />
            <div className='about-profile'>
                <h1 className='we-are-gowork'>We are GoWork</h1>
                <div className='about-profile-name-line'></div>
                <p className='we-are-gowork-desc'>Gowork is an ever-changing workplace, continuously striving to innovate by bringing employers and candidates together. We are dedicated to improving the lives of our stakeholders.</p>
                <h1 className='we-are-gowork-name'>Uman Ubaid</h1>
                <h2 className='we-are-gowork-app'>Senior Director</h2>
            </div>
        </div>
        <div className='about-profiles'>
            <img src={moyez} width='600px' height='600px' />
            <div className='about-profile'>
                <h1 className='we-are-gowork'>We are GoWork</h1>
                <div className='about-profile-name-line'></div>
                <p className='we-are-gowork-desc'>Individual commitment to a group effort–that is what makes a teamwork, a company work, a society work, a civilization work. At GoWork we are genuinely committed to resolving the problem faced by many employers and candidates around the world. We have designed our system in such a way in which employers are able to find the cheapest human resource for their business and candidates can find their dream employment..</p>
                <h1 className='we-are-gowork-name'>Moyez Ur Rehman</h1>
                <h2 className='we-are-gowork-app'>CEO</h2>
            </div>
        </div>
        <div className='about-profiles'>
            <img src={bilal} width='600px' height='600px' />
            <div className='about-profile'>
                <h1 className='we-are-gowork'>We are GoWork</h1>
                <div className='about-profile-name-line'></div>
                <p className='we-are-gowork-desc'>Interdependent people combine their own effort with the efforts of others to achieve their greatest success. At GoWork each member of the team from operation to tactical gives 100% to their task and duties to put the best work on the table. </p>
                <h1 className='we-are-gowork-name'>Muhammad Bilal</h1>
                <h2 className='we-are-gowork-app'>Managing Director</h2>
            </div>
        </div>
            </Carousel>
            <Footer />
        </div>
    )
}

export default About