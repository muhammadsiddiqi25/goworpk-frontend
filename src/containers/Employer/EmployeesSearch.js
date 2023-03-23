import React from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import '../../assets/styles/CandidateSearch.css';
import SearchData from '../../data/CandidateSearchData';
//import SearchSharpIcon from '@mui/icons-material/SearchSharp';
//search bar component
import EmployeeSearchListTable from './EmployeeSearchTable';


    
const EmployeesSearchBar = ()=>{
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
    
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
    return(

        <div className="search-bar">
            <h1>Employees</h1>
            <div className='search'>
                <TextField
                variant='filled'
                label='Search company name'
                fullWidth
                id='filled-basic'
                onChange={inputHandler}
                >
                
                </TextField> 
                <div style={{
                    marginTop: '60px',
                }}><EmployeeSearchListTable input= {inputText} /></div>
                
   
                
            </div>
        </div>
    )
}
export default EmployeesSearchBar;