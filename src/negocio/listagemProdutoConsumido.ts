import Listagem from "./listagem"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"

export default class ListagemProdutoConsumido extends Listagem {
    private clientes: Cliente[]
    private produtos: Produto[]
    private tops: {prod: Produto, qtd: number}[]

    constructor(clientes: Cliente[], produtos: Produto[]) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.tops = []
    }

    private ordena(a: {prod: Produto, qtd: number}, b: {prod: Produto, qtd: number}) {
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
                        if(produto.prod.codigo === code){
                            this.tops.splice(index, 1, {prod: produto.prod, qtd: produto.qtd+1})
                        }
                    })
                } else {
                    codigos.push(code);
                    this.tops.push({prod: produto, qtd: 1})
                }
            })
        })
        this.tops.sort(this.ordena)
        console.log(`\nTop 10 produtos que mais consumiram:`);
        this.tops.forEach((tops, index) => {
            console.log(`${index + 1} - ${tops.prod.nome} com ${tops.qtd} unidades vendidas`)
        });
        console.log(`--------------------------------`)
    }
}