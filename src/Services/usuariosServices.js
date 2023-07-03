export async function login(data){
    return fetch(`http://localhost:3002/users/login/`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    })
    .then((res) => res.json())
 }

export async function create(data){
    return fetch(`http://localhost:3002/users/`,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    })
    .then((res) => res.json())
 }

