import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import PostForm from '../components/PostForm'
import usePostStore from '../store/postStore'

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
    border: none;
    padding: 8px 06px;
    border-radius: 4px;
    text-decoration: none;

    &:hover{
        background: #1b486f;
    }
`

const Loading = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 18px;
    color: #666;
`

/*
    클릭했을 때 바로이동 -> Link
    어떤로직후에 이동 -> useNavigate
*/

const EditPostPage = () => {
    const { id } = useParams();
    const {posts} = usePostStore();
    const [post, setPost] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        const findPost = posts.find(p => p.id === parseInt(id));
        if(findPost){
            setPost(findPost);
        } else {
            navigate("/posts");
        }
    },[id])

    if(!post) return <Loading>로딩 중...</Loading>

    return (
        <Container>
            <Header>
                <Title>게시글 수정</Title>
                <Button to="/posts">목록으로</Button>
            </Header>
            <PostForm 
                post={post}
                onCancel={()=> navigate('/posts')}
            />
        </Container>
    )
}

export default EditPostPage