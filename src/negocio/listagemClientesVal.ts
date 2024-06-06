import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesVal extends Listagem {
    private clientes: Cliente[]
    private top10: Cliente[]

    constructor(clientes: Cliente[]) {
        super()
        this.clientes = clientes;
        this.top10 = [];
    }

    private contaValor(cliente: Cliente) {
        let prod = 0
        let serv = 0
        const total = [prod, serv]
        cliente.getProdutosConsumidos.forEach(produto => prod+=produto.preco)
        cliente.getServicosConsumidos.forEach(servico => serv+=servico.preco)
        return total
    }

    private ordenaValConsumido(a: Cliente, b: Cliente) {
        const bleros = this.contaValor(a)
        const bleros2 = this.contaValor(b)
        let tudoA = bleros[0] + bleros[1]
        let tudoB = bleros2[0] + bleros2[1]
        
        if(tudoA > tudoB) {
            return -1
        } else if(tudoB < tudoA){
            return 1
        } else {
            return 0
        }
    }

    listar(): void {
        this.top10 = this.clientes
        this.top10.sort(this.ordenaValConsumido)
        console.log(`\nTop 10 clientes que mais consumiram:`);
        for(let index = 0; index < 10; index++) {
            console.log(`${index+1} - ${this.top10[index].nome} - ${this.top10[index].getProdutosConsumidos.length + this.top10[index].getServicosConsumidos.length} Produtos/Serviços consumidos`  )
        }
        console.log(`---------------------------------------------------------`)
    }
}