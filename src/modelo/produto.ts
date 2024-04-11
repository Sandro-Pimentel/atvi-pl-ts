import Item from "./item"

export default class Produto extends Item {
    constructor(codigo: string, nome: string, preco: number) {
        super(codigo, nome, preco)
    }
}