import React, { useMemo } from 'react'

const ViewState = ({num}) => {
    console.log("ViewState 랜더링 됨")

    const getHeavyResult = (count) => {
        console.log("무거우 연산 시작...")
        let i=0;
        while (i<100000000) i++;
        return count * 2;
    }

    const result = useMemo(() => getHeavyResult(num));

    return (
        <div>
            <p>현재 숫자 : {num}</p>
            <p>계산된 값 (x2) : {result}</p>
        </div>
    )
}

export default ViewState