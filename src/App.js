import { Button, FormControl, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CreateStaff from "./components/CreateStaff";
import Staffs from './components/staff/Staffs';
import { createStaff, getStaffs } from './reducers/staffReducer';

const App = () => {
    const dispatch = useDispatch()
    const staffs = useSelector(state => state.staffs)

    const defaultValues = {
        fullName: "full name",
        email: "",
        joinDate: new Date().toJSON().slice(0, 10)
    }

    const [formValues, setFormValues] = useState(defaultValues)

    const onCreate = event => {
        event.preventDefault()
        dispatch(createStaff(formValues))
        setFormValues(defaultValues)
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const style = {
        margin: 8
    }

    return (
        <BrowserRouter>
            <div>
                <Link to="/">Home</Link>
                <Link to="/staffs">Staffs</Link>
            </div>

            <Routes>
                <Route path="/staffs" element={<Staffs />} />
                <Route path="/staffs/create-staff-form" element={<CreateStaff />} />
            </Routes>
        </BrowserRouter>
        
        // <div className="App">
        //     <Staffs staffs={staffs} />

        //     <form onSubmit={onCreate}>
        //         <FormControl>
        //             <TextField label="Full Name" name="fullName" value={formValues.fullName} onChange={handleInputChange} style={style} />
        //             <TextField label="Email" type="email" name="email" value={formValues.email} onChange={handleInputChange} style={style} />
        //             <TextField label="Join Date" type="date" name="joinDate" value={formValues.joinDate} onChange={handleInputChange} style={style} />
        //             <Button type="submit" variant="contained">Submit</Button>
        //         </FormControl>
        //     </form>
        // </div>
    );
}

export default App;
