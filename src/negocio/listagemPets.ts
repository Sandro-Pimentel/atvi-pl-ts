import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPet implements Listagem {
    private pets: Array<Pet>
    
    constructor(pets: Array<Pet>) {
        this.pets = pets
    }

    listar(): void {
        console.log(`\nLista de todos os pets: `)
        this.pets.forEach(e => {
            console.log(`Nome: ${e.getNome}`)
            console.log(`Tipo: ${e.getTipo}`)
            console.log(`Raça: ${e.getRaca}`)
            console.log(`Gênero: ${e.getGenero}`)
            console.log(`Cpf do Dono: ${e.getCpfDono}`)
            console.log(`---------------------------------`)
        })
        console.log(`\n`)
    }
}