import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`Código: ${produto.codigo}`)
            console.log(`Nome: ${produto.nome}`);
            console.log(`Preço: ${produto.preco}`)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}