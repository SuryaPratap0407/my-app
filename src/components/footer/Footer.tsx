import React from 'react'
import './footer.css';
import { Card, Button } from 'react-bootstrap';


function Footer() {
  return (
    <Card className="text-center">
    
    <Card.Footer className="text-muted"><i>@copyRight </i></Card.Footer>
  </Card>
  )
}

export default Footer