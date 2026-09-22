import React, { useState } from 'react'
import {
    Button,
    FormContainer,
    FormTitle,
    Input,
    TextArea,
} from './styled/PostForm.styled'
import usePostStore from '../store/postStore';

const PostForm = ({ post = null, onCancel }) => {
    const [title, setTitle] = useState(post?.title || '');
    const [body, setBody] = useState(post?.body || '');
    const [error, setError] = useState(null);
    const { addPost, updatePost, loading} = usePostStore();

    const handleSubmit = async (e) => {
        e.prevertDefault();
        //
    }
    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>{post ? '게시글 수정' : '게시글 작성'}</FormTitle>
            <Input
                type='text'
                placeholder='"제목'
                required
            />
            <TextArea
                placeholder='내용'
                required
            />
            <div>
                <Button type='submit'>
                    {post ? '수정' : '작성'}
                </Button>
                {onCancel && (
                    <Button type='button' onClick={onCancel}>
                        취소
                    </Button>
                )}
            </div>
        </FormContainer>
    )
}

export default PostForm