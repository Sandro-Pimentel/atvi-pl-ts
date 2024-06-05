import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import Adicao from "./adicao";
import ListagemServicos from "./listagemServicos";

export default class AdicaoServico extends Adicao {
    private servicos: Servico[]
    private clientes: Cliente[]
    private entrada: Entrada

    constructor(servicos: Servico[], clientes: Cliente[]) {
        super()
        this.servicos = servicos
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    adicionar(): void {
        console.log(`\nInício da compra de produtos`)
        const listagem = new ListagemServicos(this.servicos)
        listagem.listar()
        let continuar = true
        let cpf: string
        let user: Cliente
        while(continuar){
            cpf = this.entrada.receberTexto(`Escolha o cpf do cliente que deseja comprar: `)
            this.clientes.forEach(cliente => {
                if(cliente.getCpf.getValor === cpf){
                    user = cliente
                }
            })
        }

        let achou = false
        continuar = true
        while (continuar) {
            while(!achou){
            const escolhaItem = this.entrada.receberTexto(`Escolha o código do produto que deseja adicionar: `)
                this.servicos.forEach(servico => {
                    if(servico.codigo === escolhaItem) {
                        this.servicos.push(servico)
                        user.addProd(servico)
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