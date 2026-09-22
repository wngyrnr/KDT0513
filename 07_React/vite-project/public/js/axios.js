import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        console.log(response.data)
    })
    .catch(err => {
        console.log("문제가 발생했습니다", err)
    });

const getPost = async () => {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/2")
        console.log(response.data);
    } catch (err) {
        console.log("문제가 발생했습니다", err)
    }
}

getPost()