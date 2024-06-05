import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPet implements Listagem {
    private pets: Array<Pet>
    
    constructor(pets: Array<Pet>) {
        this.pets = pets
    }

    listar(): void {
        console.log(`\nLista de todos os pets: `)
        this.pets.forEach(pet => {
            console.log(`Nome: ${pet.getNome}`)
            console.log(`Tipo: ${pet.getTipo}`)
            console.log(`Raça: ${pet.getRaca}`)
            console.log(`Gênero: ${pet.getGenero}`)
            console.log(`Cpf do Dono: ${pet.getCpfDono}`)
            console.log(`---------------------------------`)
        })
        console.log(`\n`)
    }
}