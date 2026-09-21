import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const SubContent = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            현재테마 : {theme}
        </div>
    )
}

export default SubContent