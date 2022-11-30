import React, { useState } from 'react'
import HeaderTitle from '../Header/HeaderTitle'
import { FullVideoBox, PrevLink } from './VideoBox'
import styled, { css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Connect from '../Sections/Connect';
import { Container, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export const BoxTitle = styled.h4`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #242430;
    margin: 0;
    ${props => props ? css`
        margin: ${props.margin}
    ` : ``}
`

export const MyButton = styled.button`
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 0.2px;
        color: #FFFFFF;
        display: inline-block;
        padding: 22.5px 30px;
        margin: 0;
        background: #242430;
        border-radius: 5px;
        border: none;
        ${props => props ? css`
            background: ${props.bg};
            color: ${props.color};
            margin: ${props.margin}
        ` : ''}
`

export function TestBox() {
    const navigate = useNavigate()
    return (
        <div className='shadow-box d-flex justify-content-between align-items-center'>
            <BoxTitle>
                Testni yechish
            </BoxTitle>
            <div className="testbox-info-btn d-flex align-items-center">
                <p className="test-info"></p>
                <MyButton
                    onClick={() => navigate(`/student/my-lesson/1/undefined/test`)}
                    margin='0 0 0 50px'
                >Test ✍</MyButton>
            </div>
        </div>
    )
}

function TaskFileModal({ handleShowModal }) {
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
                    <BoxTitle margin='0 0 48px 0'>Uy vazifasini yuborish</BoxTitle>
                    <form action="" className="my-modal-form">
                        <div className="my-form-group">
                            <label htmlFor="input-file" className='my-form-input d-flex justify-content-between align-items-center'>
                                Выберите файл
                                <i class="fad fa-upload"></i>
                            </label>
                            <input type="file" id='input-file' className="d-none" placeholder='Parol' />
                        </div>
                        <div className="my-form-group">
                            <textarea id='input-password' className="my-form-input" cols="30" rows="10" placeholder='Текст'></textarea>
                        </div>
                        <MyButton bg='#E3445A'>Отправить</MyButton>
                    </form>
                </div>
            </div>
        </div>
    )
}

function QuestionBox() {
    return (
        <div className='shadow-box'>

            <div className="col-12">
                <BoxTitle margin='0 0 30px 0'>
                    O'qituvchiga savol berish
                </BoxTitle>
                <form action="" className="my-modal-form">
                    <div className="my-form-group">
                        <Form.Select className='my-form-input' aria-label="Default select example">
                            <option>Savolingiz bilan bog'liq таймкод</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className="my-form-group">
                        <textarea id='input-password' className="my-form-input" cols="30" rows="10" placeholder='Вопрос'></textarea>
                    </div>
                    <MyButton bg='#E3445A'>Savolni yuborish 🤔</MyButton>
                </form>
            </div>
        </div>
    )
}

export function Tasks() {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(!showModal)
    }
    return (
        <div className="shadow-box">
            <BoxTitle margin='0 0 30px 0'>
                Uy vazifasi
            </BoxTitle>
            <div className='task-list'>
                <div className="task-item">
                    <p className="task-item-number">1.</p>
                    <p className='task-item-text'>
                        Полыхающая спальня, крики младшего брата и безумные глаза отца – душераздирающие <Link>Файл:HTML</Link> воспоминания Дина Винчестера.
                    </p>
                </div>
                <div className="task-item">
                    <p className="task-item-number">2.</p>
                    <p className='task-item-text'>
                        После исчезновения папы, который отправился на охоту и не вернулся, им приходится объединиться и организовать большое путешествие по стране. Оставленный без присмотра дневник, где находятся важные записи, служит для них компасом, указывающим верное направление. Трудностей возникает много, но взаимовыручка и братство по крови помогают им выпутываться из самых сложных передряг <Link>Файл:CSS</Link>
                    </p>
                </div>
            </div>
            <MyButton
                onClick={handleShowModal}
                bg='#E3445A'
                color='#fff'
            >
                Tekshirish uchun yuborish 😎
            </MyButton>
            {showModal ? <TaskFileModal handleShowModal={handleShowModal} /> : ''}
        </div>
    )
}

function Homework() {
    return (
        <div>
            <Container fluid>
                <HeaderTitle title={"Java Backend"} />
                <div className="videos-boxes">
                    <PrevLink />
                    <FullVideoBox />
                    <TestBox />
                    <Tasks />
                    <QuestionBox />
                </div>
            </Container>
            <Connect text='Sizda savol bormi?' fields={[{ name: "textarea", type: "", placeholder: "Текст" }]} />
        </div>
    )
}

export default Homework