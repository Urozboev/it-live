import React from 'react'
import HeaderTitle from '../Header/HeaderTitle'

function Connect({ text = "Введите свои данные", fields = [
    { name: "input", type: "text", placeholder: "Имя" },
    { name: "input", type: "text", placeholder: "+ 998 (__) ___-__-__" },
] }) {
    return (
        <section id="connect-section">
            <div className='container-fluid'>
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                        <div className="form-box">
                            <h3 className="personal-title">
                                {text}
                            </h3>
                            <form action="" className='form-box-form'>
                                {
                                    fields.map((el, index) => {
                                        return <div key={index} className="my-form-group">
                                            <el.name type={el.type} id='input-name' className="my-form-input" placeholder={el.placeholder} />
                                        </div>
                                    })
                                }
                                <button className="my-pink-btn w-100 justify-content-center">Отправить</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-12 offset-lg-1 col-lg-5">
                        <HeaderTitle title={'Консультация'} />
                        <p className="home-description">
                            Оставьте свои контакты чтобы мы могли с вами связаться
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Connect
