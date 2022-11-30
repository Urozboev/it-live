import { UserAuth } from "../../context/AuthContext"

function SignUpModal({ handleShowModalIn }) {
    const { googleSignIn, showProfil } = UserAuth()
    const handleGoogleSignUp = async (e) => {
        e.preventDefault()
        try {
            await showProfil(true)
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div
            className='overlay'
            onClick={(ev) => {
                if (ev.target === document.querySelector('.overlay')) {
                    handleShowModalIn()
                }
            }}
        >
            <div className="my-modal">
                <i
                    onClick={() => handleShowModalIn()}
                    className="fas fa-times my-modal-close"
                ></i>
                <img className='my-modal-bgImage d-none d-lg-block' src="images/modal_bg.png" alt="Modal Background" />
                <div className="my-modal-contents">
                    <h2 className="my-modal-title">Kirish</h2>
                    <form action="" className="my-modal-form">
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
                        <div className="password-changes">
                            <button className="change-btn">Parolni unutdingizmi?</button>
                            <button className="my-form-btn">Kirish</button>
                        </div>
                    </form>
                    <div className="registration-network">
                        <p>Or continue with</p>
                        <div className="network-parent">
                            <a href="#">
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