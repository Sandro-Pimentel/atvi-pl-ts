import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    cadastrar(): void {
        console.log("Inicio do cadastro de produto");
        let codProduto = this.entrada.receberTexto("Digite o código do produto: ");
        let nomeProduto = this.entrada.receberTexto("Digite o nome do produto: ");
        let precoProduto = this.entrada.receberNumero("Digite o preço do produto: ");
        let produto = new Produto(codProduto, nomeProduto, precoProduto);
        this.produtos.push(produto);
        console.log('\nCadastro concluído!\n')
    }
}