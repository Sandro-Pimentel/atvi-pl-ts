import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    nome: string
    nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    
    set setProdutosConsumidos(produtosConsumidos: Produto[]) {
        this.produtosConsumidos = produtosConsumidos
    }
    
    set setServicosConsumidos(servicosConsumidos: Servico[]) {
        this.servicosConsumidos = servicosConsumidos
    }

    get getCpf(): CPF {
        return this.cpf
    }
    
    get getRgs(): Array<RG> {
        return this.rgs
    }

    addRg(rg: RG): void {
        this.rgs.push(rg)
    }

    altRg(index: number, rg: RG): void {
        this.rgs.splice(index, 1, rg)
    }  
    
    get getDataCadastro(): Date {
        return this.dataCadastro
    }
    
    get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    
    addTelefone(tel: Telefone) {
        this.telefones.push(tel)
    }
    
    altTelefone(index: number, tel: Telefone): void {
        this.telefones.splice(index, 1, tel)
    }

    get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    
    get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    
    get getPets(): Array<Pet> {
        return this.pets
    }

    addPet(pet: Pet): void {
        this.pets.push(pet)
    }

    altPet(index: number, pet: Pet): void {
        this.pets.splice(index, 1, pet)
    }

    remPet(index: number): void {
        this.pets.splice(index, 1)
    }

    addProd(prod: Produto): void {
        this.produtosConsumidos.push(prod)
    }

    altProd(index: number, prod: Produto): void {
        this.produtosConsumidos.splice(index, 1, prod)
    }

    remProd(index: number): void {
        this.produtosConsumidos.splice(index, 1)
    }
    
    addServ(prod: Produto): void {
        this.produtosConsumidos.push(prod)
    }

    altServ(index: number, prod: Produto): void {
        this.produtosConsumidos.splice(index, 1, prod)
    }

    remServ(index: number): void {
        this.produtosConsumidos.splice(index, 1)
    }
}