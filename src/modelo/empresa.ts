import Cliente from "./cliente"
import Pet from "./pet"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Cliente[]
    private produtos: Produto[]
    private servicos: Servico[]
    private pets: Pet[]

    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.pets = []
    }

    public get getClientes(){
        return this.clientes
    }

    public get getProdutos(){
        return this.produtos
    }

    public get getServicos(){
        return this.servicos
    }

    get getPets(){
        return this.pets
    }
}