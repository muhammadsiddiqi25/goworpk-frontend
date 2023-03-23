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
import EmployeeSearchData from '../../data/EmployeeSearchData.js'
import axios from 'axios';
import '../../assets/styles/CandidateSearchListTable.css';
 


export default function SimpleTable(props) {
    console.log(EmployeeSearchData)
        /**Code for Api directly called here*/
        const [employeesSearchData, setEmployeesSearchData] = useState();
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
    
        }
        axios.get(`${'http://192.168.18.22:5001'}/get-candidate-search`, config).then(
            (response)=>{setEmployeesSearchData(response.data)}
        )
        if(employeesSearchData === undefined){
            return(<>Data temporarely unavailable! Sorry for inconvenience</>)
        }
        /**Code for Api directly ends here*/
    
    const filteredData = employeesSearchData.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.username.toLowerCase().includes(props.input)
        }
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="table">
                <TableHead>
                    <TableRow>
                        <TableCell className='constNames'>
                            Company
                        </TableCell>
                        <TableCell align="center" className='constNames'>
                            Username
                        </TableCell>
                        <TableCell align="center" className='constNames'>
                            Email
                        </TableCell>
                        <TableCell align="center" className='constNames'>
                            Country
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
                                {row.company}
                            </TableCell>
                            <TableCell align="center">
                                {row.username}
                            </TableCell>
                            <TableCell align="center">
                                {row.email}
                            </TableCell>
                            <TableCell align="center">
                                {row.country}
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