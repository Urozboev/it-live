import React, { useState } from 'react'
import { Container, ProgressBar } from 'react-bootstrap'
import HeaderTitle from '../Header/HeaderTitle'
import { BoxTitle, MyButton } from './Homework'
import styled, { css } from 'styled-components'
import Table from 'react-bootstrap/Table';
import Connect from '../Sections/Connect'
import TablePaginationComponent from '../TablePaginationComponent'
import { UserAuth } from '../../context/AuthContext'

export const SkillInfo = styled.p`
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin: 0;
    ${props => props ? css`
        color: ${props.color}
    ` : ``}
`;

function StudentEditModal({ handleShowModal }) {
    return (
        <div
            className='overlay'
            onClick={(ev) => {
                if (ev.target === document.querySelector('.overlay')) {
                    handleShowModal()
                }
            }}
        >
            <div className="my-modal h-auto">
                <i
                    onClick={() => handleShowModal()}
                    class="fas fa-times my-modal-close"
                ></i>
                <div className="col-12">
                    <h2 className='my-modal-title'>Личные данные</h2>
                    <form action="">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="my-form-group mb-5">
                                    <label htmlFor='input-name' className="my-form-label">Name</label>
                                    <input type="text" id='input-name' className="my-form-input" placeholder='Muhammad Hudayberdiyev' />
                                </div>
                                <div className="my-form-group mb-5">
                                    <label htmlFor='input-email' className="my-form-label">Email</label>
                                    <input type="email" id='input-email' className="my-form-input" placeholder='you@company.com' />
                                </div>
                                <div className="my-form-group">
                                    <label htmlFor='input-tel' className="my-form-label">Phone number</label>
                                    <div className="my-form-phones">
                                        <select name="" id="" className='my-form-regionname'>
                                            <option value="" selected>UZ</option>
                                            <option value="">RU</option>
                                            <option value="">US</option>
                                            <option value="">KZ</option>
                                        </select>
                                        <input type="text" id='input-tel' className="my-form-input my-form-telnumber" placeholder='+998 (90) 313-1313' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="my-form-group mb-5">
                                    <label htmlFor='input-password' className="my-form-label">Старый пароль</label>
                                    <input type="text" id='input-password' className="my-form-input" placeholder='Parol' />
                                </div>
                                <div className="my-form-group mb-5">
                                    <label htmlFor='input-password' className="my-form-label">Новый пароль</label>
                                    <input type="text" id='input-password' className="my-form-input" placeholder='Parol' />
                                </div>
                                <div className="my-form-group">
                                    <MyButton bg='#E3445A' className='mt-4 w-100 py-3'>Saqlash</MyButton>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

var mydate = new Date()

function Cabinet() {
    const {payHistory} = UserAuth()
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <Container fluid>
                <HeaderTitle title={"Shaxsiy kabinet"} />
                <div className="videos-boxes">
                    <div className="row">
                        <div className="col-12 col-lg-7 mb-5 mb-lg-0">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <div className="cabinet-imagebox">
                                        <img
                                            src='images/cabinet_img.png'
                                            alt="My Image"
                                            className="cabinet-image"
                                        />
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="mb-4">
                                        <p className="cabinet-info-title">
                                            Ismingiz
                                        </p>
                                        <h5 className="cabinet-info-text">
                                            Muhammad Hudayberdiyev
                                        </h5>
                                    </div>
                                    <div className="mb-4">
                                        <p className="cabinet-info-title">
                                            Номер телефона
                                        </p>
                                        <h5 className="cabinet-info-text">
                                            + 998 (33) 408-28-08
                                        </h5>
                                    </div>
                                    <div className="mb-4">
                                        <p className="cabinet-info-title">
                                            Электронная почта
                                        </p>
                                        <h5 className="cabinet-info-text">
                                            example@mail.ru
                                        </h5>
                                    </div>
                                    <div className="mb-4">
                                        <p className="cabinet-info-title">
                                            Platformadagi faollik
                                        </p>
                                        <h5 className="cabinet-info-text">
                                            3 yil va 6 oy
                                        </h5>
                                    </div>

                                    <MyButton
                                        onClick={handleShowModal}
                                        className='px-5 py-3'
                                    >Редактировать 🖊</MyButton>
                                    {showModal ? <StudentEditModal handleShowModal={handleShowModal} /> : ''}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 mb-5 mb-lg-0">
                            <div className="skills-box">
                                <h3 className="shop-box-title">
                                    Вы не оплатили курс
                                </h3>
                                <p className="shop-box-text">
                                    Пожалуйста оплатите за этот мессяц и вам откроется полный доступ к данному курсу
                                </p>
                                <div className="progress-box">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <SkillInfo>
                                            Android App Development
                                        </SkillInfo>
                                        <SkillInfo color='#E3445A'>
                                            100%
                                        </SkillInfo>
                                    </div>
                                    <ProgressBar now={100} />
                                </div>
                                <div className="progress-box">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <SkillInfo>
                                            Frontend
                                        </SkillInfo>
                                        <SkillInfo color='#E3445A'>
                                            100%
                                        </SkillInfo>
                                    </div>
                                    <ProgressBar now={100} />
                                </div>
                                <div className="progress-box">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <SkillInfo>
                                            Java Backend
                                        </SkillInfo>
                                        <SkillInfo color='#E3445A'>
                                            50%
                                        </SkillInfo>
                                    </div>
                                    <ProgressBar now={50} />
                                </div>
                                <div className="progress-box">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <SkillInfo>
                                            Backend
                                        </SkillInfo>
                                        <SkillInfo color='#E3445A'>
                                            0%
                                        </SkillInfo>
                                    </div>
                                    <ProgressBar now={0} />
                                </div>
                                <div className="progress-box">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <SkillInfo>
                                            Android
                                        </SkillInfo>
                                        <SkillInfo color='#E3445A'>
                                            0%
                                        </SkillInfo>
                                    </div>
                                    <ProgressBar now={0} />
                                </div>
                                <div className="progress-box">
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                        <SkillInfo>
                                            Java Backend
                                        </SkillInfo>
                                        <SkillInfo color='#E3445A'>
                                            0%
                                        </SkillInfo>
                                    </div>
                                    <ProgressBar now={0} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h3 className="shop-box-title mb-5">
                                Tõlovlar tarixi
                            </h3>

                            {/* <Table hover className='pay-history-table'>
                            <thead>
                                <tr>
                                    {
                                        Object.keys(payHistory[0]).map(key => (
                                            <th key={key}>{key}</th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {payHistory.map(pay => (
                                    <tr key={pay.id}>
                                        {Object.keys(payHistory[0]).map(a => (
                                            <td key={a} className={a == 'summa' ? 'fw-bold' : ''}>{a == 'summa' ? '$' : ''}{pay[a]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table> */}

                            <TablePaginationComponent tableElements='student-info' tableData={payHistory} />

                        </div>
                    </div>
                </div>
            </Container>
            <Connect text='Sizda savol bormi?' fields={[{ name: "textarea", type: "", placeholder: "Текст" }]} />
        </div>
    )
}

export default Cabinet