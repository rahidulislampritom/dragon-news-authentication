import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <h2>authLayout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;