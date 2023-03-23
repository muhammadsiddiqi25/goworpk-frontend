import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useState } from 'react';
import CandidateSearchData from '../../data/CandidateSearchData.js'
import '../../assets/styles/CandidateSearchListTable.css';
import axios from 'axios';
 


export default function SimpleTable(props) {
    console.log(CandidateSearchData)
    /**Code for Api directly called here*/
    const [searchData, setSearchData] = useState();
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }

    }
    axios.get(`${'http://192.168.18.22:5001'}/get-candidate-search`, config).then(
        (response)=>{setSearchData(response.data)}
    )
    if(searchData === undefined){
        return(<>Data temporarely unavailable! Sorry for inconvenience</>)
    }
    /**Code for Api directly ends here*/
    
    const filteredData = CandidateSearchData.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.username.toLowerCase().includes(props.input)
        }
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>
                            Name
                        </TableCell>
                        <TableCell align="center" className='tableCell'>
                            Username
                        </TableCell>
                        <TableCell align="center" className='tableCell'>
                            Email
                        </TableCell>
                        <TableCell align="center" className='tableCell'>
                            Gender
                        </TableCell>
                        <TableCell align="center" className='tableCell'>
                            Mobile
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th':
                                { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">
                                {row.username}
                            </TableCell>
                            <TableCell align="center">
                                {row.email}
                            </TableCell>
                            <TableCell align="center">
                                {row.gender}
                            </TableCell>
                            <TableCell align="center">
                                {row.phone}
                            </TableCell>
                            <TableCell align='center'>
                            <Button
                                variant="outlined"
                                color="error"
                                
                                >
                                Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}