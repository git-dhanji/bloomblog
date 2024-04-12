import { useDispatch } from 'react-redux';
import authService from '../../appwrite/appwrite_auth';
import { logout } from '../../features/authSlice/authSlice'


// Logout handler for logout our account from backend to frontend

export default function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
            .then(() => dispatch(logout()))
            .catch((error) => console.log('LogoutBtn error ::', error))
    }
    return (
        <button
            className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            onClick={logoutHandler}
        >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-sm">
                Logout
            </span>
        </button>
    )
}
