import React from 'react'
import HeaderTitle from '../Header/HeaderTitle'
import { PrevLink } from '../studentpages/VideoBox'
import styled from 'styled-components'
import { MyButton } from '../studentpages/Homework'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export const TestAndClassNumbers = ({ text, massiv }) => {
    return (
        <div className="test-questions-numbers">
            <h3 className="shop-box-title mb-0">
                {text}
            </h3>
            <div>
                {
                    massiv.map((elem, index) => {
                        return <button key={index} className={index == 0 ? 'class-number-btn active' : 'class-number-btn'}>{elem}</button>
                    })
                }
            </div>
        </div>
    )
}

function AddLessonClass() {
    const navigate = useNavigate()
    return (
        <div>
            <Container fluid>
                <HeaderTitle title={'1-А'} />
                <div className="videos-boxes px-0">
                    <PrevLink />
                    <div className="shadow-box">
                        <h3 className="shop-box-title mb-4">
                            Видео урок
                        </h3>
                        <form action="">
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <div className="my-form-group mb-4">
                                        <label htmlFor='input-name' className="my-form-label">Название</label>
                                        <input type="text" id='input-name' className="my-form-input" placeholder='Название' />
                                    </div>
                                    <div className="my-form-group mb-4">
                                        <textarea
                                            name="text"
                                            id=""
                                            cols="30"
                                            rows="10"
                                            className="my-form-input"
                                            placeholder='Название'
                                        ></textarea>
                                    </div>
                                    <div className="my-form-group">
                                        <label htmlFor='' className="my-form-label mb-3">Значок</label>
                                        <div className="lesson-poster-parent">
                                            <label className='add-poster-label' htmlFor="add-poster-input">
                                                <i className="fad fa-image"></i>
                                                <p>Загрузите значок</p>
                                                <input type="file" id='add-poster-input' name='add-poster-input' className='add-poster-input' />
                                            </label>
                                            <img className='added-poster-img' src="images/cabinet_img.png" alt="image" />
                                            <img className='added-poster-img' src="images/cabinet_img.png" alt="image" />
                                            <img className='added-poster-img' src="images/cabinet_img.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="h-100 d-flex flex-column justify-content-between">
                                        <label className='add-video-label' htmlFor="add-video-input">
                                            <i className="fas fa-video-plus"></i>
                                            <p>Загрузите видео</p>
                                            <input type="file" id='add-video-input' name='add-video-input' className='add-poster-input d-none' />
                                        </label>

                                        <div className="d-flex justify-content-end vertical-align-end">
                                            <MyButton bg='#E3445A' color='#fff'>Удалить</MyButton>
                                            <MyButton className='ms-3'>Сохранить</MyButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="shadow-box">
                        <h3 className="shop-box-title mb-4">
                            Добашнее задание
                        </h3>
                        <div className="my-form-group mb-4">
                            <label htmlFor='input-name-1' className="my-form-label">Задание №1</label>
                            <div className="add-task-elements">
                                <input type="text" id='input-name-1' className="my-form-input" placeholder='Задание' />
                                <MyButton bg='#EAEDEE' color='#242430'>
                                    <i className="fas fa-plus"></i>
                                </MyButton>
                            </div>
                        </div>
                        <div className="my-form-group mb-4">
                            <label htmlFor='input-name-2' className="my-form-label">Задание №2</label>
                            <div className="add-task-elements">
                                <input type="text" id='input-name-2' className="my-form-input" placeholder='Задание' />
                                <MyButton bg='#EAEDEE' color='#242430'>
                                    <i className="fas fa-plus"></i>
                                </MyButton>
                                <MyButton bg='#EAEDEE' color='#E3445A'>
                                    <i className="fas fa-trash"></i>
                                </MyButton>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end vertical-align-end">
                            <MyButton bg='#E3445A' color='#fff'>Удалить</MyButton>
                            <MyButton className='ms-3'>Сохранить</MyButton>
                        </div>
                    </div>

                    <div className="shadow-box">
                        <TestAndClassNumbers text={'Тест'} massiv={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                        <div className="my-form-group mb-4">
                            <label htmlFor='' className="my-form-label">Вопрос</label>
                            <input type="text" id='' className="my-form-input" placeholder='Вопрос' />
                        </div>
                        <div className="my-form-group mb-4">
                            <label htmlFor='' className="my-form-label">Варианты ответа</label>
                            <input type="text" id='' className="my-form-input mb-2" placeholder='Ответ №1' />
                            <input type="text" id='' className="my-form-input mb-2" placeholder='Ответ №2' />
                            <input type="text" id='' className="my-form-input mb-2" placeholder='Ответ №3' />
                            <input type="text" id='' className="my-form-input mb-2" placeholder='Ответ №4' />
                        </div>
                        <div className="d-flex justify-content-end vertical-align-end">
                            <MyButton bg='#E3445A' color='#fff'>Удалить</MyButton>
                            <MyButton className='ms-3'>Сохранить</MyButton>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AddLessonClass