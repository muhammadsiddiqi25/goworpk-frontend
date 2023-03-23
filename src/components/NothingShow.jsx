import React from 'react'
import { Typography } from '@mui/material'
const NothingShow = () => {
  return (
    <div style={{
        display:'flex',
        margin:'auto',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Typography variant="h4" textAlign='center'
        sx={{
            marginTop:'100px'
        }}
        >There is nothing show on this page.</Typography>
    </div>
  )
}

export default NothingShow