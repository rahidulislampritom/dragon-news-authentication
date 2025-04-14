import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const AuthLayout = () => {
    return (
        <div className=" bg-gray-50">
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;