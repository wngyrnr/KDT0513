import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { formatTime } from '../utils/format'

const Panel = styled.section`
  background: #fff;
  border: 1px solid #d0d0d0;
  border-radius: 12px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const Time = styled.div`
  font-size: 72px;
  font-weight: 700;
  color: #343434;
  font-variant-numeric: tabular-nums; /*숫자폭 고정폭 */
`

const Input = styled.input`
  font-size: 15px;
  width: 100%;
  max-width: 340px;
  padding: 10px 12px;
  border: 1px solid #d0d0d0;
  text-align: center;
`

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  background: ${({ $running }) => ($running ? 'red' : 'green')} ;
`

const TimerPanel = ({focusMinutes, onToggle, isRunning, onComplete}) => {
  const [secondsLeft, setSecondsLeft] = useState(focusMinutes * 60)
  const [label, setLabel] = useState('')

  const startedAtRef = useRef(null) //시작 값 보관용

  useEffect(() => {
    setSecondsLeft(focusMinutes * 60)
    startedAtRef.current = null
  },[focusMinutes])

  //실행중일 때만 1초씩 감소
  useEffect(() => {
    if (!isRunning) return;

    const timeInter = setInterval(() => {
      setSecondsLeft(prev => prev -1)
    }, 1000)

    return () => clearInterval(timeInter)
  }, [isRunning]);

  //0초가 되면 세션기록하고 초기화
  useEffect(() => {
    if (secondsLeft !== 0) return;

    onComplete(  {
      id: Date.now(),          // Date.now()
      label: label.trim() || '(목표 없음)',         // 사용자 입력, 비어 있으면 '(제목 없음)'
      minutes: focusMinutes,                // 설정된 집중 시간
      startedAt: startedAtRef.current, // ▶ 를 처음 누른 시각 (ISO)
      endedAt:   new Date().toISOString(), // 0초 도달 시각 (ISO)
    })

    startedAtRef.current = null;
    setSecondsLeft(focusMinutes * 60);
    setLabel('');

  },[secondsLeft])

  /*
    실행 중: document.title = "24:59 · React 과제" / 
    정지 중: "Focus Timer". 
    컴포넌트가 사라질 때 제목을 원래대로 복구한다.
  */
  useEffect(() => {
    document.title = isRunning
    ? `${formatTime(secondsLeft)} · ${label || '목표없음'}`
    : 'Focus Timer';

    return () => {
      document.title = 'Focus Timer';
    }
  },[isRunning, secondsLeft, label])


  // 시작할때 시간을 기록, 일시정지 <-> 시작 변경
  const handleToggle = () =>{
    //처음에만 시작시간 기록
    if (!isRunning && startedAtRef.current == null) {
      startedAtRef.current = new Date().toISOString();
    }
    onToggle();
  }

  const handelReset = () => {
    if (isRunning) onToggle();

    startedAtRef.current = null;
    setSecondsLeft(focusMinutes * 60);
  }

  return (
    <Panel>
      <Time >{formatTime(secondsLeft)}</Time>

      <Input 
        placeholder='무엇에 집중하나요?'
        value={label}
        disabled={isRunning}
        onChange={(e) => setLabel(e.target.value)}
      />

      <Buttons>
        <Button $running={isRunning} onClick={handleToggle}>
          {isRunning ? '◬ 일시정지' : '▶ 시작'}
        </Button>
        <Button onClick={handelReset}>↺ 초기화</Button>
      </Buttons>
    </Panel>
  )
}

export default TimerPanel