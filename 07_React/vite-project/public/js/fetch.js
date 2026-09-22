fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => {
        console.log("문제가 발생했습니다", err)
    });

async function getTodo() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/5');
        if (!response.ok) throw new Error("서버 오류 응답!")

        const data = await response.json();
        console.log(data)
    } catch (err){
        console.log("문제가 발생했습니다", err)
    }
}

getTodo();