import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

interface Props {
  info: any
}

const Product : React.FC<Props> = (info: any, key: any) => {
    return (
        <Card>
          <Card.Body>
            <Card.Title>{info.info.name}</Card.Title>
            <Card.Text>
              Linkki: <a href={info.info.link}>{info.info.store}</a>
            </Card.Text>
            <Card.Text>
              Nimi: {info.info.name}
            </Card.Text>
            <Card.Text>
              Hinta: {info.info.price}€
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

// <Button variant="primary">Täydet tiedot</Button>
export default Product;
