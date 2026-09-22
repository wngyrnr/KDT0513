import React, { useEffect, useState } from 'react'
import {
    Button,
    ButtonContainer,
    Container,
    Content,
    DeleteButton,
    Loading,
    LoadingOverlay,
    PostCard,
    Title
} from './styled/PostList.styled'
import usePostStore from '../store/postStore'
import { Navigate, useNavigate } from 'react-router-dom';

/*
    컴포넌트 상태(state) : 단일 컴포넌트 또는 직계자식만 쓰는 데이터(입력값, 특정버튼상태, 팝업상태...)
    전역 상태(store) : 여러페이지, 멀티 컴포넌트가 공유하는 상태(인증정보, 장바구니목록, 테마, api데이터...)
*/
const PostList = () => {
    const {posts, loading, error, fetchPosts, deletePost} = usePostStore();
    const [deletePostId, setDeletePostId] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, [])

    const handleDelete = async (id) => {
        try{
            setDeletePostId(id)
            await deletePost(id)
        } catch(err){
            console.log("삭제 실패", err)
        } finally{
            setDeletePostId(null);
        }
    }

    if (loading && posts.length === 0) return <Loading>로딩 중....</Loading>

    return (
        <Container>
            {posts.map(post => (
                <PostCard key={post.id}>
                    <Title>{post.title}</Title>
                    <Content>{post.body}</Content>
                    <ButtonContainer>
                        <Button
                            onClick={() => navigate(`/posts/${post.id}/edit`)}
                            disabled={loading}
                        >
                            수정
                        </Button>
                        <DeleteButton
                            disabled={loading}
                            onClick={() => handleDelete(post.id)}
                        >
                            {deletePostId === post.id ? "삭제 중..." : "삭제"}
                        </DeleteButton>
                    </ButtonContainer>
                    {deletePostId === post.id && (
                        <LoadingOverlay>
                            <div>삭제 중...</div>
                        </LoadingOverlay>
                    )}
                </PostCard>
            ))}
        </Container>
    )
}

export default PostList