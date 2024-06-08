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

    private ordenaValConsumido(a: Cliente, b: Cliente) {
        let prod = 0
        let serv = 0
        a.getProdutosConsumidos.forEach(produto => prod+=produto.preco)
        a.getServicosConsumidos.forEach(servico => serv+=servico.preco)
        let tudoA = prod + serv
        prod = 0
        serv = 0
        b.getProdutosConsumidos.forEach(produto => prod+=produto.preco)
        b.getServicosConsumidos.forEach(servico => serv+=servico.preco)
        let tudoB = prod + serv
        
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
        if(this.top10.length >= 10){
            for(let index = 0; index < 10; index++) {
                console.log(`${index+1} - ${this.top10[index].nome} - ${this.top10[index].getProdutosConsumidos.length + this.top10[index].getServicosConsumidos.length} Produtos/Serviços consumidos`  )
            }
        } else {
            for(let index = 0; index < this.top10.length; index++){
                console.log(`${index+1} - ${this.top10[index].nome} - ${this.top10[index].getProdutosConsumidos.length + this.top10[index].getServicosConsumidos.length} Produtos/Serviços consumidos`  )
            }
        }
        console.log(`---------------------------------------------------------`)
    }
}