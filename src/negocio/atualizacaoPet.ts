import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Atualizacao from "./atualizacao";

export default class AtualizacaoPet implements Atualizacao {
    private pets: Array<Pet>
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        this.pets = pets
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    atualizar(): void {
        console.log(`\nInício da atualização de pet`)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet que deseja atualizar: `)
        let cpf = this.entrada.receberTexto(`Por favor informe o cpf do dono do pet que deseja atualizar: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o novo tipo do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe o novo raça do pet: `)
        let gen = this.entrada.receberTexto(`Por favor informe o novo gênero do pet: `)

        let atualizado;
        this.clientes.forEach((e, i) => {
            if(e.getCpf.getValor == cpf) {
                this.pets.forEach((pet, index) => {
                    if(pet.getNome == nome) {
                        e.altPet(index, new Pet(nome, raca, gen, tipo, pet.getCpfDono))
                        atualizado = this.pets.splice(index, 1, new Pet(nome, raca, gen, tipo, pet.getCpfDono))
                    }
                })
                
            }
        })
        if((typeof(atualizado)).length < 10){
            console.log("\nPet atualizado com sucesso!")
            console.log('\n')
        }
    }
}