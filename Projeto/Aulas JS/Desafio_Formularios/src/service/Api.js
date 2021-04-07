import { toast } from "react-toastify";

const Api = (post) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: post.title,
                body: post.body,
                userId: post.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if(!response.ok){
                throw Error(response.statusText);
            }
            toast.success("Cadastro realizado com sucesso!!")
        })
        .catch(error => {toast.error("Ops! Algo deu errado"); console.log("ERROR: ", error)})
}

export default Api;