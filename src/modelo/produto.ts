import Item from "./item"

export default class Produto extends Item {
    private _codigo: string
    private _nome: string
    private _preco: number

    constructor(codigo: string, nome: string, preco: number) {
        super(codigo, nome, preco)
        this._codigo = codigo
        this._nome = nome
        this._preco = preco
    }

    public get codigo(): string {
        return this._codigo
    }

    public get nome(): string {
        return this._nome
    }

    public get preco(): number {
        return this._preco
    }
}