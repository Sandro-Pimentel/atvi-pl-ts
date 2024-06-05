import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Atualizacao from "./atualizacao";

export default class AtualizacaoProduto extends Atualizacao {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    atualizar(): void {
        console.log(`\nInício da atualização de produto`)
        let cod = this.entrada.receberTexto(`Por favor informe o codigo do produto que deseja atualizar: `)
        let nome = this.entrada.receberTexto(`Por favor informe o novo nome do produto: `)
        let preco = this.entrada.receberNumero(`Por favor informe o novo nome do produto: `)
        let atualizado: Produto[] = [];
        this.produtos.forEach((produto, index) => {
            if(produto.codigo == cod) {
                atualizado = this.produtos.splice(index, 1, new Produto(cod, nome, preco))
            }
        })
        if(atualizado.length > 0){
            console.log("Produto atualizado com sucesso!")
            console.log('\n')
        }
    }
}