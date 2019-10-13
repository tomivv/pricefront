import React, {useEffect, useState} from 'react';
import Otsikko from './components/Otsikko';
import Tuotekortti from "./components/Tuotekortti";
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ProductProvider } from './components/ProductContext';
// import Image from 'react-bootstrap/Image';
// <Card.Img variant="top" src={info.kuvan_url} width="200px" height="400px" /> Pitäisikö lisätä bäkkäriin kanssa kuva?

interface Props {}

interface State{
    infot : any[],
    tiedotLadattu : boolean
}
// custom hook
function useData() {
  const [data, setData] = useState<State>({
    infot : [],
    tiedotLadattu : false
  });

  async function haeTiedot(SearchTerm: any) {
    let res = await fetch(`http://localhost:3001/api/product/${SearchTerm}`);
    let infot = await res.json();
    console.log(infot)
    setData({
      ...data,
      infot : infot,
      tiedotLadattu : true
    });
  };
  useEffect(() => {
    console.log('asd')
  }, []);
  // palautetaan palvelimen antama Data ja functio, jolla voi hakea dataa
  return { data, haeTiedot }
}

const App : React.FC<Props> = () => {
  const hook = useData();
  // ProductProvider vie hookin antamat tiedot ylemmälle tasolle
  return (
            <Container>
            <ProductProvider value={hook}>
            <Otsikko teksti="Pricesite"/>
            <Tuotekortti />
            {(hook.data.tiedotLadattu === false) ? <Spinner animation="border" className="mt-2" role="status">
             <span className="sr-only">Ladataan...</span>
            </Spinner> :
            <ListGroup>
            
            {hook.data.infot.map((info, idx) => {
              return (
                <Card key={idx} style={{ width: '18rem'}}>
                  <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <Card.Text>
                      Linkki: {info.link}
                    </Card.Text>
                    <Card.Text>
                      Nimi: {info.name}
                    </Card.Text>
                    <Card.Text>
                      Hinta: {info.price}€
                    </Card.Text>
                  </Card.Body>
                  <Button variant="primary">Täydet tiedot</Button>
                </Card>
                )
              })}

            </ListGroup>}
            </ProductProvider>
            
            </Container>
        )
}

export default App;
