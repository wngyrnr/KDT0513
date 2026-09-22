import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align:  center;
`

const Title = styled.h1`
    color: #333;
    margin-bottom: 30px;
`

const Button = styled(Link)`
    display: inline-block;
    background: #2e7abc;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;

    &:hover{
        background: #1b486f;
    }
`

const Home = () => {
  return (
    <HomeContainer>
        <Title>게시글 관리 시스템</Title>
        <Button to="/posts">게시글 목록 보기</Button>
        <Button to="/posts/new">새 게시글 작성</Button>
    </HomeContainer>
  )
}

export default Home