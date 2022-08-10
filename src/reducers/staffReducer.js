import staffService from "../services/staffService"
import { CREATE_STAFF, DELETE_STAFF, GET_STAFFS, UPDATE_STAFF } from "./actionConstants"

const initialState = {
    staffs: []
}

// reducer
const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAFFS:
            return {
                staffs: action.data
            }
        case CREATE_STAFF:
            return {
                staffs: state.staffs.concat(action.data)
            }
        case UPDATE_STAFF:
            return {
                staffs: state.staffs.map(staff => staff.staffId === action.data.staffId ? action.data : staff)
            }
        case DELETE_STAFF:
            return {
                staffs: state.staffs.filter(staff => staff.staffId !== action.data.id)
            }
        default:
            return state
    }
}

// action creators
// export const getStaffs = (staffs) => {
//     return {
//         type: GET_STAFFS,
//         data: staffs
//     }
// }

export const getStaffs = () => {
    return async dispatch => {
        const staffs = await staffService.getStaffs()
        dispatch({
            type: GET_STAFFS,
            data: staffs
        })
    }
}

export const createStaff = (staffObject) => {
    return async dispatch => {
        const newStaff = await staffService.createStaff(staffObject)
        dispatch({
            type: CREATE_STAFF,
            data: newStaff
        })
    }
}

export const deleteStaff = (id) => {
    return async dispatch => {
        await staffService.deleteStaff(id)
        dispatch({
            type: DELETE_STAFF,
            data: { id }
        })
    }
}

export default staffReducer