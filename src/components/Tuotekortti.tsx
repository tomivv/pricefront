import React, {useState, useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { ProductContext } from './ProductContext';


interface Props {
                children? : any,
                paivita? : (event : any) => void,
}

const Tuotelista : React.FC<Props> = (props : Props) => {

  const { haeTiedot } = useContext(ProductContext)
<<<<<<< HEAD

  

=======
  // functio joka hoitaan tiedon hakemisen palvelimelta kun nappia painetaan
>>>>>>> acc71b37e9821841063f3cdd39c922af879102ce
  function handleSubmit(e: any) {
    // estetään sivun uudelleen lataaminen
    e.preventDefault();
    // kutsutaan functio joka hakee tiedot palvelimelta ja tallentaa ne provideriin
    // TODO: formista pitää saada EAN/hakutermi functiolle parametriksi
    haeTiedot();
  }

    const [nayta, setNayta] = useState<boolean>(true);

    return (
      <>
        <Card style={{ width: '40rem' }}>
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              <Card.Title>Etsi tuote</Card.Title>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control onChange={props.paivita} type="string" name="EAN" placeholder="Syötä EAN..." />
              </Form.Group>
            <Button variant="outline-dark" size="lg" block type="submit">Etsi</Button>
          </Card.Body>
          </Form>
        </Card>
      </>
    )
}

export default Tuotelista;
