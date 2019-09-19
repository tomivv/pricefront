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


interface Props {}

interface State{
    infot : any,
    tiedotLadattu : boolean
}

function useData() {
  const [data, setData] = useState<State>({
    infot : [],
    tiedotLadattu : false
  });

  async function haeTiedot() {
    let res = await fetch(`http://localhost:3001/product/0`);
    let infot = await res.json();
    console.log(infot);
    setData({
      ...data,
      infot : infot,
      tiedotLadattu : true
    });
  };

  useEffect(() => {
    haeTiedot();
  }, []);

  return { data, haeTiedot }
}

const App : React.FC<Props> = () => {

  const hook = useData();
  
  return (
            <Container>
            <ProductProvider value={hook}>
            <Otsikko teksti="Pricesite"/>
            <Tuotekortti />
            
            <ListGroup>
            
            </ListGroup>
            </ProductProvider>
            </Container>
        )
}

// {(hook.data.tiedotLadattu === false) ? <Spinner animation="border" className="mt-2" role="status">
// <span className="sr-only">Ladataan...</span>
// </Spinner> :

export default App;
