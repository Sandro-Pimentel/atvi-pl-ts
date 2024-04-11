import Servico from "../modelo/servico";

export default class ListagemServicos {
    private servicos: Array<Servico>

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
    }

    listar(): void {
        console.log(`\nLista de todos os servicos:`);
        this.servicos.forEach(servico => {
            console.log(`Código: ${servico.codigo}`)
            console.log(`Nome: ${servico.nome}`)
            console.log(`Preço: ${servico.preco}`)
            console.log(`-------------------------------------`)
        })
    }
}