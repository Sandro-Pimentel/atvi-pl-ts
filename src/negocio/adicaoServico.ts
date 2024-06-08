import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import Servico from "../modelo/servico";
import Adicao from "./adicao";
import ListagemServicos from "./listagemServicos";

export default class AdicaoServico extends Adicao {
    private servicos: Servico[]
    private clientes: Cliente[]
    private pets: Pet[]
    private entrada: Entrada

    constructor(servicos: Servico[], clientes: Cliente[], pets: Pet[]) {
        super()
        this.servicos = servicos
        this.clientes = clientes
        this.pets = pets
        this.entrada = new Entrada()
    }

    adicionar(): void {
        console.log(`\nInício da compra de produtos`)
        const listagem = new ListagemServicos(this.servicos)
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
            nome = this.entrada.receberTexto(`Escolha o nome do pet que obterá o serviço: `)
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
        const escolhaItem = this.entrada.receberTexto(`Escolha o código do serviço que deseja adicionar: `)
            this.servicos.forEach(servico => {
                if(servico.codigo === escolhaItem) {
                    this.clientes[indexUser].addServ(servico)
                    this.clientes[indexUser].getPets[indexListaPet].getServicosConsumidos.push(servico)
                    this.pets[indexPet].setServicosConsumidos = this.clientes[indexUser].getPets[indexListaPet].getServicosConsumidos
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
