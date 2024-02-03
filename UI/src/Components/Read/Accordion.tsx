import { Badge, ListGroup, Stack } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

interface IAccordionI {

}

export default function AccordionI({
    
}: IAccordionI): JSX.Element {
  return <>
    <ListGroup as="ol" >

      {[1,2,3].map((item: number, i) => (

        <ListGroup.Item
          key={i}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >

          <div className="me-auto">
            <h5>Lorem, ipsum.</h5>
            <small>Month of Release</small>
            <Stack direction="horizontal" gap={2}>
              <Badge bg="primary">Primary</Badge>
              <Badge bg="secondary">Secondary</Badge>
              <Badge bg="success">Success</Badge>
            </Stack>
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>

      ))}


    </ListGroup>
    </>
}
