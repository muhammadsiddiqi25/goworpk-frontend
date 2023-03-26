import React, { useEffect, useState } from 'react'
import '../../assets/styles/CandidateSearchProfile.css'
import { useParams } from 'react-router-dom';
import { get_candidates_details } from '../../api/api';
import Typography from '@mui/material/Typography'
import moment from 'moment'
import SmallButton from '../../components/custom-mui-comp/Button';
import { useDispatch } from 'react-redux';
import { select_candidate,remove_candidate } from '../../redux/Employer/actions';
import { useSelector } from 'react-redux';

const ViewCandidates = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const [user, setUser] = useState('')
    const [error, setError] = useState(false)
    useEffect(() => {
        const candidate = get_candidates_details(params.user_id).then((resp) => {
            if (resp.status == 200) {
                setUser(resp.data)
            }
            else {
                setError(true)
            }
        })
    }, []);
    const candidates = useSelector((state) => state.employerReducer.selected_candidates)
    const getDate = (date) => {
        return moment(date).utc().format('DD/MM/YYYY')
    }


    if (error) {
        return (
            <div>
                <Typography variant="h3" color="initial">Error in retrieving information</Typography>
            </div>
        )
    }
    return (
        <div className='candidate-search-profile-container'>
            {user ?
                <div >
                    <div className='candidate-search-profile-header'>
                        <img src={`http://localhost:5001/profile_pics/${user.user_id}.png`}
                            style={{
                                borderRadius: '50%'
                            }}
                        />
                        <div>
                            <div>
                                <h1>{user.personal_info.name}</h1>
                                <h3>{user.about.title}</h3>
                            </div>
                            <div>
                                <p className='header-paragraph'><span className='key'>Gender: </span>{user.personal_info.gender}</p>
                                <p className='header-paragraph'><span className='key'>Marital Status: </span>{user.personal_info.marital_status}</p>
                                <p className='header-paragraph'><span className='key'>Date of Birth: </span>{getDate(user.personal_info.dob)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='candidate-search-profile-education'>
                        <h1>Summary</h1>
                        <p>{user.about.about}</p>
                        
                    </div>
                    <div className='candidate-search-profile-education'>
                        <h1>Education</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr.</th>
                                    <th>Degree</th>
                                    <th>Institue</th>
                                    <th>Percentage/CPA</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.education.education.map((edu, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{edu.level}</td>
                                            <td>{edu.title}</td>
                                            <td>{edu.percentage}</td>
                                            <td>{getDate(edu.start_date)}</td>
                                            <td>{getDate(edu.end_date)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='candidate-search-profile-education'>
                        <h1>Skills</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr.</th>
                                    <th>Skill</th>
                                    <th>Rating/10 (by candidate)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.skills.skills.map((skill, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{skill.name}</td>
                                            <td

                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <div className='rating-div'>
                                                    <div className='rating'
                                                        style={{
                                                            width: `${(skill.rating / 10) * 100}%`
                                                        }}
                                                    ></div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='candidate-search-profile-education'>
                        <h1>Experience</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr.</th>
                                    <th>Company</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Achievemnets</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.experience.experience.map((exp, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{exp.company}</td>
                                            <td>{getDate(exp.start_date)}</td>
                                            <td>{getDate(exp.end_date)}</td>
                                            <td
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <div
                                                style={{
                                                    textAlign:'left'
                                                }}
                                                >
                                                {exp.achievements.split('\n').map((ach,index)=>(
                                                        <li key = {index}>{ach}</li>
                                                ))}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div
                    style={{
                        display:'flex',
                        justifyContent:'center'
                    }}
                    >
                    <SmallButton variant='contained'
                                            color={candidates.includes(user.user_id) ? 'error' : 'primary'}
                                            onClick={() => {
                                                if (candidates.includes(user.user_id)) {
                                                    dispatch(remove_candidate(user.user_id))
                                                }
                                                else {
                                                    dispatch(select_candidate(user.user_id))
                                                }
                                            }}
                                        >
                                                {candidates.includes(user.user_id) ? 'Remove' : 'Select'}
                                            </SmallButton>
                    </div>
                </div>
                : null}
        </div>

    )
}

export default ViewCandidates