import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    border: 2px solid #d6d6d6;
    border-radius: 12px;
    padding: 20px 24px;
    background: #ececec;
    font-size: 16px;
    width: 260px;
`

const Name = styled.h2`
    margin: 0 0 8px;
    font-size: 22px;
    color: #171717;
`

const Age = styled.h2`
    margin: 0 0 12px;
    color: #2f2f2f;
`

// styled를 위한 props전달시에는 앞에 접두어로 $를 붙이면 DOM으로는 전달되지 않는 props가 된다.
const Status = styled.p`
    margin: 0;
    font-weight: 600;
    color: ${({$online}) => ($online ? '#18b86d' : '#6b6b6b')};
`

const ProfileCard = ({name, age, isOnline}) => {
  return (
    <Card>
        <Name>{name}</Name>
        <Age>나이 : {age}세</Age>
        <Status $online={isOnline}>
            {isOnline ? '🟢 온라인 상태입니다.' : '🔴 오프라인 상태입니다.'}
        </Status>
    </Card>
  )
}

export default ProfileCard