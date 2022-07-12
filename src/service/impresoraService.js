import impresoras from '../data/impresoras.json'


export function unaImpresora(id){
    const impresora = impresoras.find(item => item.id === id)
    // const procucto =
    console.log(impresora)
    return impresora
}

export function unaConsulta(){
    const impresora = impresoras.push()
    console.log(impresora)
}