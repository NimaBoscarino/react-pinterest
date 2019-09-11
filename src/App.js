import React from 'react';
import styled from 'styled-components'
import { Card, Icon, Image } from 'semantic-ui-react'

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

const PinContainer = () => {
  return (
    <PinColumnContainer>
      <PinColumn>
        <Pin image={'https://source.unsplash.com/random/900x400'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/200x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/300x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/200x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/800x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/500x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/500x400'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/800x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/300x200'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/900x100'} >Pin!</Pin>
      </PinColumn>
      <PinColumn>
        <Pin image={'https://source.unsplash.com/random/800x400'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/300x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/200x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/700x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/800x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/500x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/500x200'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/800x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/100x200'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/900x100'} >Pin!</Pin>
      </PinColumn>
      <PinColumn>
        <Pin image={'https://source.unsplash.com/random/900x400'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/200x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/300x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/200x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/800x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/500x500'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/500x400'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/800x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/400x200'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/900x100'} >Pin!</Pin>
      </PinColumn>   
      <PinColumn>
        <Pin image={'https://source.unsplash.com/random/900x400'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/200x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/300x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/200x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/800x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/500x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/500x400'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/800x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/300x200'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/900x100'} >Pin!</Pin>
      </PinColumn>
      <PinColumn>
        <Pin image={'https://source.unsplash.com/random/800x400'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/300x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/200x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/700x300'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/800x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/500x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/500x200'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/800x600'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/100x200'} >Pin!</Pin>
        <Pin image={'https://source.unsplash.com/random/900x100'} >Pin!</Pin>
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
