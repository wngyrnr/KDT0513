import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
    padding: 12px 16px;
    background: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
`

const StatsBar = () => {
  return (
    <Bar>
        오늘 3회 · 총 75분
    </Bar>
  )
}

export default StatsBar