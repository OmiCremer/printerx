import impresoras from '../data/impresoras.json'
// import consultas from '../data/consultas.json'

export function unaImpresora(id){
    const impresora = impresoras.find(item => item.id === id)
    return impresora
}

// export function unaConsulta(){
//     const consulta = consultas.push({})
//     console.log(consulta)
// }