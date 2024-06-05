export default class Telefone {
    private ddd: string
    private numero: string

    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    get getDDD() {
        return this.ddd
    }

    get getNumero() {
        return this.numero
    }
}