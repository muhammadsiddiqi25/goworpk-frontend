import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getpricing } from '../../redux/pricing/action'
import Button from '@mui/material/Button'
import SmallButton from '../../components/custom-mui-comp/Button'
import axios from 'axios'
const Packages = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getpricing())
    }, [])
    const { pricing } = useSelector((state) => state.pricingReducer)
    var filteredPrice = ''
    console.log(pricing)
    if (pricing == '') {
        return null
    }
    else {
        filteredPrice = pricing.filter(function (item, idx) {
            return item.title != 'Free Trial';
        });
    }

    console.log({ filter: filteredPrice })
    return (
        <div className='container'
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto'
            }}
        >
            <h1 style={{ textAlign: 'center', margin: '40px auto', fontSize: '40px' }}>SUBSCRIPTION PLANS</h1>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '30px'
            }}>
                {filteredPrice.map((p, index) => (
                    <Box
                        sx={{
                            backgroundColor: '#F4F4F4',
                            padding: '20px 30px',
                            textAlign: 'center',
                            borderRadius: '20px',
                            margin: '20px auto',
                            width: '400px',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography variant='h3'>{p.title}</Typography>
                        <Typography variant='h1' fontWeight='bold' color="#05DD41">${p.price}</Typography>
                        <Typography variant='p'>/month</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: '50% 50%'
                            }}>
                                <Typography variant='h6' color='#605E5E' >Duration:</Typography>
                                <Typography variant='h6' >{p.duration} days</Typography>
                            </Box>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: '50% 50%'
                            }}>
                                <Typography variant='h6' color='#605E5E' >Connects:</Typography>
                                <Typography variant='h6' >{p.connects} connects</Typography>
                            </Box>
                        </Box>
                        <form action='https://www.2checkout.com/checkout/purchase' method='post'>
                            <input type='hidden' name='sid' value='1303908' />
                            <input type='hidden' name='mode' value='2CO' />
                            <input type='hidden' name='li_0_type' value='product' />
                            <input type='hidden' name='li_0_name' value='Monthly Subscription' />
                            <input type='hidden' name='li_0_price' value='10.00' />
                            <input type='hidden' name='li_0_recurrence' value='1 Month' />
                            <SmallButton variant='contained' type='submit'
                        name = 'submit' value = 'checkout'
                            sx={{
                                margin: '20px 20px'
                            }}
                        >Buy</SmallButton>
                        </form>
                        
                    </Box>
                ))}
            </Box>
        </div>
    )
}

export default Packages