function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("응답 완료")
            const ok = Math.random() > 0.5;
            if (ok) resolve("성공")
            else reject("실패")
        })
    })
}

fetchData()
    .then(result => {
        console.log("then결과", result)
    })
    .catch(err => {
        console.log("catch결과", err)
    })
    .finally(() => {
        console.log("끝")
    })

async function testAsync(params) {
    try{
        const result = await fetchData()
        console.log("then결과", result)
    }catch(err){
        console.log("catch결과", err)
    }finally{
        console.log("async 끝")
    }
}

testAsync()