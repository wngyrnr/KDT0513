import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import styled from 'styled-components'
import ProfileCard from './components/ProfileCard'

const users = [
  {id: 1, name: '김철수', age: 28, isOnline: true},
  {id: 2, name: '이철수', age: 30, isOnline: false},
  {id: 3, name: '최철수', age: 19, isOnline: false},
  {id: 4, name: '박철수', age: 22, isOnline: true},
]

const Container = styled.main`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 16px;
`

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;

  &:hover{
    font-size: 30px;
  }
`

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

// const NewContainer = styled(Container)`
//   css...
// `

function App() {

  return (
    <Container>
     <Title>Profile Cards</Title>
     <CardList>
      {users.map((user) => (
        <ProfileCard 
          key={user.id}
          name={user.name}
          age={user.age}
          isOnline={user.isOnline}
        />
      ))}
     </CardList>
    </Container>
  )
}

export default App
