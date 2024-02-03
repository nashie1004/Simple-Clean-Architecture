import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <Container className="p-3">
      <Outlet />
    </Container>
  )
}
