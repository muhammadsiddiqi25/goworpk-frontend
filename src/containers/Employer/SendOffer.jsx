import React,{useState,useEffect} from 'react'
import '../../assets/styles/CandSearch.css'
import { CircularProgress, TextField, Box, Typography, Button } from '@mui/material'
import SmallButton from '../../components/custom-mui-comp/Button';
import { useDispatch, useSelector } from 'react-redux';
import { get_candidates, remove_candidate, select_candidate } from '../../redux/Employer/actions';
import { Avatar } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import ProfileTextField from '../../components/custom-mui-comp/ProfileTextField'

const SendOffer = () => {
    const candidates = useSelector((state)=>state.employerReducer.candidates)
    const selected_candidates = useSelector((state)=>state.employerReducer.selected_candidates)
    const [filtered,setFiltered] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        const filter = candidates.filter((value)=>{
            return selected_candidates.includes(value.user_id)
        })
        setFiltered(filter)
    },[])
    console.log(filtered)
  return (
    <div className='search-container'
    >
        <h1 style={{textAlign:'center'}}>Selected Candidates</h1>
        <div className='cand-search-list-container'>
                <table className='cand-table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Location</th>
                            <th>Education</th>
                            <th>Position</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody
                        style={{ width: 'inherit' }}
                    >
                        {selected_candidates ?
                            filtered.map((candidate, index) => (
                                    <tr key={index}>
                                        <td><Avatar alt={candidate.name} src={`http://localhost:5001/profile_pics/${candidate.user_id}.png`} /></td>
                                        <td>{candidate.name}</td>
                                        <td>{candidate.gender}</td>
                                        <td>{candidate.location}</td>
                                        <td>{candidate.education_level}</td>
                                        <td>{candidate.title}</td>
                                        <td><SmallButton variant='contained'
                                            onClick={() => {
                                                navigate(`/employer/candidates/view/${candidate.user_id}`)
                                            }}  
                                        >View</SmallButton></td>
                                        <td
                                        ><SmallButton variant='contained'
                                            color={selected_candidates.includes(candidate.user_id) ? 'error' : 'primary'}
                                            onClick={() => {
                                                if (selected_candidates.includes(candidate.user_id)) {
                                                    dispatch(remove_candidate(candidate.user_id))
                                                }
                                                else {
                                                    dispatch(select_candidate(candidate.user_id))
                                                }
                                            }}
                                        >
                                                {selected_candidates.includes(candidate.user_id) ? 'Remove' : 'Select'}
                                            </SmallButton></td>
                                    </tr>
                                )) :
                            <CircularProgress
                                sx={{ margin: 'auto' }}
                            />
                        }
                    </tbody>
                </table>
                <div
                style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center'
                }}
                >
                <SmallButton
                    variant='contained'
                    onClick = {()=>{
                        // navigate('/employer/candidates/sendoffer')
                    }}
                >
                    
                    Send Offer
                </SmallButton>
                </div>
            </div>
    </div>
  )
}

export default SendOffer