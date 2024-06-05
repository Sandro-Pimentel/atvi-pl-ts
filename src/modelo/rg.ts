export default class RG {
    valor: string
    dataEmissao: Date

    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }

    get getValor() {
        return this.valor
    }

    get getEmissao() {
        return this.dataEmissao
    }
}
