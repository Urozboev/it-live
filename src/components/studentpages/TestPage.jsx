import React from 'react'
import HeaderTitle from '../Header/HeaderTitle'
import Connect from '../Sections/Connect'
import styled, { css } from 'styled-components'
import { BoxTitle, MyButton } from './Homework'
import { Link } from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'


function TestPage() {
    const questions = [
        { id: 1, question: "Полыхающая спальня, крики младшего брата и безумные глаза отца – душераздирающие Файл:HTML воспоминания Дина Винчестера. После исчезновения папы, который отправился на охоту и не вернулся, им приходится объединиться и организовать большое путешествие по стране. Оставленный без присмотра дневник, где находятся важные записи, служит для них компасом, указывающим верное направление. Трудностей возникает много, но взаимовыручка и братство по крови помогают им выпутываться из самых сложных передряг Файл:CSS", variant: ['Bot', 'Android', 'Web', 'FrontEnd'] },
        { id: 2, question: "Полыхающая спальня, крики младшего брата и безумные глаза отца – душераздирающие Файл:HTML воспоминания Дина Винчестера. После исчезновения папы, который отправился на охоту и не вернулся, им приходится объединиться и организовать большое путешествие по стране. Оставленный без присмотра дневник, где находятся важные записи, служит для них компасом, указывающим верное направление. Трудностей возникает много, но взаимовыручка и братство по крови помогают им выпутываться из самых сложных передряг Файл:CSS", variant: ['Qwert', 'fas', 'Web', 'FrontEnd'] },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
    ]
    return (
        <div>
            <Container fluid>
                <HeaderTitle title={"Java Backend"} />
                <div className="videos-boxes">
                    <div className="shadow-box">
                        <div className="test-number">
                            {questions.map((question, index) => {
                                return <div className={question.id < 4 ? "test-number-box active" : "test-number-box"}>
                                    <div className={question.id < 4 ? 'test-number-circle active' : 'test-number-circle'}>
                                        <p
                                            className={question.id < 3 ? 'd-none' : question.id == 3 ? 'd-none' : ''}
                                        >{question.id}</p>
                                        <span
                                            className={question.id < 3 ? 'test-check active' : question.id == 3 ? 'test-check bg-white' : 'd-none'}
                                        >
                                            <i class="far fa-check"></i>
                                        </span>
                                    </div>
                                </div>
                            })}
                        </div>

                        <BoxTitle margin='0 0 30px 0' >1-savol</BoxTitle>
                        <p className='task-item-text'>
                            Полыхающая спальня, крики младшего брата и безумные глаза отца – душераздирающие <Link>Файл:HTML</Link> воспоминания Дина Винчестера.
                        </p>
                        <p className='task-item-text'>
                            После исчезновения папы, который отправился на охоту и не вернулся, им приходится объединиться и организовать большое путешествие по стране. Оставленный без присмотра дневник, где находятся важные записи, служит для них компасом, указывающим верное направление. Трудностей возникает много, но взаимовыручка и братство по крови помогают им выпутываться из самых сложных передряг <Link>Файл:CSS</Link>
                        </p>

                        <Form>
                            <div key={`default-checkbox`} className="mb-3">
                                {questions[0].variant.map((variant, index) => {
                                    return (
                                        <Form.Group className="d-flex align-items-center mb-3">
                                            <input type="checkbox" id={`test-check-${index}`} name='answer' />
                                            <Form.Label htmlFor={`test-check-${index}`} className='answer-label'>{variant}</Form.Label>
                                        </Form.Group>
                                    )
                                })}
                            </div>
                            <MyButton className='d-block ms-auto' bg='#E3445A'>Далее 👉</MyButton>
                        </Form>
                    </div>
                </div>
            </Container>
            <Connect text='Sizda savol bormi?' fields={[{ name: "textarea", type: "", placeholder: "Текст" }]} />
        </div>
    )
}

export default TestPage