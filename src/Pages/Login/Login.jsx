import { useContext } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { authSignIn, setUser, error, setError } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password);

        // Sign in new users 
        authSignIn(email, password)
            .then((result) => {
                // console.log(result.user)
                setUser(result.user)
                navigate(location?.state
                    ? location.state
                    : '/'
                )

            })
            .catch((err) => {
                setError({ ...error, loginError: err.code })
            })


    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login your account</h2>
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email address</label>
                        <div className="relative">
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                className="input input-bordered w-full pl-10"
                            />
                            <FiMail className="absolute top-3.5 left-3 text-gray-400" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full pl-10"
                            />
                            <FiLock className="absolute top-3.5 left-3 text-gray-400" />
                            {/* error display  */}
                            {
                                error?.loginError && <label className="block text-sm font-semibold text-red-700 mt-1">{error.loginError}</label>
                            }

                            <label className="block text-sm font-normal text-gray-700 mt-1">Forgot Password?</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-block bg-black text-white hover:bg-gray-800">
                        Login
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Don’t Have An Account? <Link to={'/auth/register'} className="text-red-500 font-medium">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;