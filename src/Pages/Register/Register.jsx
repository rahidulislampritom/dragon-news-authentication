import { useContext } from "react";
import { FiImage, FiLock, FiMail, FiUser } from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { authSignUp } = useContext(AuthContext);
    const handleSignUPSubmit = (e) => {
        e.preventDefault();
        // const form = e.target;
        // const name = form.name.value
        // const photo = form.photo.value
        // const email = form.email.value
        // const password = form.password.value
        // console.log(name, photo, email, password)

        const form = new FormData(e.target);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log({name, photo, email, password});


        authSignUp(email, password)

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
                <h2 className="text-2xl font-bold text-center text-gray-800">Register your account</h2>
                <form onSubmit={handleSignUPSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                        <div className="relative">
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full pl-10 outline-none"
                            />
                            <FiUser className="absolute top-3.5 left-3 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Photo URL</label>
                        <div className="relative">
                            <input
                                name="photo"
                                type="text"
                                placeholder="Enter photo URL"
                                className="input input-bordered w-full pl-10"
                            />
                            <FiImage className="absolute top-3.5 left-3 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
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
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <label className="text-sm text-gray-700">Accept Terms & Conditions</label>
                    </div>

                    <button type="submit" className="btn btn-block bg-black text-white hover:bg-gray-800">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;