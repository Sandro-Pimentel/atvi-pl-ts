import CPF from "./cpf"

export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private cpfDono: CPF

    constructor(nome: string, raca: string, genero: string, tipo: string, cpfDono: CPF) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.cpfDono = cpfDono
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
}