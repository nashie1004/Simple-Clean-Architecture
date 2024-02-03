import React from 'react'
import AccordionI from '../../Components/Read/Accordion'
import { Navbar, Container } from 'react-bootstrap'
import AccordionNav from '../../Components/Read/AccordionNav'
import AccordionPagination from '../../Components/Read/AccordionPagination'

export default function ReadView() {
  return <Container >
      <h1 className='text-center'>What's New?</h1>

      <Container className='mt-4'>
        <AccordionNav />
        <Container className='p-2 bg-body-tertiary'>
          <AccordionI />
          <AccordionPagination />
        </Container>
      </Container>
  </Container>
}
