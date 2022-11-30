import React from 'react'
import { useNavigate } from 'react-router-dom'


function Box({ num, rout }) {
    const navigate = useNavigate()
    return (
        <div className="box">
            <div className="box-images">
                <div className="img-container">
                    <img src="images/html-5.png" alt="" />
                </div>
                <div className="img-container">
                    <img src="images/html-5.png" alt="" />
                </div>
                <div className="img-container">
                    <img src="images/html-5.png" alt="" />
                </div>
                <div className="img-container">
                    <img src="images/html-5.png" alt="" />
                </div>
            </div>

            <div className="box-price">
                <button
                    className="my-pink-btn"
                    onClick={() => navigate(`${rout}${num}`)}
                >Kursni boshlash</button>
                <p className='price'><strong>$150</strong></p>
            </div>

            <div className="box-info">
                <h3 className="info-title">
                    Frontend {num}
                </h3>
                <div className="info-line"></div>
                <p className="info-text">
                    The gradual accumulation of information about atomic and small-scale behaviour. The gradual accumulation of information about atomic and small-scale behaviour Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt perferendis doloremque ullam dolorem repellat mollitia esse quae, rem sequi cupiditate laboriosam nemo!
                </p>
            </div>
        </div>
    )
}

export default Box