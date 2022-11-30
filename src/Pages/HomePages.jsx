import React from 'react'
import { Container, Row } from 'react-bootstrap'
import HeaderTitle from '../components/Header/HeaderTitle'
import Home from '../components/Header/Home'
import Comments from '../components/Sections/Comments'
import Connect from '../components/Sections/Connect'
import Courses from '../components/Sections/Courses'
import TeamSlider from '../components/Sections/TeamSlider'

function HomePages() {
    return (
        <div>
            <Home />
            <section id="home-courses">
                <Container fluid>
                    <h6 className="section-title">
                        Курсы
                    </h6>
                    <h4 className="home-section-title">
                        Выберите направление, которое вам подходит
                    </h4>
                    <p className="home-description">
                        Выберите один из самых продвинутых и востребованных курсов по программированию. Во время курса мы поможем вам собрать портфолио, создать резюме и найти работу.
                    </p>
                    <Courses />
                </Container>
            </section>

            <section id="home-platform">
                <Container fluid>
                    <h6 className="section-title">
                        Наша платформа
                    </h6>
                    <h4 className="home-section-title">
                        Персональные возможности
                    </h4>
                    <p className="home-description">
                        Единая система - Для каждого студента есть личный кабинет, в котором они могут отслеживать всю
                        информацию
                        в процессе обучения через
                        эту единую систему
                    </p>
                    <Row className="align-items-center">
                        <div className="col-md-4 d-none d-md-block">
                            <img className="w-100" src="images/platform_img.png" alt="Platform Img" />
                        </div>
                        <div className="col-md-8 col-lg-8 personal">
                            <h3 className="personal-title">
                                СИСТЕМНЫЙ ПОДХОД К
                                ОБРАЗОВАНИЮ
                            </h3>
                            <div className="personal-box">
                                <div className="personal-box-number">
                                    01
                                </div>
                                <div className="personal-box-text">
                                    <h5>
                                        Выбор курса, который подходит именно вам
                                    </h5>
                                    <p>
                                        Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.
                                    </p>
                                </div>
                            </div>

                            <div className="personal-box">
                                <div className="personal-box-number">
                                    02
                                </div>
                                <div className="personal-box-text">
                                    <h5>
                                        Выбор курса, который подходит именно вам
                                    </h5>
                                    <p>
                                        Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.
                                    </p>
                                </div>
                            </div>

                            <div className="personal-box">
                                <div className="personal-box-number">
                                    03
                                </div>
                                <div className="personal-box-text">
                                    <h5>
                                        Выбор курса, который подходит именно вам
                                    </h5>
                                    <p>
                                        Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.
                                    </p>
                                </div>
                            </div>

                            <div className="personal-box">
                                <div className="personal-box-number">
                                    04
                                </div>
                                <div className="personal-box-text">
                                    <h5>
                                        Выбор курса, который подходит именно вам
                                    </h5>
                                    <p>
                                        Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.
                                    </p>
                                </div>
                            </div>

                            <div className="personal-box">
                                <div className="personal-box-number">
                                    05
                                </div>
                                <div className="personal-box-text">
                                    <h5>
                                        Выбор курса, который подходит именно вам
                                    </h5>
                                    <p>
                                        Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.
                                    </p>
                                </div>
                            </div>

                            <div className="personal-box">
                                <div className="personal-box-number">
                                    06
                                </div>
                                <div className="personal-box-text">
                                    <h5>
                                        Выбор курса, который подходит именно вам
                                    </h5>
                                    <p>
                                        Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.
                                    </p>
                                </div>
                            </div>

                            <div className="personal-box">
                                <div className="personal-box-number">
                                    07
                                </div>
                                <div className="personal-box-text">
                                    <h5>
                                        Приступайте к работе и начните свою карьеру
                                    </h5>
                                    <p>
                                        Тренировочный процесс ведется посредством видеоуроков, практических занятий, умения работать с наставником, живых встреч.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            <section id="team-section">
                <div className='container-fluid'>
                    <HeaderTitle title={"Наша команда наставников"} />
                    <p className="home-description">
                        Учебная программа, разработанная сильными экспертами
                    </p>
                    <TeamSlider />
                </div>
            </section>

            <Connect />

            <section id="comments-section">
                <Container fluid >
                    <h6 className="section-title">
                        Отзывы
                    </h6>
                    <h4 className="home-section-title">
                        Отзывы наших учеников
                    </h4>
                    <div className="row overflow-hidden">
                        <div className="col-12">
                            <Comments />
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default HomePages
