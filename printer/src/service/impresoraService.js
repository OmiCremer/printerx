
export async function listaImpresoras (){
    const data = await fetch('/api/impresoras')
    const response = data.json()
    console.log(response)
    return response
}


export async function unaImpresora(id){
    const data = await fetch('/api/impresoras/'+ id )
    const response = await data.json()
    return response
}
