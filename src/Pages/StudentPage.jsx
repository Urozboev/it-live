import React, { memo, useMemo } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import HeaderTitle from '../components/Header/HeaderTitle'
import HeaderNavbar from '../components/Navbar/HeaderNavbar'
import Connect from '../components/Sections/Connect'
import Courses from '../components/Sections/Courses'

function StudentPage({ auth, showProfil }) {
    return (
        <div>
            <Container fluid >
                <HeaderTitle title={"Video darslarim"} />
                <div className="padding-container">
                    <Tabs
                        defaultActiveKey="online"
                        id="teacher-courses"
                    >
                        <Tab eventKey="online" title="Онлайн курсы">
                            <Courses />
                        </Tab>
                        <Tab eventKey="offline" title="Офлайн курсы">
                            <Courses />
                        </Tab>
                    </Tabs>
                </div>
            </Container>
            <Connect text='Sizda savol bormi?' fields={[{ name: "textarea", type: "", placeholder: "Текст" }]} />
        </div>
    )
}

export default StudentPage
