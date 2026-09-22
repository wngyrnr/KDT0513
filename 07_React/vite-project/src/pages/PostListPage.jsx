import React from 'react'
import styled from 'styled-components'
import PostList from '../components/PostList'
import { Link } from 'react-router-dom'

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const Title = styled.h1`
    color: #333;
    margin: 0;
`

const Button = styled(Link)`
    background: #2e7abc;
    color: white;
    padding: 8px 06px;
    border-radius: 4px;
    text-decoration: none;

    &:hover{
        background: #1b486f;
    }
`

const PostListPage = () => {
  return (
    <Container>
        <Header>
            <Title>게시글 목록</Title>
            <Button to="/posts/new">새 게시글 작성</Button>
        </Header>
        <PostList />
    </Container>
  )
}

export default PostListPage