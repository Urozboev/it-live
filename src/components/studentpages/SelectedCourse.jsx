import React from 'react'
import VideoBox from './VideoBox'
import HeaderTitle from '../Header/HeaderTitle'
import Connect from '../Sections/Connect'
import { Container } from 'react-bootstrap'

function SelectedCourse() {
  return (
    <div>
      <Container fluid>
        <HeaderTitle title={"Java Backend"} />
        <VideoBox />
      </Container>
      <Connect text='Sizda savol bormi?' fields={[{ name: "textarea", type: "", placeholder: "Текст" }]} />
    </div>
  )
}

export default SelectedCourse