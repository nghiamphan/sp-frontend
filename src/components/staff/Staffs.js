import { Delete, Edit } from "@mui/icons-material"
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteStaff, getStaffs } from "../../reducers/staffReducer"

const Staffs = () => {
    const dispatch = useDispatch()
    const staffs = useSelector(state => state.staffs)

    useEffect(() => {
        dispatch(getStaffs())
    }, [dispatch])

    const onDelete = (staffId) => {
        dispatch(deleteStaff(staffId))
    }

    return (
        <Table sx={{ width: 650 }}>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Join Date</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {staffs.map(staff =>
                    <TableRow key={staff.staffId}>
                        <TableCell>{staff.staffId}</TableCell>
                        <TableCell>{staff.fullName}</TableCell>
                        <TableCell>{staff.joinDate}</TableCell>
                        <TableCell>
                            <Button size="small" variant="outlined" startIcon={<Edit />}>Update</Button>
                            <Button size="small" variant="outlined" startIcon={<Delete />}
                                onClick={() => onDelete(staff.staffId)}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>)}
            </TableBody>
        </Table >
    )
}
export default Staffs