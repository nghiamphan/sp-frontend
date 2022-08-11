import { Button, FormControl, FormLabel, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createStaff } from "../../reducers/staffReducer"

const CreateStaff = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const defaultValues = {
        fullName: "full name",
        email: "",
        joinDate: new Date().toJSON().slice(0, 10)
    }

    const [formValues, setFormValues] = useState(defaultValues)

    const onCreate = event => {
        event.preventDefault()
        dispatch(createStaff(formValues))
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
            <form onSubmit={onCreate} style={style}>
                <FormControl>
                    <FormLabel style={style}>Create a new staff</FormLabel>
                    <TextField label="Full Name" name="fullName" value={formValues.fullName} onChange={handleInputChange} style={style} />
                    <TextField label="Email" type="email" name="email" value={formValues.email} onChange={handleInputChange} style={style} />
                    <TextField label="Join Date" type="date" name="joinDate" value={formValues.joinDate} onChange={handleInputChange} style={style} />
                    <Button type="submit" variant="contained" style={style}>Submit</Button>
                </FormControl>
            </form>
        </>
    )
}

export default CreateStaff