import { Button, FormControl, FormLabel, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useMatch, useNavigate } from "react-router-dom"
import { updateStaff } from "../../reducers/staffReducer"
import staffService from "../../services/staffService"

const UpdateStaff = () => {
    const navigate = useNavigate()
    const match = useMatch("/staffs/update/:id")
    const dispatch = useDispatch()
   
    useEffect(() => {
        staffService.getStaff(match.params.id)
            .then(staff => setFormValues(staff))
    }, [match.params.id])

    const defaultValues = {
        fullName: "full name",
        email: "",
        joinDate: new Date().toJSON().slice(0, 10)
    }

    const [formValues, setFormValues] = useState(defaultValues)

    const onUpdate = event => {
        event.preventDefault()
        dispatch(updateStaff(match.params.id, formValues))
        navigate("/staffs")
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
        <>  
            <form onSubmit={onUpdate} style={style}>
                <FormControl>
                    <FormLabel style={style}>Update staff information</FormLabel>
                    <TextField label="ID" value={match.params.id} disabled style={style} />
                    <TextField label="Full Name" name="fullName" value={formValues.fullName} onChange={handleInputChange} style={style} />
                    <TextField label="Email" type="email" name="email" value={formValues.email} onChange={handleInputChange} style={style} />
                    <TextField label="Join Date" type="date" name="joinDate" value={formValues.joinDate} onChange={handleInputChange} style={style} />
                    <Button type="submit" variant="contained" style={style}>Submit</Button>
                </FormControl>
            </form>
        </>
    )
}

export default UpdateStaff