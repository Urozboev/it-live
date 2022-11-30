import React from 'react'

function Home() {
    return (
        <div className='home-page container-fluid'>
            <img src="images/modal_bg.png" alt="Background Image" className="home-page-bg" />
            <div className="home-content">
                <h6 className="section-title">
                    Онлайн обучение
                </h6>
                <h1 className="home-title">
                    ИЗУЧИТЕ ПРОГРАММИРОВАНИЕ
                    В КОМФОРТНЫХ УСЛОВИЯХ
                </h1>
                <p className="home-description">
                    Получите скидку 10% на курсы прямо сейчас!
                </p>
                <button
                    className="my-pink-btn"
                >
                    Начать обучение
                </button>
            </div>
        </div>
    )
}

export default Home