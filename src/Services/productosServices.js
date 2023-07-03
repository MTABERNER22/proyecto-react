
export async function getAll(buscar) {
     return fetch(`http://localhost:3002/productos/?buscar=${buscar}`)
     .then((res)=>res.json())
}


export async function getById(id){
  return fetch(`http://localhost:3002/productos/${id}`)
     .then((res)=>res.json())
}


export async function createProductos(data,token){
  return fetch(`http://localhost:3002/productos/`, {
      method:"POST",
      headers:{
        'Content-Type':"application/json",
        'x-access-token':token
    },
    body:JSON.stringify(data)
   })
.then((res) => res.json())
}

export async function update(id,data,token){
  return fetch(`http://localhost:3002/productos/${id}`,{
      method:"PUT",
      headers:{
          'Content-Type':"application/json",
          'x-access-token':token
      },
      body:JSON.stringify(data)
  })
  .then((res) => res.json())
}

export async function remove(id,token){
  return fetch(`http://localhost:3002/productos/${id}`,{
      method:"DELETE",
      headers:{
          'x-access-token':token
      }
  })
  .then((res) => res.json())
}
