import React from 'react'

interface Props {
                teksti : string
}

const Otsikko : React.FC<Props> = (props : Props) => {
    return (
        <h2 style={{textAlign: 'center'}}>

            {props.teksti}
            
        </h2>
    )
}

export default Otsikko;
