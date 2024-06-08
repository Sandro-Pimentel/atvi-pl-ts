import Listagem from "./listagem"
import Cliente from "../modelo/cliente"
import Servico from "../modelo/servico"

export default class ListagemServicoConsumido extends Listagem {
    private clientes: Cliente[]
    private servicos: Servico[]
    private tops: {serv: Servico, qtd: number}[]

    constructor(clientes: Cliente[], servicos: Servico[]) {
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.tops = []
    }

    private ordena(a: {serv: Servico, qtd: number}, b: {serv: Servico, qtd: number}) {
        if(a.qtd > b.qtd){
            return -1
        } else if(a.qtd < b.qtd){
            return 1
        } else {
            return 0
        }
    }

    listar(): void {
        let codigos: string[] = [];
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                let code = produto.codigo
                if(codigos.includes(code)){
                    this.tops.forEach((produto, index) => {
                        if(produto.serv.codigo === code){
                            this.tops.splice(index, 1, {serv: produto.serv, qtd: produto.qtd+1})
                        }
                    })
                } else {
                    codigos.push(code);
                    this.tops.push({serv: produto, qtd: 1})
                }
            })
        })
        this.tops.sort(this.ordena)
        console.log(`\nTop 10 produtos que mais consumiram:`);
        this.tops.forEach((tops, index) => {
            console.log(`${index + 1} - ${tops.serv.nome} com ${tops.qtd} unidades vendidas`)
        });
        console.log(`--------------------------------`)
    }
}