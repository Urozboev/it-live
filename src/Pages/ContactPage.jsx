import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderTitle from '../components/Header/HeaderTitle'
import Connect from '../components/Sections/Connect'
import ContactInfo from '../components/Sections/ContactInfo'

function ContactPage() {
  return (
    <div>
      <Container fluid>
        <HeaderTitle title={"Контакты"} />
        <ContactInfo />
      </Container>
      <Connect />
    </div>
  )
}

export default ContactPage
