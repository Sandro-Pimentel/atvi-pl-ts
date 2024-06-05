import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Remocao from "./remocao";

export default class RemocaoPet implements Remocao {
    private pets: Array<Pet>
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        this.pets = pets
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    apagar(): void {
        console.log("\nInício da remoção de pet")
        let cpf =  this.entrada.receberTexto(`Por favor informe o cpf do dono do pet: `)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let removido: Pet[] = [];
        this.clientes.forEach((cliente) => {
            if(cliente.getCpf.getValor == cpf) {
                cliente.getPets.forEach((pet, index) => {
                    if(pet.getNome == nome) {
                        cliente.remPet(index)
                        removido = this.pets.splice(index, 1)
                    }
                });
            }
        })
        
        if(removido.length > 0){
            console.log("\nPet deletado com sucesso!\n")
        }
    }
}