import React from 'react'
import AccordionI from '../../Components/Read/Accordion'
import { Navbar, Container } from 'react-bootstrap'
import AccordionNav from '../../Components/Read/AccordionNav'

export default function ReadView() {
  return <Container >
    <h1>What's New?</h1>


      <Container >
        <AccordionNav />
        <Container className='p-2 bg-body-tertiary'>
          <AccordionI />
        </Container>
      </Container>
  </Container>
}
