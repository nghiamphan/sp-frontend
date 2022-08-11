import { Add, Delete, Edit } from "@mui/icons-material"
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteStaff, getStaffs } from "../../reducers/staffReducer"

const Staffs = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const staffs = useSelector(state => state.staffs)

    useEffect(() => {
        dispatch(getStaffs())
    }, [dispatch])

    const onDelete = (staffId) => {
        dispatch(deleteStaff(staffId))
    }

    const style = {
        margin: 8
    }

    return (
        <>
            <Table sx={{ width: 750 }} style={style}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Join Date</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {staffs.map(staff =>
                        <TableRow key={staff.staffId}>
                            <TableCell>{staff.staffId}</TableCell>
                            <TableCell>{staff.fullName}</TableCell>
                            <TableCell>{staff.email}</TableCell>
                            <TableCell>{staff.joinDate}</TableCell>
                            <TableCell>
                                <Button size="small" variant="outlined" startIcon={<Edit />} onClick={() => navigate(`/staffs/update/${staff.staffId}`)}  style={style}>Update</Button>
                                <Button size="small" variant="outlined" startIcon={<Delete />}
                                    onClick={() => onDelete(staff.staffId)}  style={style}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>)}
                </TableBody>

            </Table >
            <Button variant="contained" startIcon={<Add />} onClick={() => navigate("/staffs/create-staff-form")}  style={style}>Add new staff</Button>
        </>
    )
}
export default Staffs