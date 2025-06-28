'use client';
import Login from './Login';


const LoginModal = () => {
    return <div>
        <dialog id="login_modal_button" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <Login />
            </div>
        </dialog>
    </div>
}

export default LoginModal