import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

import SettingsPanel from "./components/SettingsPanel"
import TimerPanel from "./components/TimerPanel"
import StatsBar from './components/StatsBar'
import SessionList from './components/SessionList'


const Container = styled.main`
  max-width: 600px;
  margin: 40px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  margin: 0;
  font-size: 22px;
`


function App() {
  const [sessions, setSessions] = useState([])
  const [focusMinutes, setFocusMinutes] = useState(25);
  //시작했는지 멈췄는지 확인용 변수
  const [isRunning, setIsRunning] = useState(false);

  const toggleRunning = () => setIsRunning(prev => !prev)

  const changeFocusMinutes = (minutes) => {
    //검증처리
    setFocusMinutes(Number(minutes))
  }

  const addSession = (session) =>{
    setSessions(prev => [...prev, session])
    setIsRunning(false)
  }

  return (
    <Container>
      <Header>
        <Title>🎯 Focus Timer</Title>
        <SettingsPanel 
          focusMinutes = {focusMinutes}
          changeFocusMinutes = {changeFocusMinutes}
          isRunning = {isRunning}
        />
      </Header>
      
      <TimerPanel 
        focusMinutes = {focusMinutes}
        isRunning = {isRunning}
        onToggle = {toggleRunning}
        onComplete = {addSession}
      />

      <StatsBar />
      <SessionList sessions={sessions}/>
    </Container>
  )
}

export default App
