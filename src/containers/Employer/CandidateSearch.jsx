import React, { useEffect, useRef, useState } from 'react'
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
import { setLocale } from 'yup';
// import { candidates } from './dummdata';


function NewTextField(props) {
    return (
        <TextField  {...props} margin='dense' variant='filled' sx={{
            margin: '5px auto',
            borderRadius: '15px', outline: 'none',
        }}
            InputProps={{ disableUnderline: true }}
        />
    );
}

const CandidateSearch = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [filteredCandidates, setFilteredCandidates] = useState([])
    useEffect(() => {
        dispatch(get_candidates())
    }, [])
    const candidates = useSelector((state) => state.employerReducer.candidates)
    useEffect(() => {
        setFilteredCandidates([
            ...candidates,
        ])
    }, [candidates])

    const [title, setTitle] = useState('')
    const [gender, setGender] = React.useState('');
    const [education, setEducation] = useState('')
    const [location, setLocation] = useState('')
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(15)
    const [page, setPage] = useState(1)
    const handleChange = (event, page) => {
        console.log('Previous', start, end)
        setStart((page - 1) * 15)
        if (end >= filteredCandidates.length) {
            setEnd(filteredCandidates.length - 1)
        }
        else {
            setEnd((page - 1) * 15 + 15)
        }
        console.log('after', start, end)
    };

    const handleFilterChange = () => {
        console.log(title)
        const value = candidates.filter((val) => {
            return val.title.toLocaleLowerCase().includes(title.toLowerCase())
                && val.gender.toLowerCase().startsWith(gender.toLowerCase()) &&
                val.education_level.toLowerCase().includes(education.toLowerCase())
                &&
                val.location.toLowerCase().includes(location.toLowerCase())
        })
        setFilteredCandidates(value)
    }
    const handleGenderChange = (event) => {
        console.log(event.target.value)
        setGender(event.target.value);
    };
    const handleEducationChange = (event) => {
        setEducation(event.target.value);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    console.log(start, end)
    useEffect(() => {

    }, [start, end])
    useEffect(() => {
        console.log({
            gender, education, title, location
        })
        handleFilterChange()
    }, [title, gender, location, education])

    const selected_candidates = useSelector((state) => state.employerReducer.selected_candidates)
    return (
        <div className='search-container'>
            <NewTextField placeholder='Who you are looking for e.g. Electrical Engineer'
                fullWidth
                value={title}
                label='Job Title'
                onChange={(e) => {
                    setTitle(e.target.value)
                    handleFilterChange()
                }} />
            <div className='search-filter-inputs'>
                <TextField
                    value={location}
                    onChange={handleLocationChange}
                    label='Location'
                />
                <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel>Gender</InputLabel>
                    <Select
                        value={gender}
                        label="Gender"
                        onChange={handleGenderChange}
                    >
                        <MenuItem value='' selected> <em>None</em></MenuItem>
                        <MenuItem value='male'>Male</MenuItem>
                        <MenuItem value='female'>Female</MenuItem>
                        <MenuItem value='other'>other</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Education</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={education}
                        label="Education"
                        onChange={handleEducationChange}
                    >

                        <MenuItem value='' selected> <em>None</em></MenuItem>
                        <MenuItem value='masters'>Masters</MenuItem>
                        <MenuItem value='bachelors'>Bachelors</MenuItem>
                        <MenuItem value='secondary School Certificate'>Secondary School Certificate</MenuItem>
                        <MenuItem value='higher Secondary School Certificate'>Higher Secondary School Certificate</MenuItem>
                        <MenuItem value='PhD'>PhD</MenuItem>
                    </Select>
                </FormControl>
                {/* <SmallButton variant='contained'>Clear</SmallButton> */}
                <Button variant='outlined'
                    onClick={() => {
                        setTitle('')
                        setEducation('')
                        setGender('')
                        setLocation('')
                    }}
                >Clear Filters</Button>
                <div
                    style={{
                        verticalAlign: 'middle',
                        fontSize: '25px',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '3px 8px',
                        border: '1px solid #05DD41',
                        borderRadius: '5px',
                        color: '#05DD41'
                    }}
                >{selected_candidates.length} selected</div>
            </div>
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
                        {candidates ?
                            filteredCandidates
                                // .filter((val) => {
                                //         if(val.title
                                //             .toLocaleLowerCase()
                                //             .includes(title.toLocaleLowerCase())
                                //             &&
                                //             val.location
                                //             .toLocaleLowerCase()
                                //             .includes(location.toLocaleLowerCase())
                                //             &&
                                //             val.gender
                                //             .toLocaleLowerCase().includes(gender.toLowerCase())
                                //             &&
                                //             val.education_level
                                //             .toLocaleLowerCase().includes(education.toLowerCase())
                                //             )return val;

                                // })
                                .slice(start, end).map((candidate, index) => (
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
                {filteredCandidates.length / 15 > 1 ?
                    <Pagination count={Math.ceil(filteredCandidates.length / 15)}
                        onChange={handleChange} /> : null
                }

                <SmallButton
                    variant='contained'
                >
                    Send Offer
                </SmallButton>
                </div>
            </div>

        </div>
    )
}

export default CandidateSearch