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
    private pets: Pet[]
    private entrada: Entrada

    constructor(produtos: Produto[], clientes: Cliente[], pets: Pet[]) {
        super()
        this.produtos = produtos
        this.clientes = clientes
        this.pets = pets
        this.entrada = new Entrada()
    }

    adicionar(): void {
        console.log(`\nInício da compra de produtos`)
        const listagem = new ListagemProdutos(this.produtos)
        listagem.listar()
        let continuar = true
        let cpf: string
        let indexUser: number = 0
        while(continuar){
            cpf = this.entrada.receberTexto(`Escolha o cpf do cliente que deseja comprar: `)
            this.clientes.forEach((cliente, index) => {
                if(cliente.getCpf.getValor === cpf){
                    indexUser = index
                    continuar = false
                }
            })
        }

        continuar = true
        let nome: string
        let indexListaPet: number
        let indexPet: number
        while(continuar){
            nome = this.entrada.receberTexto(`Escolha o nome do pet que obterá o produto: `)
            nome.toLowerCase()
            this.pets.forEach((pet, index) => {
                if(pet.getNome.toLowerCase() === nome){
                    indexPet = index
                }
            })

            this.clientes[indexUser].getPets.forEach((pet, index) => {
                if(pet.getNome.toLowerCase() === nome){
                    indexListaPet = index
                    continuar = false
                }
            })
        }

        let achou = false
        while(!achou){
        const escolhaItem = this.entrada.receberTexto(`Escolha o código do produto que deseja adicionar: `)
            this.produtos.forEach(produto => {
                if(produto.codigo === escolhaItem) {
                    this.clientes[indexUser].addProd(produto)
                    this.clientes[indexUser].getPets[indexListaPet].getProdutosConsumidos.push(produto)
                    this.pets[indexPet].setProdutosConsumidos = this.clientes[indexUser].getPets[indexListaPet].getProdutosConsumidos
                    achou = true
                }
            })
            if(!achou){
                console.log(`Produto não encontrado! Insira um código válido.`)
            }
        }
        
        console.log(`\nCadastro concluído!\n`)
    }
}
