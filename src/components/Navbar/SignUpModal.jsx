import { UserAuth } from "../../context/AuthContext"

function SignUpModal({ handleShowModalUp }) {
    const { googleSignIn } = UserAuth()
    const { facebookSignIn, showProfil } = UserAuth()
    const handleFacebookSignUp = async (e) => {
        e.preventDefault()
        try {
            await facebookSignIn()
            await showProfil(true)
        } catch (error) {
            console.log(error)
        }
    }
    const handleGoogleSignUp = async (e) => {
        e.preventDefault()
        try {
            await googleSignIn()
            await showProfil(true)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div
            className='overlay'
            onClick={(ev) => {
                if (ev.target === document.querySelector('.overlay')) {
                    handleShowModalUp()
                }
            }}
        >
            <div className="my-modal">
                <i
                    onClick={() => handleShowModalUp()}
                    className="fas fa-times my-modal-close"
                ></i>
                <img className='my-modal-bgImage d-none d-lg-block' src="images/modal_bg.png" alt="Modal Background" />
                <div className="my-modal-contents">
                    <h2 className="my-modal-title">Ro'yxatdan o'tish</h2>
                    <form action="" className="my-modal-form">
                        <div className="my-form-group">
                            <label htmlFor='input-name' className="my-form-label">Name</label>
                            <input type="text" id='input-name' className="my-form-input" placeholder='Your name' />
                        </div>
                        <div className="my-form-group">
                            <label htmlFor='input-email' className="my-form-label">Email</label>
                            <input type="email" id='input-email' className="my-form-input" placeholder='you@company.com' />
                        </div>
                        <div className="my-form-group">
                            <label htmlFor='input-tel' className="my-form-label">Phone number</label>
                            <div className="my-form-phones">
                                <select name="" id="" className='my-form-regionname'>
                                    <option value="uz" defaultValue='uz'>UZ</option>
                                    <option value="ru">RU</option>
                                    <option value="us">US</option>
                                    <option value="kz">KZ</option>
                                </select>
                                <input type="text" id='input-tel' className="my-form-input my-form-telnumber" placeholder='+998 (90) 313-1313' />
                            </div>
                        </div>
                        <div className="my-form-group">
                            <label htmlFor='input-password' className="my-form-label">Parol</label>
                            <input type="text" id='input-password' className="my-form-input" placeholder='Parol' />
                        </div>
                        <button className="my-form-btn">Ro'yxatdan o'tish</button>
                    </form>
                    <div className="registration-network">
                        <p>Or continue with</p>
                        <div className="network-parent">
                            <a
                                onClick={handleFacebookSignUp}
                                href="#"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-apple"></i>
                            </a>
                            <a
                                href="#"
                                onClick={handleGoogleSignUp}
                            >
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal