import impresoras from '../data/impresoras.json'

export function unaImpresora(id){
    const impresora = impresoras.find(item => item.id === id)
    return impresora
}
