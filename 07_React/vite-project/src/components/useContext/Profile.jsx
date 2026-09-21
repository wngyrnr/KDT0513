import React from 'react'
import { useUser } from './UserContext';

const Profile = () => {
    const {user} = useUser();

    if (!user) {
        return <p>로그인 후에 정보를 확인할 수 있습니다.</p>
    }
    return (
        <section>
            <h3>사용자 정보</h3>
            <p>이름 : {user.name}</p>
            <p>권한 : {user.role}</p>
        </section>
    )
}

export default Profile