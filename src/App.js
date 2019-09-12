import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Card, Icon, Image, Dimmer, Loader } from 'semantic-ui-react'

const Pin = ({ image }) => (
  <Card style={{
    borderRadius: 0
  }}>
    <Card.Content>
      <Image src={image} fluid />
      <Card.Description>
        Natasha's Lemon Cake
      </Card.Description>
      <Card.Meta>
        <span>51 likes</span><span>121 repins</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <p>DARK!</p>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)



const Logo = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
  color: red;
  font-family: 'Pacifico', cursive;
  font-weight: normal;
`

const PinColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 10px 0 10px;
  /* height: 1000px; */
`

const PinColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const usePinLoader = () => {
  const [pins1, setPins1] = useState([])
  const [pins2, setPins2] = useState([])
  const [pins3, setPins3] = useState([])
  const [pins4, setPins4] = useState([])
  const [pins5, setPins5] = useState([])

  const fillPin = (setPin, seed) => {

    setTimeout(() => {
      const newPins = []
      for (let i = seed; i < 500; i+=5) {
        newPins.push(`https://source.unsplash.com/random/${i}x400?fish`)
      }
      setPin(newPins)
    }, seed * 10)
   
  }
  useEffect(() => {

    fillPin(setPins1, 200)
    fillPin(setPins2, 250)
    fillPin(setPins3, 225)
    fillPin(setPins4, 300)
    fillPin(setPins5, 201)
  }, [])

  return [pins1, pins2, pins3, pins4, pins5]
}

const PinContainer = () => {
  const [pins1, pins2, pins3, pins4, pins5] = usePinLoader()

  // Loader...

  return (
    <PinColumnContainer>
      <PinColumn>
        {
          pins1.length === 0 && <Dimmer active><Loader /></Dimmer>
        }
        { pins1.map(p => <Pin image={p} />) }
      </PinColumn>
      <PinColumn>
        { pins2.map(p => <Pin image={p} />) }
      </PinColumn>
      <PinColumn>
        { pins3.map(p => <Pin image={p} />) }
      </PinColumn>
      <PinColumn>
        { pins4.map(p => <Pin image={p} />) }
      </PinColumn>
      <PinColumn>
        { pins5.map(p => <Pin image={p} />) }
      </PinColumn>                   
    </PinColumnContainer>   
  )
}

const Header = () => {
  return <div>Imagine there was a header</div>
}


function App() {
  return (
    <div className="App">
      <Logo>Pinterest</Logo>

      {/* <Loader /> */}

      <Header />
      <PinContainer />
    </div>
  );
}

export default App;
