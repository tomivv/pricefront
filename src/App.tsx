import React, {useEffect, useState} from 'react';
import Otsikko from './components/Otsikko';
import Tuotekortti from "./components/Tuotekortti";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { ProductProvider } from './components/ProductContext';
import Product from './components/Product';


interface Props {}

interface Spinner1{
  loading : boolean
}

interface State{
    infot : any[],
    tiedotLadattu? : boolean
}
// custom hook
function useData() {
  const [data, setData] = useState<State>({
    infot : [],
    tiedotLadattu : false
  });

  const [spinner, setSpinner] = useState<Spinner1>({loading : false});

  
  async function haeTiedot(SearchTerm: any) {
    setSpinner({loading : true});
    let res = await fetch(`https://${process.env.REACT_APP_API_URL}/api/product/${SearchTerm}`);
    let infot = await res.json();
    console.log(infot)
    if (infot.failed) {
      setSpinner({loading : false});
    } else {
      setData({
        ...data,
        infot : infot,
        tiedotLadattu : true,
      });
      setSpinner({loading : false});
    }
  };
  useEffect(() => {
  }, []);
  // palautetaan palvelimen antama Data ja functio, jolla voi hakea dataa
  return { data, haeTiedot, spinner }
}

const App : React.FC<Props> = () => {
  const hook = useData();
  // ProductProvider vie hookin antamat tiedot ylemmälle tasolle
  return (
    <Container>
      <ProductProvider value={hook}>
        <Otsikko teksti="Pricesite"/>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} md={{ span: 12, offset: 0}}>
            <Tuotekortti />
          </Col>
        </Row>
        {(hook.spinner.loading === true) ? <Spinner animation="border" className="mt-3" role="status">
          <span className="sr-only">Ladataan...</span>
          </Spinner> :
          <Row>
            {hook.data.infot.map((info, idx) => {
              return (
              <Col lg={4} md={12} key={idx}>
                <Product info={info} /> 
              </Col>
              )
            })}
          </Row>
        }
      </ProductProvider>
    </Container>
        )
}

export default App;
