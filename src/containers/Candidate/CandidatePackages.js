import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { PackagesData } from '../../data/Packages';
import '../../assets/styles/CandidatePackage.css';
import axios from 'axios';

const Packages = ()=>{
    const [packageData,setPackageData]=useState();
    let config = {
        headers:{
            'Content-type': 'application/json'
        }
    }
    axios.get(`${'http://192.168.18.22:5001'}/get-package-data`, config).then(
        Response=>{setPackageData(Response.data)}
    );
    if(!packageData){
        return(<> Data temporarely unavailable</>)
    }

    return (
        <div className='Candidate-Package'>
            <h1>Packages</h1>
        
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className='tableCell'>
                        Name
                    </TableCell>
                    <TableCell align="center" className='tableCell'>
                        Pricing
                    </TableCell>
                    <TableCell align="center" className='tableCell'>
                        Duration
                    </TableCell>
                    <TableCell align="center" className='tableCell'>
                        Connects
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {packageData.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th':
                            { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="center">
                            {row.pricing}
                        </TableCell>
                        <TableCell align="center">
                            {row.duration}
                        </TableCell>
                        <TableCell align="center">
                            {row.connects}
                        </TableCell>

                        <TableCell align='center'>
                        <Button
                            variant="outlined"
                            color="primary"
                            
                            >
                            View
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
    );
}

export default Packages;