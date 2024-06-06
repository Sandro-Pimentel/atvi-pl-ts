import CPF from "./cpf"
import Produto from "./produto"
import Servico from "./servico"

export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private cpfDono: CPF
    private produtosConsumidos: Produto[]
    private servicosConsumidos: Servico[]

    constructor(nome: string, raca: string, genero: string, tipo: string, cpfDono: CPF) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.cpfDono = cpfDono
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    set setProdutosConsumidos(produtosConsumidos: Produto[]) {
        this.produtosConsumidos = produtosConsumidos
    }
    
    set setServicosConsumidos(servicosConsumidos: Servico[]) {
        this.servicosConsumidos = servicosConsumidos
    }

    get getNome() {
        return this.nome
    }
    
    get getRaca() {
        return this.raca
    }

    get getGenero() {
        return this.genero
    }

    get getTipo() {
        return this.tipo
    }

    get getCpfDono() {
        return this.cpfDono
    }

    get getProdutosConsumidos() {
        return this.produtosConsumidos
    }

    get getServicosConsumidos() {
        return this.servicosConsumidos
    }

}
