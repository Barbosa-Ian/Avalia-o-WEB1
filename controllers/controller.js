var path = require('path')

const controller = {}

let indice = 4

var lista = [
    {
    "id": 1,
    "descricao": "Camiseta",
    "preco": 29.99,
    "cores": ["preto", "branco", "cinza"]
    },
    {
    "id": 2,
    "descricao": "Calça Jeans",
    "preco": 79.99,
    "cores": ["azul claro", "azul escuro"]
    },
    {
    "id": 3,
    "descricao": "Tênis Esportivo",
    "preco": 149.99,
    "cores": ["preto", "branco", "cinza", "azul"]
    },
    {
    "id": 4,
    "descricao": "Jaqueta de Couro",
    "preco": 99.99,
    "cores": ["preto", "marrom"]
    }
   ]
   
controller.getAll = (req, res)=>{
    res.status(200).send(lista)
}

controller.getID = (req, res)=>{
    item = lista.find(i => i.id == req.params.id)
}

controller.createNew = (req,res)=>{
    const novoDado = req.body
    novoDado.id = indice + 1
    lista.push(novoDado)
    res.status(200).redirect("/")
}

controller.updateData = (req,res)=>{
    dado = lista.findIndex(p => p.id == req.params.id)
    console.log(dado)
}

controller.deleteData = (req,res)=>{
    const novoDado = lista.findIndex(p => p.id == req.params.id)
}

module.exports = controller