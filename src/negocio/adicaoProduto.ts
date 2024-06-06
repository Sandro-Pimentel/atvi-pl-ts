import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import Adicao from "./adicao";
import ListagemProdutos from "./listagemProdutos";

export default class AdicaoProduto extends Adicao {
    private produtos: Produto[]
    private clientes: Cliente[]
    private entrada: Entrada

    constructor(produtos: Produto[], clientes: Cliente[]) {
        super()
        this.produtos = produtos
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    adicionar(): void {
        console.log(`\nInício da compra de produtos`)
        const listagem = new ListagemProdutos(this.produtos)
        listagem.listar()
        let continuar = true
        let cpf: string
        let user: Cliente = new Cliente('', '', new CPF('', new Date()))
        while(continuar){
            cpf = this.entrada.receberTexto(`Escolha o cpf do cliente que deseja comprar: `)
            this.clientes.forEach(cliente => {
                if(cliente.getCpf.getValor === cpf){
                    user = cliente
                    continuar = false
                }
            })
        }

        continuar = true
        let nome: string
        let bixin: Pet
        while(continuar){
            nome = this.entrada.receberTexto(`Escolha o nome do pet que obterá o produto: `)
            user.getPets.forEach(pet => {
                if(pet.getNome === nome){
                    bixin = pet
                    continuar = false
                }
            })
        }

        let achou = false
        continuar = true
        while (continuar) {
            while(!achou){
            const escolhaItem = this.entrada.receberTexto(`Escolha o código do produto que deseja adicionar: `)
                this.produtos.forEach(produto => {
                    if(produto.codigo === escolhaItem) {
                        this.produtos.push(produto)
                        user.addProd(produto)
                        achou = true
                    }
                })
                if(!achou){
                    console.log(`Produto não encontrado! Insira um código válido.`)
                }
            }
            const continuaEntrada = this.entrada.receberTexto(`Deseja continuar comprando? (S/N)`)
            if(continuaEntrada === `N`) {
                continuar = false
            }
        }
        
        console.log(`\nCadastro concluído!\n`)
    }
}
