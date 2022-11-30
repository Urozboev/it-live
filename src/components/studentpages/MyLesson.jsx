import React from 'react'
import HeaderTitle from '../Header/HeaderTitle'
import Connect from '../Sections/Connect'
import { Container, Tab, Tabs } from 'react-bootstrap'
import Box from '../Sections/Box'

function MyLesson() {
  return (
    <div>
      <Container fluid>
        <HeaderTitle title={"Mening kurslarim"} />
        <div className="padding-container">
          <Tabs
            defaultActiveKey="online"
            id="teacher-courses"
          >
            <Tab eventKey="online" title="Онлайн курсы">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <Box num={1} rout={'/student/my-lesson'} />
                </div>
              </div>
            </Tab>
            <Tab eventKey="offline" title="Офлайн курсы">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <Box />
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Container>
      <Connect text='Sizda savol bormi?' fields={[{ name: "textarea", type: "", placeholder: "Текст" }]} />
    </div>
  )
}

export default MyLesson