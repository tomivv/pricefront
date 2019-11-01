import React, {useState, useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ProductContext } from './ProductContext';


interface Props {
                children? : any,
                paivita? : (event : any) => void,
                e? : any,
}

const Tuotelista : React.FC<Props> = (props : Props) => {

  const [ean, setEan] = useState<any>('');

  const { haeTiedot } = useContext(ProductContext)
  // functio joka hoitaan tiedon hakemisen palvelimelta kun nappia painetaan
  function handleSubmit(e: any) {
    // estetään sivun uudelleen lataaminen
    e.preventDefault();
    // kutsutaan functio joka hakee tiedot palvelimelta ja tallentaa ne provideriin
    // TODO: formista pitää saada EAN/hakutermi functiolle parametriksi
    haeTiedot(ean);
    setEan('');
  }

    return (
      <>
        <Card>
          <Form onSubmit={handleSubmit}>
            <Card.Body>
              <Card.Title>Etsi tuote</Card.Title>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control value={ean} onChange={(e: any) => setEan(e.target.value)} type="string" name="EAN" placeholder="Syötä EAN..." />
              </Form.Group>
            <Button variant="outline-dark" size="lg" block type="submit">Etsi</Button>
          </Card.Body>
          </Form>
        </Card>
      </>
    )
}

export default Tuotelista;
