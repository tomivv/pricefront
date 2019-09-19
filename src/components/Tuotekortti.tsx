import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';


interface Props {
                children? : any
}

const Ostoslista : React.FC<Props> = (props : Props) => {

    const [nayta, setNayta] = useState<boolean>(true);

    return (

        <>
   <Card style={{ width: '40rem' }}>
  <Card.Body>

    <Card.Title>Etsi tuote</Card.Title>

    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control type="string" name="EAN" placeholder="Syötä EAN..." />
  </Form.Group>

    <Button variant="outline-dark" size="lg" block>Etsi</Button>
    </Card.Body>
    </Card>


    
    
        </>
    )
}

export default Ostoslista;
