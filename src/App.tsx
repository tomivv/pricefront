import React, {useEffect, useState} from 'react';
import Otsikko from './components/Otsikko';
import Tuotekortti from "./components/Tuotekortti";
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';


interface Props {}

interface State{

    infot : any[],
    tiedotLadattu : boolean
}

const App : React.FC<Props> = () => {

    const [data, setData] = useState<State>({
        infot : [],
        tiedotLadattu : false
    });

    useEffect(() => {

        async function haeTiedot(){
    
          try{

          let res = await fetch("URLTÄHÄ bROs");
    
          let infot = await res.json();
    
          console.log(infot);
    
          setData({
                ...data,
                infot : infot,
                tiedotLadattu : true
          });
    
          }catch (err){
    
            setData({
              ...data,
              tiedotLadattu : false
        });
    
      }
    
        };
    
        haeTiedot(); //Tää vittuu sit bro mut toimii tällee et hakee jo dataa
    
        
    
        console.log("Valmis");
      }, []);

        return (
            <Container>
            <Otsikko teksti="Pricesite"/>
            <Card style={{ width: '40rem' }}>
            <Card.Body>

            <Card.Title>Etsi tuote</Card.Title>

            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control type="string" name="EAN" placeholder="Syötä EAN..." />
            </Form.Group>

            <Button variant="outline-dark" size="lg" block>Etsi</Button>
            </Card.Body>
            </Card>



            {(data.tiedotLadattu === false) ? <Spinner animation="border" className="mt-2" role="status">
            <span className="sr-only">Ladataan...</span>
            </Spinner> :
            <ListGroup>
            {data.infot.map((info, idx) => {
            return (<ListGroup.Item key={idx}>{info.otsikko}</ListGroup.Item>)
            })};
            </ListGroup>}

            </Container>
        )
}

export default App;
