import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Staffs from './components/staff/Staffs';
import { getStaffs } from './reducers/staffReducer';
import staffService from './services/staffService';

const App = () => {
    const dispatch = useDispatch()
    const staffs = useSelector(state => state.staffs)

    // const [staffs, setStaffs] = useState([])
    const [newStaff, setNewStaff] = useState("full name")

    useEffect(() => {
        dispatch(getStaffs())
        // staffService
        //     .getStaffs()
        //     .then(initialStaffs => dispatch(getStaffs(initialStaffs)))
        // .then(initialStaffs => setStaffs(initialStaffs))
        // const fetchData = async () => {
        //   const data = await staffService.getStaffs()
        //   setStaffs(data)
        // }
        // fetchData()
    }, [dispatch])

    const createStaff = event => {
        event.preventDefault()
        const staffObject = {
            fullName: newStaff
        }
        axios.post('http://localhost:8080/staffs', staffObject)
            .then(response => {
                // setStaffs(staffs.concat(response.data))
                setNewStaff('')
            })

    }

    const handleStaffChange = event => {
        setNewStaff(event.target.value)
    }

    return (
        <div className="App">
            <Staffs staffs={staffs} />

            <form onSubmit={createStaff}>
                <TextField value={newStaff} onChange={handleStaffChange} />
                <Button variant='contained' type="submit">save</Button>
            </form>
        </div>
    );
}

export default App;
