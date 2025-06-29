import Login from '../_components/Login';
import LoginNavber from '../_components/LoginNavber';

export default function LoginPage() {
    return (
       <div>
        <LoginNavber />
         <div className="min-h-screen mt-[-88px]  flex items-center justify-center p-4">
            <div className="card w-full max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <Login />
                </div>
            </div>
        </div>
       </div>
    );
}
