import { Delete, Edit } from "@mui/icons-material"
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useDispatch } from "react-redux"
import { deleteStaff } from "../../reducers/staffReducer"
import staffService from "../../services/staffService"

const Staffs = ({ staffs }) => {
    const dispatch = useDispatch()
    const onDelete = (staffId) => {
        staffService.deleteStaff(staffId).then(() =>
            dispatch(deleteStaff(staffId)))
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