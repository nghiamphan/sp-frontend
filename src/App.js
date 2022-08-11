import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CreateStaff from "./components/staff/CreateStaff";
import Staffs from "./components/staff/Staffs"
import UpdateStaff from "./components/staff/UpdateStaff";

const App = () => {
    const style = {
        margin: 8,
        marginBottom: 16
    }

    return (
        <BrowserRouter>
            <div style={style}>
                <Link to="/" style={style}>Home</Link>
                <Link to="/staffs" style={style}>Staffs</Link>
            </div>

            <Routes>
                <Route path="/staffs" element={<Staffs />} />
                <Route path="/staffs/create-staff-form" element={<CreateStaff />} />
                <Route path="/staffs/update/:id" element={<UpdateStaff />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
