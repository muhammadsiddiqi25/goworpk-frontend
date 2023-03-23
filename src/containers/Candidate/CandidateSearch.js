import React from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import '../../assets/styles/CandidateSearch.css';
import SearchData from '../../data/CandidateSearchData';
//import SearchSharpIcon from '@mui/icons-material/SearchSharp';
//search bar component
import CandidateSearchListTable from './CandidateSearchListTable';


const CandidateSearchBar = ()=>{
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
    
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
    return(

        <div className="search-bar">
            <h1>Candidate</h1>
            <div className='search'>
                <TextField
                variant='filled'
                label='Search name'
                fullWidth
                id='filled-basic'
                onChange={inputHandler}
                >
                
                </TextField> 
                <div style={{
                    marginTop: '30px',
                }}><CandidateSearchListTable input= {inputText} /></div>
                
   
                
            </div>
        </div>
    )
}
export default CandidateSearchBar;