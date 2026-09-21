import React from 'react'
import { useUser } from './UserContext'

const Header = () => {
    const {user, login, logout} = useUser();
    return (
        <header>
            {user ? (
                <>
                    <h2>안녕하세요, 최지원님</h2>
                    <button onClick={logout}>로그아웃</button>
                </>)
                :
                (<>
                    <h2>로그인이 필요합니다.</h2>
                    <button onClick={login}>로그인</button>
                </>)
            }
        </header>
    )
}

export default Header