import Item from "./item"

export default class Servico extends Item{
    constructor(codigo: string, nome: string, preco: number) {
        super(codigo, nome, preco)
    }
}