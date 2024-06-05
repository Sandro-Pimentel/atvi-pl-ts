import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Remocao from "./remocao";

export default class RemocaoProduto extends Remocao {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    apagar(): void {
        console.log("\nInício da remoção de produto")
        let cod =  this.entrada.receberTexto(`Por favor informe o codigo do produto: `)
        let removido: Produto[] = [];
        this.produtos.forEach((produto, index) => {
            if(produto.codigo == cod) {
                removido = this.produtos.splice(index, 1)
            } 
        })
        if(removido.length > 0){
            console.log("Produto deletado com sucesso!")
            console.log('\n')
        } 
    }
}