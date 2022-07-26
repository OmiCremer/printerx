const fs = require('fs');
const path = require('path');

const impresorasPath = path.join(__dirname, '../data/impresoras.json')
const impresoras = JSON.parse(fs.readFileSync(impresorasPath, 'utf8'))

const consultasPath = path.join(__dirname, '../data/consultas.json')
const consultas = JSON.parse(fs.readFileSync(consultasPath, 'utf8'))



const apiController = {
    impresoras: (req, res) =>{
       return res.json(impresoras) 
    },

    unaImpresora: (req, res) =>{
        const id = req.params.id
        const data = impresoras.find((impresoras) => impresoras.id == id)
        console.log(data)
        return res.json(data) 
    },

    consultas1: (req, res) =>{
        return res.json(consultas)
    },

    consultas: (req, res) => {
        const id = consultas.length + 1 
        const nuevaConsulta = {...req.body, id}
        consultas.push(nuevaConsulta)
        const string = JSON.stringify(consultas, null, 2)
        fs.writeFileSync(consultasPath, string)
    },

    
}

module.exports = apiController