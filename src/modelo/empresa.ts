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

    public get getPets(){
        return this.pets
    }

    public set setClientes(clientes: Cliente[]){
        this.clientes = clientes
    }

    public set setProdutos(produtos: Produto[]){
        this.produtos = produtos
    }

    public set setServicos(servicos: Servico[]){
        this.servicos = servicos
    }

    public set setPets(pets: Pet[]){
        this.pets = pets
    }
}